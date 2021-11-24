 
import {Header } from 'components'
import { NextPage } from 'next'
import {LayoutProps }from 'interfaces'
import Head from 'next/head'
import { Main } from 'globalStyled/component'

const ContacttLayout  : NextPage<LayoutProps> = ({ children, title }) => {
  return (
    <>  
      <Head>
        <title>{title}</title>
      </Head>
      <Header/> 
        <Main>{children}</Main >  
    </>
  )
} 
export default ContacttLayout