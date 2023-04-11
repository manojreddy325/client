import React,{useState} from 'react';
import axios from "axios";
import { useHistory } from "react-router-dom"
import './index.css';

const LoginPage = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,
            [name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:3006/login", user)
        .then(res => {
           alert(res.data.message)
            setLoginUser(res.data.user)
            history.push("/")
        })
    }

    return(
        <div className="login">
            <h1>Login</h1>
            <input className='login-input' type="text" name="email" value={user.email} placeholder="Enter your Email" onChange={handleChange}></input>
            <input className='login-input' type="password" name="password" value={user.password} placeholder="Enter your Password" onChange={handleChange} ></input>
            <div className="button" onClick={login}>Login</div>
            <div>or</div>
            <div className="button" onClick={() => history.push("/signup")}>SignUp</div>
        </div>
    )
}

export default LoginPage;