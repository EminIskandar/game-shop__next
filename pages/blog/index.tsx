import React from 'react'  
import { NextPage } from 'next'
import Layout from 'layout/blog'
import { BlogArticles, BlogNews } from 'components'
  
const Index: NextPage = ()=> {  

   return ( 
        <Layout title={'GAMIVO Blog - Buy Games & Read About Games %' }>
            <BlogArticles/>   
            <BlogNews/>   
        </Layout>
    )
} 

export default Index
 
