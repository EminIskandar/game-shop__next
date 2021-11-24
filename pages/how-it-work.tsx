import React from 'react'  
import { NextPage } from 'next'

//component
import { HowItWork } from 'components'
import Layout from 'layout'


const Index: NextPage = ()=> { 
    
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <Layout  title={'How GAMIVO works - save money today!'}>
            <HowItWork />
        </Layout> 
    )
}

export default Index
