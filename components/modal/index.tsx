import React from 'react'
import { createPortal } from "react-dom" 
import {ModalProps} from 'interfaces' 

const Modal = ( { children, selector }: ModalProps ) => { 

    //ref
    const ref : any = React.useRef()

    //state
    const [mounted, setMounted] = React.useState(false)

    React.useEffect(() => {
        ref.current = document.getElementById(selector)
        setMounted(true)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]) 

    return mounted ? createPortal( children , ref.current ) : null
}

export default Modal
