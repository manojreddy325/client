import React,{useState} from 'react';
import axios from "axios"

import { useHistory } from "react-router-dom"

import './index.css';

const SignUpPage  = () => {

    const history = useHistory()

    const [ user, setUser] = useState({
        name: "",
        email:"",
        password:"",
        reEnterPassword: ""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const signup = () => {
        const { name, email, password, reEnterPassword } = user
        if( name && email && password && (password === reEnterPassword)){
            axios.post("http://localhost:3006/signup", user)
            .then( res => {
               console.log(res.data.message)
                history.push("/login")
            })
        } else {
            alert("invlid input")
        }
        
    }

    return(
        <div className="register">
        <h1>Register</h1>
        <input className='register-input' type="text" name="name" value={user.name} placeholder="Your Name" onChange={ handleChange } ></input>
        <input className='register-input' type="text" name="email" value={user.email} placeholder="Your Email" onChange={ handleChange }></input>
        <input className='register-input' type="password" name="password" value={user.password} placeholder="Your Password" onChange={ handleChange }></input>
        <input className='register-input' type="password" name="reEnterPassword" value={user.reEnterPassword} placeholder="Re-enter Password" onChange={ handleChange } ></input>
        <div className="button" onClick={signup}>Signup</div>
        <div>or</div>
        <div className="register-button" onClick={() => history.push("/login")}>Login</div>
    </div>
    )
}

export default SignUpPage;