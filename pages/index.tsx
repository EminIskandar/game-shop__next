import { NextPage } from "next"  
import Layout from 'layout/index'
import {Slider, Recommendation, Discount, Discover, Subscription, Sections, TopTen, Blog } from 'components'

const Index : NextPage = () => {
    return (
        <Layout title={'GAMIVO.COM - Cheap Game CD Keys' }>
            <Slider/>
            <Recommendation/>
            <Discover/>
            <Discount/>
            <Subscription/>
            <Sections/>
            <TopTen/>
            <Blog/> 
        </Layout>
    )
} 

export default Index