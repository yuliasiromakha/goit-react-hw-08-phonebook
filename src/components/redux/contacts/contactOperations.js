// contactOperations.js
import axios from 'axios';
import { setToken } from '../auth/operations';

const instance = axios.create({
    baseURL: 'https://connections-api.herokuapp.com',
});

export const createContact = async (body) => {
    try {

        console.log('this is createContact');

        const { data } = await instance.post('/contacts', body);
        console.log('data =>', data);
        console.log('data token => ', data.token);

        setToken(`Bearer ${data.token}`)

        return data;
    } catch (error) {
        console.error('createContact error =>', error);
        throw error;
    }
};

export const deleteContact = async (contactId, token) => {
    const { data } = await instance.delete(`/contacts/${contactId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('deleteContact data =>', data);
    return data;

};



export const getContact = async (body) => {
    const { data } = await instance.get('/contacts', body);
    console.log('getContact data =>', data);
    return data;
};
