import React from 'react' 
import { product, ResultComponentProps} from 'interfaces';
import { useRouter } from 'next/router';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faSync } from '@fortawesome/free-solid-svg-icons';   
import { useSelector } from 'react-redux';
import { Store } from 'interfaces/store';
import { NextPage } from 'next';

//database
import database from 'db/db.json';

//component
import Product from '../product'
import Filter from '../filter'

//styled
import {
    Main, Header, HeaderDesc, HeaderSection, Shorting, ShortingContent, ShortingHeader,
    ShortingText, ShortingTypes, ShortingView, Row, Column, FiltersAndProduct, Filters, 
    FilterReset, Products, ProductsBtn 
} from './styled'  
   

const Index: NextPage<ResultComponentProps> = ( {datas,header} ) => {

    //router
    const router = useRouter();
    let { section } = router.query

    //redux
    const gameSectionDescription = useSelector( ( state : Store ) => state.gameSectionDescription)
    const gameFiltersType = useSelector( ( state : Store ) => state.gameFiltersType)

    //state
    const [numberOFProduct, setNumbeOfPRoducts] = React.useState(7)
    const [alignClass, setAlignClass] = React.useState('row');
    const [data,setData] = React.useState<product[]>([])

    //ref
    const row = React.useRef<HTMLDivElement>(null)
    const column = React.useRef<HTMLDivElement>(null)
    const table = React.useRef(null)
    const thead = React.useRef(null)

    React.useEffect(() => {
            setData(datas)
    }, [datas])


    const filterProduct = ()=>{
        const filterType           = Array.from(document.querySelectorAll('[data-filtertype="Type"]')),
        	  filterTypeLength     = Array.from(document.querySelectorAll('[data-filtertype="Type"]:checked')),
              filterGenres         = Array.from(document.querySelectorAll('[data-filtertype="Genres"]')),
              filterGenresLength   = Array.from(document.querySelectorAll('[data-filtertype="Genres"]:checked')),
              filterPlatform       = Array.from(document.querySelectorAll('[data-filtertype="Platform"]')),
              filterPlatformLength = Array.from(document.querySelectorAll('[data-filtertype="Platform"]:checked')),
              filterRegion         = Array.from(document.querySelectorAll('[data-filtertype="Region"]')),
              filterRegionLength   = Array.from(document.querySelectorAll('[data-filtertype="Region"]:checked')),
              filterPrice          = Array.from(document.querySelectorAll('[data-filtertype="Price"]')),
              filterPriceLength    = Array.from(document.querySelectorAll('[data-filtertype="Price"]:checked')); 

        let datas = database.games; 

        ///------------------FILTERING-----------------///   
        //filterin type
        if(filterTypeLength.length !== 0){
            datas = datas.filter(  
                item=>    
                ((filterType[1] as HTMLInputElement).checked ? item.name ==="DLC" : '')  
            )
        }
        //filterin genres 
        if(filterGenresLength.length !== 0){
            datas = datas.filter(  
                item=>  
                ((filterGenres[0] as HTMLInputElement).checked ? item.section === "action": '')  || 
                ((filterGenres[1] as HTMLInputElement).checked ? item.section ==="rpg" : '') || 
                ((filterGenres[2] as HTMLInputElement).checked ? item.section ==="fps" : '') || 
                ((filterGenres[3] as HTMLInputElement).checked ? item.section === "multiplayer" : '') ||  
                ((filterGenres[4] as HTMLInputElement).checked ? item.section === "adventure" : '') || 
                ((filterGenres[5] as HTMLInputElement).checked ? item.section ==="simulation" : '') || 
                ((filterGenres[6] as HTMLInputElement).checked ? item.section ==="strategy" : '') || 
                ((filterGenres[7] as HTMLInputElement).checked ? item.section ==="shooter" : '') 
            )
        }
          
        //filterin platform   
        if(filterPlatformLength.length !== 0){
            datas = datas.filter(  
                item=>  
                    ((filterPlatform[0] as HTMLInputElement).checked ? item.platform === "steam": '')  || 
                    ((filterPlatform[1] as HTMLInputElement).checked ? item.platform ==="Official website" : '') || 
                    ((filterPlatform[2] as HTMLInputElement).checked ? item.platform ==="origin" : '') || 
                    ((filterPlatform[3] as HTMLInputElement).checked ? item.platform === "epic" : '') ||  
                    ((filterPlatform[4] as HTMLInputElement).checked ? item.platform === "ubisoft" : '') || 
                    ((filterPlatform[5] as HTMLInputElement).checked ? item.platform ==="battle.net" : '')
            )
        }

        //filterin region 
        if(filterRegionLength.length !== 0){ 
            datas = datas.filter(  
                item=>   
                    ((filterRegion[0] as HTMLInputElement).checked ? item.languages.indexOf('EU')> -1 : '')  || 
                    ((filterRegion[1] as HTMLInputElement).checked ? item.languages.indexOf('RU')> -1   : '') || 
                    ((filterRegion[2] as HTMLInputElement).checked ? item.languages.indexOf('GE')> -1   : '') || 
                    ((filterRegion[3] as HTMLInputElement).checked ? item.languages.indexOf('FR')> -1   : '') ||  
                    ((filterRegion[4] as HTMLInputElement).checked ? item.languages.indexOf('TR')> -1   : '') || 
                    ((filterRegion[5] as HTMLInputElement).checked ? item.languages.indexOf('IT')> -1   : '') ||
                    ((filterRegion[6] as HTMLInputElement).checked ? item.languages.indexOf('JA')> -1   : '') ||
                    ((filterRegion[7] as HTMLInputElement).checked ? item.languages.indexOf('IS')> -1   : '')
            )
        }
        
        //price region  
        if(filterPriceLength.length !== 0){
         
            datas = datas.filter(  
                item=>  
                    ((filterPrice[0] as HTMLInputElement).checked ? (item.price > 0 && item.price < 5 ) : '')  || 
                    ((filterPrice[1] as HTMLInputElement).checked ? (item.price > 5 && item.price < 10)   : '') || 
                    ((filterPrice[2] as HTMLInputElement).checked ? (item.price > 10 && item.price < 25)   : '') || 
                    ((filterPrice[3] as HTMLInputElement).checked ? (item.price > 25 && item.price < 50)  : '') ||  
                    ((filterPrice[4] as HTMLInputElement).checked ? item.price > 50   : '') 
            )
        }
        (document.querySelectorAll('#section option')[0] as HTMLOptionElement).selected = true; // change selection defalut vaulue
        setData(datas) 
    }

    const alignment = (alignItem: string)=>{
        if(null !== column.current && null !== row.current){
            column.current.classList.remove('active')
            row.current.classList.remove('active')

            if(alignItem === 'row'){
                row.current.classList.add('active')
            }else{
                column.current.classList.add('active')
            }
            setAlignClass(alignItem)
        }
    }

    const sortingProduct = (e: React.FormEvent<HTMLSelectElement> )=>{
        let sortData: product[] = [],
            value = (e.target as HTMLSelectElement).value;

        switch (value) {
            case 'newest':
                let newest = [...data].sort(function(a, b) {
                    return parseFloat(a.id) - parseFloat(b.id);
                });

                sortData = newest
                break;
            case 'low-to-higt':
                let lowToHight = [...data].sort( function (a: any, b : any ) {
                    return parseFloat(a.price) - parseFloat(b.price);
                });

                sortData = lowToHight
                break;
            case 'high-to-low':
                let highToLow =[...data].sort(function(a: any, b : any) {
                    return parseFloat(a.price) - parseFloat(b.price);
                });

                highToLow.reverse()
                sortData = highToLow
                break;
            case 'a-z':
                let A_z = [...data].sort(function(a, b) {
                    return a["name"].localeCompare(b["name"]);
                });

                sortData = A_z
                break;
            case 'z-a':
                let Z_a =  [...data].sort(function(a, b) {
                    return a["name"].localeCompare(b["name"]);
                });

                Z_a.reverse()
                sortData =Z_a
                break;

            default:
                break;
        }
        setData(sortData)

    }
    return (  
        <Main data-testid="result">
            
            {
                header ? <Header>
                            <HeaderSection>
                                <h3>{section?.toString().toUpperCase()}</h3>
                            </HeaderSection>
                            <HeaderDesc>
                                <p>{    section === ''? gameSectionDescription[section] : null }</p>
                            </HeaderDesc>
                        </Header>:''
            }
            
            <Shorting>
                <ShortingHeader>
                    <ShortingContent>
                        <ShortingText>
                            <h4>Sort by</h4>
                        </ShortingText>
                        <ShortingTypes>
                            <select name="section" id="section" onChange={sortingProduct} data-testid="select">
                                <option value="newest">Newest</option>
                                <option value="low-to-higt">Price: low to high</option>
                                <option value="high-to-low">Price: high to low</option>
                                <option value="a-z">Name: A-Z</option>
                                <option value="z-a">Name: Z-A</option>
                            </select>
                        </ShortingTypes>
                    </ShortingContent>
                    <ShortingView>
                        <Row className="active" onClick={alignment.bind(this,'row')}  ref={row}>
                            <ul>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                                <li></li>
                            </ul>
                        </Row>
                        <Column onClick={alignment.bind(this,'column')} ref={column}>
                            <ul>
                                <li></li>
                                <li></li>
                            </ul>
                        </Column>
                    </ShortingView>
                </ShortingHeader>
                <FiltersAndProduct>
                    <Filters>
                        {
                            Object.keys(gameFiltersType).map((values,index)=>{
                                return <Filter key={index} datas={values} callFilter={filterProduct}/>
                            })
                        } 
                        <FilterReset>
                            <div>
                                <FontAwesomeIcon icon={faSync}></FontAwesomeIcon>
                            </div>
                            <div>
                                <h3>Reset filter</h3>
                            </div>
                        </FilterReset>
                    </Filters>
                    <Products theme={alignClass}>
                        <table ref={table}>
                            <thead ref={thead}>
                                <tr>
                                    <th>Title</th>
                                    <th>Platform</th>
                                    <th>Price</th>
                                    <th>Buy</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    {
                                        data.map((element : any, index : number) => {
                                            if(index <= numberOFProduct ){
                                                return <Product key ={index} productData={element} align={alignClass}/>
                                            }else{
                                                return null;
                                            }
                                        })
                                    }
                                </tr>
                            </tbody>
                        </table>
                        <ProductsBtn>
                            <button type="button" onClick={()=>{ setNumbeOfPRoducts( c=> c+5) }}>View more result</button>
                        </ProductsBtn>
                    </Products>
                </FiltersAndProduct>
            </Shorting>
        </Main> 
    )
}


export default Index