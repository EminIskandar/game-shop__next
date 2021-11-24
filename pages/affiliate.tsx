import React from 'react'
import Layout from 'layout'

//component
import{ AfStart, AfHIT, AfHeader, AfMakingMoney, AfPartnership} from 'components'
 
const Affiliate: React.FC =  () => { 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
 
    return (
        <Layout title={'Start making money with GAMIVO - Affiliate program'}>
           <AfHeader/>  
           <AfMakingMoney/>  
           <AfHIT/>  
           <AfPartnership/>  
           <AfStart/>  
        </Layout>
    )
}

export default Affiliate;