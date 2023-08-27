// contactOperations.js
import { privateInstance } from '../auth/authOperations';

// const instance = axios.create({
//     baseURL: 'https://connections-api.herokuapp.com',
// });

export const createContact = async () => {
    try {
        console.log('this is createContact');
        const { data } = await privateInstance.post('/contacts');
        console.log('data =>', data);

        return data;
    } catch (error) {
        console.error('createContact error =>', error);
        throw error;
    }
};

export const deleteContact = async (contactId, token) => {
    const { data } = await privateInstance.delete(`/contacts/${contactId}`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });
    console.log('deleteContact data =>', data);
    return data;

};

export const getContact = async (body) => {
    const { data } = await privateInstance.get('/contacts', body);
    return data;
};