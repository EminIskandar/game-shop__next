import React from 'react'
import { useRouter } from 'next/router'
import Modal from 'components/modal'  
import {NextPage} from 'next' 
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; 
import { faFacebookF, faGooglePlusG } from "@fortawesome/free-brands-svg-icons"; 
import { faUser,faTimes } from '@fortawesome/free-solid-svg-icons';

//styled
import {
        Content, Icon, SocialMedia, SocialMediaTitle, 
        SocialMediaIcons, Or, Form, FormContent,LoginModal,
        ModalItem, ModalTitle, ModalForm
} from './styled'

const Login : NextPage =  () => {

    //router
    const router = useRouter();

    //state
    const [modalName, setmodalName] = React.useState('activation')
    const [open, setopen] = React.useState(false)
    const [data, setData] = React.useState({
        username : '',
        password: ''
    }) 

    React.useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const openModal = (name: string )=>{
        setmodalName(name)
        setopen(true) 
    }

    const closeModal = ()=>{ 
        setopen(false)
    }
    
    const login = (e: React.FormEvent<HTMLFormElement> & { target: Element })=>{  
        e.preventDefault(); 
    }

    const inputData = (e: React.ChangeEvent<HTMLInputElement> & { currentTarget: Element })=>{ 
        setData({ ...data, [e.currentTarget.name]: e.currentTarget.value})
    }

    return (
        <>
            <Content data-testid="login">
                <Icon>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
                </Icon>
                <SocialMedia>
                    <SocialMediaTitle>
                        <h2>Please Log In</h2>
                        <h4>Login using social media</h4>
                    </SocialMediaTitle>
                    <SocialMediaIcons>
                        <div>
                            <FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon>
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faGooglePlusG}></FontAwesomeIcon>
                        </div>
                    </SocialMediaIcons>
                </SocialMedia>
                <Or>
                    <h4>or</h4>
                </Or>
                <Form>
                    <FormContent action="" onSubmit={login.bind(this)}>
                        <div>
                            <input type="text" placeholder="Username or e-mail address" name="username" onChange={inputData.bind(this)}/>
                            <input type="password" placeholder="Password" name="password" onChange={inputData.bind(this)}/>
                        </div>
                        <div>
                            <p data-testid="recovery" onClick={openModal.bind(this,'recovery')}> Recover account / Account recovery </p>
                            <p data-testid="activation" onClick={openModal.bind(this,'activation')}> Re-send activation mail </p>
                        </div>
                        <div>
                            <button type="submit" data-testid="submit">Log in</button>
                            <button type="button" onClick={()=> router.push("/register")}>No account? Register here!</button>
                        </div>
                    </FormContent>
                </Form>            
            </Content>
            {
                open ? <Modal selector={"portal"}>
                                <LoginModal data-testid="modal">
                                    <ModalItem>
                                        <ModalTitle>
                                            {
                                                modalName === 'recovery' ? 
                                                <h4>Forgot your password?</h4> :
                                                <h4>Re-send activation</h4>
                                            }
                                            <FontAwesomeIcon icon={faTimes} onClick={closeModal}></FontAwesomeIcon> 
                                        </ModalTitle>
                                        <ModalForm className="modal--recovery">
                                            <form action="">
                                                <input type="text" placeholder=" Enter your email address" />
                                                {
                                                    modalName === 'recovery' ? 
                                                    <button type="button">Recovery</button> :
                                                    <button type="button">Send</button>
                                                }
                                            </form>
                                        </ModalForm>
                                    </ModalItem>
                                </LoginModal>
                            </Modal>  : null
            } 
        </>
    )
}

export default Login