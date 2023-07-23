import React from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from "react-router-dom";
import '../general.css'

const Login = () => {
    return ( 
        <div>
            <h1 className="title">You're at the login page!</h1>
            <form className="registration__form">
                <label className="label">Email</label>
                <Input color="neutral" size="md"variant="solid"/>
                <label className="label">Password</label>
                <Input color="neutral" size="md"variant="solid"/>

                <Button color="neutral" type='submit' className="submit__button" style={{marginTop: 15}}>Submit</Button>

                <Link to="/registration" style={{marginLeft: 15}}>I need to register</Link>
            </form>
        </div>
    )
}

export default Login;