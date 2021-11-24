import React from 'react'
import Layout from 'layout/auth'

//component
import{ RegisterIndex } from 'components'

const  Register: React.FC = ()=> { 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    return (
        <Layout title={'Register - GAMIVO'}> 
            <RegisterIndex/>
        </Layout>
    )
}

export default  Register;