import React from 'react'
import { NextPage } from 'next' 
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckSquare, faCopy, faThumbsUp } from '@fortawesome/free-solid-svg-icons'

//styled
import {
    Section, Content, Sections, SectionsItem, Questions, QuestionsItems, Title,
    Items, Item, ItemHeader, ItemName, ItemNumb, ItemContent, ItemLeft, ItemText,
    ItemLink, ItemRight, ItemSurvey, ItemSurveyBtn, ItemSurveyTitle
} from './styled'

const Problems: NextPage = () => {

    //redux
    const data = useSelector( (state : Store ) => state.support)

    //state
    const [index, setindex] = React.useState(0); 

    //ref
    const sectionName = React.useRef(null);
    const questinItems = React.useRef(null);

    React.useEffect(() => { 
        if(null !==sectionName.current && null !== questinItems.current ){ 
            const sectionChildren = document.querySelectorAll('.section-item')
            const questionChildren = document.querySelectorAll('.question-item')
            for(var i=0;i<3;i++){
                sectionChildren[i].classList.remove('active')
                questionChildren[i].setAttribute( 'style' ,'display: none')
            }
            sectionChildren[index].classList.add('active')
            questionChildren[index].setAttribute( 'style' ,'display: block')
        }
    }, [index])
 
    const selectSections = (index: any)=>{
        setindex(index)
    }

    return (
        <Section data-testid="sup-problems">
            <Content>
                <Sections ref={sectionName}>
                    {
                       Object.keys(data).map( (name,index) =>{
                            return <SectionsItem onClick={selectSections.bind(this,index)} key={index} className='section-item'> 
                                        <FontAwesomeIcon icon={faCheckSquare}></FontAwesomeIcon>
                                        <h2>{name}</h2>
                                    </SectionsItem>
                       })
                    } 
                </Sections>
                <Questions>
                    <Title>
                        <h2>Popular Problems</h2>
                    </Title>
                    <QuestionsItems ref={questinItems}>

                        {
                            Object.values(data).map( (item,index) =>{
                                 const items  = item;
                                return <Items onClick={selectSections.bind(this,index)} key={index} data-testid={`problems${index}`} className='question-item'>
                                          {
                                               Object.values(items).map( (item,index) =>{
                                                    return <QuestionItem data={item} key={index}/>
                                               })
                                          }
                                       </Items>
                           })
                        }
 
                    </QuestionsItems>
                </Questions>
            </Content>
        </Section>
    )
}

export default Problems

const QuestionItem = ( {data}: any )=>{
    
    const openCloseContent = (e: React.MouseEvent<HTMLDivElement> & { currentTarget: Element } )=>{
        if(null !== e.currentTarget.parentNode ){
            const item =  e.currentTarget.parentNode.children[1] 
            if(item.getAttribute('style') === 'display: none;'){
                item.setAttribute("style","display: block;")
            }else{
                item.setAttribute("style","display: none;")
            }
        }
    }

    return( 
        <Item >
            <ItemHeader onClick={openCloseContent} data-testid={`questions${data.code}`}>
                <ItemName>
                    <h2>{data.name}</h2>
                </ItemName>
                <ItemNumb>
                    <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                    <h5>{data.code}</h5>
                </ItemNumb> 
            </ItemHeader>
            <ItemContent style={{ display: 'none'}} data-testid={data.code} >
                <ItemLeft>
                    <ItemText>
                        {
                            data.title === '' ? 
                            <>
                                <div>
                                    <h4>Here you can find all statuses explained:</h4>
                                </div>
                                <ul>
                                     {
                                         data.text.map(( text:any, index:number )=>{
                                             return <li key={index}><p>{text}</p></li>
                                         })
                                     }
                                </ul>
                            </> 
                            : 
                            <div>
                                {
                                    data.text.map(( text:any, index:number )=>{
                                        return <p key={index} >{text}</p>
                                    })
                                }
                            </div>
                        }
                        
                    </ItemText>
                    <ItemLink>
                        <h4>Link:</h4>
                        <input type="text" value={data.link} readOnly/>
                        <button type="button"><FontAwesomeIcon icon={faCopy}></FontAwesomeIcon></button>
                    </ItemLink>
                </ItemLeft>
                <ItemRight>
                    <ItemSurvey>
                        <ItemSurveyTitle>
                            <h2>Was this helpful ?</h2>
                        </ItemSurveyTitle>
                        <ItemSurveyBtn>
                            <button type="button"> Yes </button>
                            <button type="button"> No </button>
                        </ItemSurveyBtn>
                    </ItemSurvey>
                    <ItemSurvey>
                        <ItemSurveyTitle>
                            <h2>Still have a problem?</h2>
                        </ItemSurveyTitle>
                        <ItemSurveyBtn>
                            <button type="button"> Creat Ticket </button> 
                        </ItemSurveyBtn>
                    </ItemSurvey>
                </ItemRight>
            </ItemContent>
        </Item> 
    )
}