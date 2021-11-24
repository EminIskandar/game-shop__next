import React from 'react'
import { NextPage } from 'next'

//img
import error404 from 'img/other/404-3.webp'

//styled
import { Section, Content, Image, Text } from './styled'

const Index : NextPage = () =>{

    return ( 
            <Section data-testid="error">
                 <Content>
                     <Image>
                         <img src={error404.src} alt="error"/>
                     </Image>
                     <Text>
                        <h3>HOUSTON, WE HAVE A PROBLEM!</h3>
                        <h2>We were unable to find what you were looking for.</h2>
                        <p>Please use search to find what you are looking for, or use back button in your browser.</p>
                     </Text>
                 </Content>
             </Section> 
    )
}

export default Index
