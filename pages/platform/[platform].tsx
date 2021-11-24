import React from 'react'
import Layout from 'layout/result'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { product } from 'interfaces'
//db
import database from 'db/db.json'

//component
import{ Result } from 'components'

const Search: NextPage  = ()=> { 

    const router = useRouter()
    const { platform } = router.query
    const [data, setData] = React.useState<product[]>([])  

    React.useEffect(() => {
        window.scrollTo(0, 0) 
    }, [])

    React.useEffect(() => {
        if(router.isReady){ 
            const AllData: product[] = database.games.filter( item =>item.platform === platform ) 
            if(AllData.length === 0){
                router.push('/error')
            }else{
                setData(AllData)
            }  
        }
    }, [platform])  
    
    return (
        <Layout title={`GAMIVO | ${platform?.toString().toUpperCase()}`}> 
        {
            data.length !== 0 ? <Result datas={data} header={false}/>: <div>Loading</div>  
        }
        </Layout>
    )
}

export default Search
