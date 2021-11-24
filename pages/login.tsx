import React from 'react'
import Layout from 'layout/auth'

//component
import{ LoginIndex } from 'components'

const Login: React.FC = ()=> { 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    
    return (
        <Layout title={'Login - GAMIVO'}> 
            <LoginIndex/>
        </Layout>
    )
}

export default Login;

