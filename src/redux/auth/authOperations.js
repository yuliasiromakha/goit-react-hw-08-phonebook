// operations.js
import axios from 'axios';

export const publicInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})
export const privateInstance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = (token) => { 
    privateInstance.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const deleteToken = () => { 
    delete privateInstance.defaults.headers.common['Authorization'];
}

export const signUp = async (body) => {
    const { data } = await publicInstance.post('users/signup', body)
    setToken(data.token)
    return data;
}

export const logIn = async (body) => {
    try {
        const { data } = await publicInstance.post('users/login', body);
        
        if (data.token) {
            setToken(data.token)
        } else {
            console.log('No token received from backend.');
        }
        
        return data;
    } catch (error) {
        console.error('Login error:', error);
        throw error;
    }
}

export const getProfile = async () => {
    const {data} = await privateInstance.get('/users/current')
    console.log('getProfle data =>', data);
    setToken(data.token)
    return data 
}

export const logOut = async (body) => {
    const {data} = await privateInstance.post('/users/logout', body)
    setToken(data.token)
    console.log('logOut data =>', data);
    // setToken(`Bearer ${data.token}`);
    return data
}