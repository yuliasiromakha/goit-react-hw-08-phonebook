import React from "react";
import Input from '@mui/joy/Input';
import Button from '@mui/joy/Button';
import { Link } from "react-router-dom";
import '../general.css'

// import { useDispatch } from 'react-redux';
// import { register } from 'redux/auth/operations';

const Registration = () => {
    // const dispatch = useDispatch();

    const handleSubmit = e => {
        e.preventDefault();
        const form = e.currentTarget;
        // dispatch(
        //   register({
        //     name: form.elements.name.value,
        //     email: form.elements.email.value,
        //     password: form.elements.password.value,
        //   })
        // );
        console.log(form.elements.email.value, form.elements.password.value,);
        form.reset();
      };
    return ( 
        <div>
            <h1 className="title">You're at the registration page!</h1>
            <form className="registration__form" onSubmit={handleSubmit}>
                <label className="label">Name
                <Input color="neutral" size="md" variant="solid" type="text" name="name"/>
                </label>

                <label className="label">Email
                <Input color="neutral" size="md" variant="solid" type="email" name="email"/>
                </label>

                <label className="label">Password
                <Input color="neutral" size="md" variant="solid" type="password" name="password"/>
                </label>
                
                <Button color="neutral" type='submit' style={{marginTop: 15}}>Submit</Button>

                <Link to="/login" style={{marginLeft: 15}}>I need to login</Link>
            </form>
        </div>
    )
}

export default Registration;