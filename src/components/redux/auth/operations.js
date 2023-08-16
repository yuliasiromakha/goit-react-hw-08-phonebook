import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

const setToken = (token) => { 
    instance.defaults.headers.common['Authorization'] = token
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
    console.log(data);
    return data 
}

export const logOut = async () => {
    const {data} = await instance.post('/users/logout')
    return data
}