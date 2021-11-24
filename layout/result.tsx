 
import {Header, Footer} from 'components'
import { NextPage } from 'next'
import {LayoutProps }from 'interfaces'
import Head from 'next/head' 

const Layout  : NextPage<LayoutProps> = ({ children, title }) => {
  return (
    <>  
      <Head>
        <title>{title}</title>
      </Head>
      <Header/> 
        <main>{children}</main> 
      <Footer/> 
    </>
  )
} 
export default Layout