import React from 'react'
import Layout from 'layout'
import { NextPage } from 'next'

//component
import { TermsIndex } from '../components'
 

const TermsConditions: NextPage= ()=> {
     
    React.useEffect(() => { 
        window.scrollTo(0, 0)
    }, [])


    return (
        <Layout title={'Terms and conditions - GAMIVO'}> 
              <TermsIndex/>
        </Layout>
    )
}

export default TermsConditions
