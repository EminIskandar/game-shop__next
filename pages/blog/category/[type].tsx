import React from 'react'  
import { NextPage } from 'next'
import Layout from 'layout/blog'
import { useRouter } from 'next/router'
import { BlogCategory } from 'components'
  
const Blog: NextPage = ()=> {  
    const router = useRouter()
    const { type } = router.query 

   return ( 
        <Layout title={'Blog - GAMIVO' }>  
            <BlogCategory categoryName={type}/>
        </Layout>
    )
} 

export default Blog;
