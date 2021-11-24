import React from 'react'
import Layout from 'layout'  

//component
import{ ErrorIndex } from 'components'

const Error: React.FC = ()=> {
 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    } ,[])

    
    return (
        <Layout title={'Page Not Found - GAMIVO'}>
          <ErrorIndex/>
        </Layout>
    )
}

export default Error;
