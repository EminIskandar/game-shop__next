import React from 'react'
import Layout from 'layout'
import { NextPage } from 'next'

//component
import{  SupHeader, SupProblems } from 'components'

const Support:  NextPage = ()=> { 
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    return (
        <Layout title={'FAQ - GAMIVO'}> 
            <SupHeader/>
            <SupProblems/>
        </Layout>
    )
}

export default Support;
