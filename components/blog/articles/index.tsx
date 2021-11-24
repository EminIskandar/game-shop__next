import React from 'react'
import { NextPage } from 'next'
import Link from 'next/link'

//img
import img1 from 'img/blog/blog-big-img1.webp'
import img2 from 'img/blog/blog-big-img2.webp'
import img3 from 'img/blog/blog-big-img3.webp'

//styled
import {
    Section, Content, Image, Info, Name,
    DateAndBtn, Date, Btn, Article, BottomArticle
} from './styled'

 const Articles: NextPage = () => {
    return (
        <Section data-testid="blog-article">
            <Content>
                <Link href="/blog/article/top-10-weirdest-tekken-characters">
                    <Article theme={'top'}>
                        <Image>
                            <img src={img1.src} alt="article-1"/>
                        </Image>
                        <Info>
                            <Name>
                                <h2>TOP 10 WEIRDEST TEKKEN CHARACTERS</h2>
                            </Name>
                            <DateAndBtn>
                                <Date>
                                    <h3>General News Now Trending</h3>
                                    <time>02/04/2021</time>
                                </Date>
                                <Btn type="button" > READ ARTICLE </Btn>
                            </DateAndBtn>
                        </Info> 
                    </Article>
                </Link> 
                <BottomArticle>
                    <Link href="/blog/article/top-10-weirdest-tekken-characters">
                        <Article theme={'bottom'}  >
                            <Image>
                                <img src={img1.src} alt="article-2"/>
                            </ Image>
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
                    </Link> 
                    <Link href="/blog/article/outriders-everything-you-need-to-know-about-the-game">
                        <Article theme={'bottom'}  >
                            <Image>
                                <img src={img2.src} alt="article-3"/>
                            </Image>
                            <Info>  
                                <Date>
                                    <h3>General News Now Trending</h3>
                                    <time>24/03/2020</time>
                                </Date>  
                                <Name>
                                    <h2>Outriders: Everything you need to know about the game</h2>
                                </Name>
                            </Info>
                        </Article>
                    </Link> 
                    <Link href="/blog/article/mmo-games-worth-checking-out">
                        <Article theme={'bottom'}  >
                            <Image>
                                <img src={img3.src} alt="article-4"/>
                            </Image>
                            <Info>  
                                <Date>
                                    <h3>General News Now Trending</h3>
                                    <time>24/03/2020</time>
                                </Date> 
                                <Name>
                                    <h2>MMO Games Worth Checking Out</h2>
                                </Name>
                            </Info>
                        </Article>
                    </Link> 
                </BottomArticle>
            </Content>
        </Section>
    )
}

export default Articles