import { NextPage } from 'next'

//img
import img from 'img/blog/blog-big-img2.webp'
import Postimg1 from 'img/blog/post_img1.jpg'
import Postimg2 from 'img/blog/post_img2.jpg'

//styled
import {
    Main, Section, Image, Description, Content, Header, Breadcrumbs,
    Title, DateAndCategory, Date, Category 
} from './styled' 

const ArticleContent: NextPage = () => ( 
        <Main data-testid="article-content">
            <Section>
                <Image>
                    <div>
                        <img src={img.src} alt="post-image1"/>
                    </div>
                </Image>
                <Description>
                    <Content>
                        <Header >
                            <Breadcrumbs> 
                                <h4> <span>Gamivo Blog /</span> <span>General News Now Trending Promotions /</span> <span>Outriders: Everything you need to know about the game</span></h4> 
                            </Breadcrumbs>
                            <Title>
                                <h4>Outriders: Everything you need to know about the game</h4>
                            </Title>
                            <DateAndCategory>
                                <Category>
                                    <h4>General News Now Trending Promotions</h4>
                                </Category>
                                <Date>
                                    <h4>24/03/2021</h4>
                                </Date> 
                            </DateAndCategory>
                        </Header >
                        <h2>Outriders by acclaimed Polish studio People Can Fly is one of the hottest premiers of 2021. The ultimate mix of a shooter and an RPG brings us to the planet of Enoch. Is this adventure worth a shot? Let’s see what we know about Outriders.</h2>
                        <h1>Who are the Outriders?</h1>
                        <img src={Postimg1.src} alt="post-image2"/>
                        <p>The Outriders are humanity’s vanguard sent to the planet of Enoch to prepare it for colonization. They can fight using not only advanced weapons but also unique powers.</p>
                        <p>There are four classes of the Outriders:</p>
                        <ul>
                            <li>The Devastator – prefers close-range combat. Controls gravity</li>
                            <li>The Trickster – prefers close-range combat. Manipulates time</li>
                            <li>The Pyromancer – prefers mid-range combat. Uses fire-based attacks</li>
                            <li>The Technomancer – prefers long-range combat. Uses gadgets</li>
                        </ul>
                        <h1>Finally something new</h1>
                        <img src={Postimg2.src} alt="post-image3"/>
                        <p>Many gamers complain that there are only remakes, remasters, and sequels nowadays. Outriders is a whole new IP with its own original universe and heroes. Therefore, if you’re looking for something new, it could be the game for you.</p>
                    </Content>
                </Description>
            </Section>
        </Main> 
    ) 

export default ArticleContent