import React, { useState } from 'react'
import TextField from '../components/TextField'
import Button from '../components/Button'
import '../css/signup.css'

const Signup = () => {
    const [Signupvalue,setSignupvalue]= useState({})
    const onChange=()=>{

    }
    const onClick=()=>{

    }
  return (
    <section className='login-main'>
    <div className="login-form-title">
        <h3><u>Signup</u></h3>



    </div>
    <form action="" className='login-form'>
        
        <TextField label='Name' onChange={onChange} value={Signupvalue.name} inputProps={{placeholder:"Name",type:"String",name:'name'}}/>
        <TextField label='Father Name' onChange={onChange} value={Signupvalue.name} inputProps={{placeholder:"Father Name",type:"String",name:'name'}}/>
        <TextField label='Phone Number' onChange={onChange} value={Signupvalue.name} inputProps={{placeholder:"Contact No",type:"String",name:'name'}}/>
        <TextField label='Email' onChange={onChange} value={Signupvalue.email} inputProps={{placeholder:"Email",type:"email",name:'email'}}/>
        <TextField label='Password' inputProps={{placeholder:"Password",type:"password"}}/>
        <Button onClick={onClick}>Signup</Button>
    </form>
</section>
  )
}

export default Signup