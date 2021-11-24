import React from 'react'
import Layout from 'layout'  
//component
import { AboutHeader,AboutProduct,AboutSlider } from 'components'
 
const AboutUs: React.FC = ()=>{ 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <Layout title={'About us | GAMIVO'}>
           <AboutHeader/>
           <AboutProduct/>
           <AboutSlider/>
        </Layout>
    ) 
}

export default AboutUs
