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
    return await instance.post('users/signup', body)
}

export const logIn = async (body) => {
    const {data} = await instance.post('users/login', body)
    setToken(`Bearer ${data.access_token}`)
    return data
}

export const getProfile = async () => {
    const {data} = await instance.get('/users/current')
    console.log('getProfle data =>', data);
    return data 
}

export const logOut = async () => {
    const {data} = await instance.post('/users/logout')
    console.log('logOut data =>', data);
    return data
}
