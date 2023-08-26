// operations.js
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const setToken = (token) => { 
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

export const deleteToken = () => { 
    delete instance.defaults.headers.common['Authorization'];
}

export const signUp = async (body) => {
    const { data } = await instance.post('users/signup', body)
    setToken(`Bearer ${data.token}`)
    return data;
}

export const logIn = async (body) => {
    try {
        const { data } = await instance.post('users/login', body);
        
        if (data.token) {
            setToken(`Bearer ${data.token}`);
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
    const {data} = await instance.get('/users/current')
    console.log('getProfle data =>', data);
    setToken(`Bearer ${data.token}`);
    return data 
}

export const logOut = async () => {
    const {data} = await instance.post('/users/logout')
    console.log('logOut data =>', data);
    return data
}