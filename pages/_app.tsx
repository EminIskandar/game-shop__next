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
      <link href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap" rel="stylesheet" /> 
      <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet" />
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
