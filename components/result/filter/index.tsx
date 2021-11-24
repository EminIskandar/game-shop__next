import React from 'react'     
import { useSelector } from 'react-redux';
import { Store } from 'interfaces/store'; 
  
//styled
import {  
    FilterContent, FilterTitle, FilterSelect, 
    FilterText, FilterList, FilterCheckbox, FilterType 
} from './styled'  


const Filters = ({ datas, callFilter } : any)=>{ 

    //state
    const [show, setShow] = React.useState(false)

    //redux
    const gameFiltersType = useSelector( ( state : Store ) => state.gameFiltersType)

    const openCloseFilter = ()=>{
        setShow( (show) => !show )
    }

    const filterProduct = (  )=>{
        callFilter()
    }
  
    return(
        <>
        <FilterType>
            <FilterContent>
                <FilterTitle>
                    <h4>{datas}</h4>
                </FilterTitle>
                <FilterSelect onClick = { openCloseFilter} data-testid={`select-${datas}`}>
                    <FilterText>
                        <h6>Select...</h6>
                    </FilterText>
                </FilterSelect >
                {
                    show ? <FilterList data-testid={`selectList-${datas}`}>
                                <ul>
                                    {
                                        Object.values( gameFiltersType[datas] ).map((section,index)=>{
                                            return <li key={index}>
                                                        <FilterCheckbox>
                                                            <input type="checkbox" data-testid={`${datas}-checkbox-${index}`} id="action" data-filtertype={datas} onClick={filterProduct}/>
                                                            <label htmlFor="" className="filter-label"></label>
                                                        </FilterCheckbox> 
                                                        <h6>{section}</h6>
                                                    </li>
                                        })
                                    } 
                                </ul>
                            </FilterList> : ''
                }
                
            </FilterContent>
        </FilterType> 
        </>
    )
}

export default Filters