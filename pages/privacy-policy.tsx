import React from 'react'
import Layout from 'layout'
import { NextPage } from 'next'

//component
import{  PrivacyIndex } from 'components'

const Privacy: NextPage  = ()=> { 
    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])


    
    return (
        <Layout title={ 'Privacy policies - Privacy & Terms - GAMIVO'}>
           < PrivacyIndex/>
        </Layout>
    )
}

export default Privacy;
