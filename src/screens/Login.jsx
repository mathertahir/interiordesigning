import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import '../css/login.css'

const Login = () => {
    const [loginValue,setLoginValue]= useState({})
    const onChange=()=>{

    }
    const onClick=()=>{

    }
  return (
    <section className='login-main'>
    <div className="login-form-title">
        <h3><u>Login</u></h3>



    </div>
    <form action="" className='login-form'>
        
        <TextField label='Email' onChange={onChange} value={loginValue.email} inputProps={{placeholder:"Email",type:"email",name:'email'}}/>
        <TextField label='Password' inputProps={{placeholder:"Password",type:"password"}}/>
        <Button onClick={onClick}>Login</Button>
    </form>
</section>
  )
}

export default Login