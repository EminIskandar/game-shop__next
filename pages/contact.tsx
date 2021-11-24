import React from 'react' 
import ContacttLayout from 'layout/contact'
import { NextPage } from 'next'

//component
import{ ContactIndex } from '../components'
 
const Contact: NextPage =  () => { 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
 
    return (
        <ContacttLayout title={'Contact us - GAMIVO' }>
            <ContactIndex/>
        </ContacttLayout>
    )
}

export default Contact;