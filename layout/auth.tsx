import {Header, Footer} from 'components'
import { NextPage } from 'next'
import {LayoutProps }from 'interfaces'
import Head from 'next/head'
import { LoginMain } from 'globalStyled/component'

const Layout  : NextPage<LayoutProps> = ({ children, title }) => {
  return (
    <>  
      <Head>
        <title>{title}</title>
      </Head>
      <Header/> 
        <LoginMain>{children}</LoginMain> 
      <Footer/> 
    </>
  )
} 
export default Layout