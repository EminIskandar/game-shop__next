import '../styles/globals.css'
import type { AppProps } from 'next/app'
import  Head  from 'next/head'; 
import GlobalStyle from './../globalStyled/globalStyle'
import { Provider } from 'react-redux'
import store from './../store/store'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
    <Head>
      <title>GAMIVO.COM - Cheap Game CD Keys</title>
    </Head>
    <>
      <GlobalStyle /> 
      <Provider store = {store}>
        <Component {...pageProps} /> 
      </Provider>  
    </>  
    </>
  )
}

export default MyApp
