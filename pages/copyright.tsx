import React from 'react'
import Layout from 'layout'
import { NextPage } from 'next'

//component
import{ CopyrightIndex } from 'components'

const Copyright: NextPage  = ()=> { 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    
    return (
        <Layout title={'Copyright and Legal Issues - GAMIVO'}>
            <CopyrightIndex/>  
        </Layout>
    )
}

export default Copyright
