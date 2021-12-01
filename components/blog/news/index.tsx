import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

//img
import img1 from 'img/blog/blog-big-img1.webp'
import img2 from 'img/blog/blog-big-img2.webp'

//styled
import {
    Section, Content, Title, Sections, SectionItem,
    Article, Articles, Img, Info, Date, Name
} from './styled'

const News : NextPage= () => {

    return (
         <Section data-testid="blog-news">
             <Content>
                 <Title>
                     <h2 >NEWS</h2>
                 </Title>
                 <Sections>
                    <SectionItem className="active" data-testid="n-header" >
                        <Link href="/"> 
                            <a className="active"> Latest</a>
                        </Link>
                    </SectionItem> 
                    <SectionItem>
                        <Link href="/">
                            <a>Trending </a>
                        </Link> 
                    </SectionItem> 
                    <SectionItem>
                        <Link href="/"> 
                            <a>Popular </a>
                        </Link>
                    </SectionItem> 
                 </Sections>
                 <Articles> 
                     <Article href="/blog/article/top-10-weirdest-tekken-characters">
                        <Img>
                            <img src={img1.src} alt="news-1"/>
                        </Img>
                        <Info> 
                            <Date>
                                <h3>General News Now Trending</h3>
                                <time>02/04/2021</time>
                            </Date>  
                            <Name>
                                <h2>TOP 10 WEIRDEST TEKKEN CHARACTERS</h2>
                            </Name>
                        </Info>
                    </Article> 
                     <Article href="/blog/article/outriders-everything-you-need-to-know-about-the-game">
                        <Img>
                            <img src={img2.src} alt="news-2"/>
                        </Img>
                        <Info> 
                            <Date>
                                <h3>General News Now Trending</h3>
                                <time>03/24/2021</time>
                            </Date>  
                            <Name>
                                <h2>Outriders: Everything you need to know about the game</h2>
                            </Name>
                        </Info>
                    </Article> 
                 </Articles>
             </Content>
         </Section>
    )
}

export default News