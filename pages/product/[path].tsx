import React from 'react'
import Layout from 'layout'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { product } from 'interfaces'
//db
import database from 'db/db.json'

//component
import{ ProductIndex } from 'components'

const Product: NextPage  = ()=> { 

    const router = useRouter()
    const { path } = router.query
    const [data, setData] = React.useState<product[]>([])  

    React.useEffect(() => {
        window.scrollTo(0, 0) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        if(router.isReady){ 
            const AllData: product[] = database.games.filter( item => item.path === path ) 
            if(AllData.length === 0){
                router.push('/error')
            }else{
                setData(AllData)
            }  
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [path]) 
     
    
    return (
        <Layout title={`GAMIVO | ${path?.toString().toUpperCase()}`}> 
        {
            data.length !== 0 ? <ProductIndex data={data} />: <div>Loading</div>  
        }
        </Layout>
    )
}

 
export default Product