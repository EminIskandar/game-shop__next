import React from 'react' 
import { NextPage } from 'next'
import Link from 'next/link'
import { Store } from 'interfaces/store'
import { useSelector } from 'react-redux' 

//style 
import {
    Section, Content, Header, Item,  Image, Text,
    Title, Description, Date, Items
}from './styled'


const Blog: NextPage = ()=>{ 

    //redux
    const article = useSelector((state: Store) => state.article)
    
    return (
        <Section data-testid="Blog">
            <Content>
                <Header>
                    <h2><span>Blog </span>Gamivo</h2>
                    <a href="/"> Show all news </a>
                </Header>
                <Items> 
                    {
                        article.map( (element , index )=> {
                            const image = require(`img/blog/${element.img}`)
                            return <Link href={element.path} key={index}> 
                                        <Item>
                                            <Image>
                                                <img src={image.default.src} alt={`blogImage${index}`}/>
                                            </Image>
                                            <Text>
                                                <Title>
                                                    <h2>{element.title}</h2>
                                                </Title>
                                                <Description>
                                                    <p>{element.description}</p>
                                                </Description>
                                                <Date>
                                                    <h4>{element.date}</h4>
                                                </Date> 
                                            </Text>
                                        </Item>
                                    </Link>
                        })
                    }
                   
                </Items>
            </Content>
        </Section>
    )
}

export default Blog