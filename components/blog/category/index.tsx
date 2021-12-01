import React from 'react'  
import { NextPage } from 'next'
import { CategoryPageProps } from 'interfaces'
import Link from 'next/link'
import { useSelector } from 'react-redux'
import { Store } from 'interfaces/store' 

//styled
import { 
    Main, Content, Title, Breadcumbs, BreadcumbsItem, BreadcumbsItems,
    Articles, ArticleContent, Article, Img, Text, TextTitle, TextDate,
    TextDesc 
} from './styled' 
  

const Category : NextPage<CategoryPageProps>  = ( {categoryName} ) => {
     
    //state
    const [name, setName] = React.useState('News')
    const [category, setCategory] = React.useState('news')
    
    //redux
    const articles = useSelector(( state : Store) => state.blogCategory)

    React.useEffect(() => { 

        switch (categoryName) {

            case 'news' : 
                setName('News') 
                setCategory('news') 
            ;break;

            case 'now-trending' : 
                setName('Now Trending') 
                setCategory('nowTrending') 
            ;break;

            case 'promosions' : 
                setName('Promosions') 
                setCategory('promosions') 
            ;break;

            default:  
            break 
        }  
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[categoryName])

    return (
        <Main>
            <Content>
                <Title>
                    <h2>{name}</h2> 
                </Title>
                <Breadcumbs>	
                    <BreadcumbsItems>	
                        <BreadcumbsItem>
                            <h4>Gamivo Blog /</h4>
                        </BreadcumbsItem>
                        <BreadcumbsItem>
                            <h4>{name}</h4>
                        </BreadcumbsItem>
                    </BreadcumbsItems>
                </Breadcumbs>
                <Articles>
                    <ArticleContent>
                         {
                             Object.values(articles[category]).map((article,index)=>{
                                 const image = require(`img/blog/${article.img}`)
                                 return <Link href ={article.path} key={index} passHref>
                                            <Article> 
                                                <Img>
                                                    <img src={image.default.src} alt={`${categoryName}-${index}`}/>
                                                </Img>
                                                <Text>
                                                    <TextTitle>
                                                        <h4>{article.title}</h4>
                                                    </TextTitle>
                                                    <TextDesc>
                                                        <p>{article.text}</p>
                                                    </TextDesc>
                                                    <TextDate>
                                                        <h5>{article.section}</h5>
                                                        <h5>{article.date}</h5>
                                                    </TextDate>
                                                </Text>
                                            </Article> 
                                        </Link> 
                             })
                         }
                    </ArticleContent>
                </Articles>
            </Content>
        </Main>
    )
}

export default Category