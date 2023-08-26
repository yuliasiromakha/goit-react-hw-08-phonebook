import { deleteToken } from "components/redux/auth/operations";
import { logOutThunk } from "components/redux/auth/thunk";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./general.css"
import Button from '@mui/joy/Button';
import Notiflix from 'notiflix';

const UserMenu = () => {
    const { user, userEmail} = useSelector((state) => state.auth);
    const navigate = useNavigate(); 
    const dispatch = useDispatch();

    const handleLogin = () => {
        navigate('/login')
    }

    const handleLogout = async () => { 
        await dispatch(logOutThunk()); 
        deleteToken(); 
        navigate('/login');
        console.log('logged out');
        Notiflix.Report.success("Success!", "You are now logged out!", "Okay!")
    };
    
    
    // useEffect(() => {
    //   token && dispatch(getProfileThunk())
    // }, [token, dispatch] )

    return (
        <div>
            {user && (
                <div className="logout_section">
                    <p className="welcome_text">Welcome, {user}!</p>
                    <p className="welcome_text">{userEmail}</p>
                    <Button color="neutral" type='button' onClick={user ? handleLogout : handleLogin} style={{height: 20, width: 120}}>
                        {user ? 'Logout' : 'Login'}
                    </Button>
                </div>
            )}
        </div>
    );
}

export default UserMenu;