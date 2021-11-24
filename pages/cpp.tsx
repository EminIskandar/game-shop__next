import React from 'react' 
import Layout from 'layout'
import { NextPage } from 'next'

//component
import{ CppHeader, CppBenefit } from 'components'

const CustomerProtectionProgram: NextPage = ()=> { 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <Layout title={'Customer Protection Program - GAMIVO'}>
            <CppHeader/> 
            <CppBenefit/>  
        </Layout>
    )
}

export default CustomerProtectionProgram;
