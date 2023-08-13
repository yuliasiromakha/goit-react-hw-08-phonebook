import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com/',
})

export const signUp = (body) => {
    return  instance.post('users/signup', body)
}

export const logIn = (body) => {
    return instance.post('users/login', body)
}