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
    const { name } = router.query
    const [data, setData] = React.useState<product[]>([])  

    React.useEffect(() => {
        window.scrollTo(0, 0) 
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    React.useEffect(() => {
        if(router.isReady){
            if(name === typeof ''){
                const AllData: product[] = database.games.filter( item => item.name.toLowerCase().includes(name) )
                if(AllData.length === 0){
                    router.push('/error')
                }else{
                    setData(AllData)
                } 
            } 
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])  
 
    
    return (
        <Layout title={`GAMIVO | ${name?.toString().toUpperCase()}`}> 
        {
            data.length !== 0 ? <Result datas={data} header={true}/>: <div>Loading</div>  
        }
        </Layout>
    )
}

export default Search
