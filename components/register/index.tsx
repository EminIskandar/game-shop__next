import React from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";  
import { faUser} from '@fortawesome/free-solid-svg-icons';

//styled
import {
    Content, Icon, Title, Form, FormContent, 
    Radio, Input, Btn
} from './styled'

const Register : NextPage  = ()=>{
    
    //ref
    const router = useRouter()
    
    return ( 
        <Content data-testid="register">
            <Icon>
                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon>
            </Icon>
            <Title>
                <h2>Create Your Account</h2>
            </Title> 
            <Form>
                <FormContent>
                    <Input>
                        <input type="text" placeholder="Username or e-mail address"/> 
                    </Input>
                    <Radio>
                        <div className="radio-item">
                            <input type="checkbox" data-testid="checkbox1"/>
                            <label htmlFor="" className="label"> I agree to the <span>Terms &amp; Conditions</span> </label>
                        </div>
                        <div className="radio-item">
                            <input type="checkbox" data-testid="checkbox2"/>
                            <label htmlFor="" className="label"> I agree to receive the newsletter and other commercial communication, including personalized content from GAMIVO.com </label>
                        </div>
                    </Radio>
                    <Btn>
                        <button type="button" data-testid="create">Create account</button> 
                        <button type="button" data-testid="login" onClick={()=>{router.push('/login')}}>I already have an account. Log in.</button> 
                    </Btn>
                </FormContent>
            </Form>            
        </Content>  
    )
}

export default Register