import React from 'react'
import Layout from 'layout'
import { NextPage } from 'next'

//component
import {SmartCurrent,SmartDaily,SmartHeader,SmartSlider,SmartWhatYouGet} from 'components'

const Smart: NextPage = ()=> {
      
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, []) 

    return (
        <Layout title={'Be SMART with GAMIVO - Save money on every purchase!'}>
             <SmartHeader/> 
             <SmartWhatYouGet/> 
             <SmartSlider/> 
             <SmartDaily/> 
             <SmartCurrent/> 
        </Layout>
    )
}

export default Smart
