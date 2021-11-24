import {NextPage} from 'next'
import logo from 'img/big-logo.webp'

//styled
import {
    Section, Content, Title, Info, InfoContent,
    InfoDesc, InfoDescContent, InfoDescTitle, InfoText,
    InfoTitle, Image
} from './styled'

const Header: NextPage = ()=>  (
    <Section data-testid="About-header">
        <Content>
            <Title>
                <h2>About <span>Us</span></h2>
            </Title>
            <Info>
                <InfoContent>
                    <InfoText>
                        <InfoTitle>
                            <h2><span>GAMIVO</span> - Who are we? </h2>
                        </InfoTitle>
                        <InfoDesc>
                            <InfoDescTitle>
                                <h2>A revolutionary place for digital products run by gamers for gamers!</h2>
                            </InfoDescTitle> 
                            <InfoDescContent>
                                <p>The fastest growing website for <span>digital games</span> on the market. We are focused to bring you the best and safe platform for all digital transactions</p>
                                <p>Browse through different games ranging from <span>PC to console</span>, stay protected while making the purchase and enjoy the game!</p>
                            </InfoDescContent>
                        </InfoDesc>
                    </InfoText>
                    <Image>
                            <img src={logo.src} alt="about-header-img"/>
                    </Image>
                </InfoContent>
            </Info>
        </Content>
    </Section>
)  

export default Header;