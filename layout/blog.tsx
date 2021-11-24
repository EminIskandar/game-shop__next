 
import { BlogHeader, BlogFooter } from 'components'
import { NextPage } from 'next'
import {LayoutProps }from 'interfaces'
import Head from 'next/head'
import { BlogMain } from 'globalStyled/component'

const ContacttLayout  : NextPage<LayoutProps> = ({ children, title }) => {
  return (
    <>  
        <Head>
            <title>{title}</title>
        </Head>
        <BlogHeader/> 
            <BlogMain>{children}</BlogMain> 
        <BlogFooter/>
    </>
  )
} 
export default ContacttLayout