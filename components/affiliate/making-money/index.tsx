import React from 'react'
import { NextPage } from 'next'

//img
import laptop from 'img/other/laptop.webp'

//styled
import { 
    Section, Content, Start, StartContent, StartDescription, StartImage, StartTitle,
    Comission, ComissionContent, ComissionPercent, ComissionText
} from './styled'

const  MakingMoney : NextPage = () => (
        <Section data-testid="making-money">
            <Content>
                <Start>
                    <StartContent>
                        <StartDescription>
                            <StartTitle>
                                <h2>Tell others about GAMIVO and earn real money when they buy their games.</h2>
                            </StartTitle>
                            <p>Do you have friends that buy games? Or maybe you have a community of gamers? Share your referral link with your audience and earn money if they buy products on GAMIVO after your recommendation.</p>
                            <p>Lastly, payout your earnings in real money!</p>
                            <button className="Start__btn"> START MAKING MONEY</button>
                        </StartDescription>
                        <StartImage>
                            <img src={laptop.src} alt="making-money"/>
                        </StartImage>
                    </StartContent>
                </Start>
                <Comission>
                    <ComissionContent>
                        <ComissionText>
                            <h1>THE HIGHEST COMMISSION <span>IN THE INDUSTRY</span></h1>
                        </ComissionText>
                        <ComissionPercent>
                            <h1>8%</h1>
                        </ComissionPercent>
                    </ComissionContent>
                </Comission>
            </Content>
        </Section>
    ) 

export default MakingMoney;
