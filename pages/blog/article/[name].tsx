import React from 'react'  
import { NextPage } from 'next'
import Layout from 'layout/blog'
import { useRouter } from 'next/router'
import { BlogArticleContent } from 'components'
  
const Article: NextPage = ()=> {  

    const router = useRouter()
    const { name } = router.query
    let titleArticle = name?.toString() 

    if(titleArticle !== undefined){
        titleArticle = titleArticle.split("-").join(' ').toLocaleUpperCase() 
    }

    return ( 
        <Layout title={titleArticle}>  
            <BlogArticleContent/> 
        </Layout>
    )
} 

export default Article

 
