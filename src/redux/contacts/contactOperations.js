// contactOperations.js
import { instance } from '../auth/authOperations';

export const createContact = async (contact) => {
    try {
        console.log('this is createContact');
        const { data } = await instance.post('/contacts', contact);
        // після цього запиту логіка ламається: 400 (Bad Request)
        console.log('data =>', data);

        return data;
    } catch (error) {
        console.error('createContact error =>', error);
        throw error;
    }
};

// export const deleteContact = async (contactId, token) => {
//     const { data } = await instance.delete(`/contacts/${contactId}`, {
//         headers: {
//             Authorization: `Bearer ${token}`,
//         },
//     });
//     console.log('deleteContact data =>', data);
//     return data;

// };

export const deleteContact = async (contactId, body) => {
    const { data } = await instance.delete(`/contacts/${contactId}`, body);
    console.log('deleteContact data =>', data);
    return data;

};

export const getContact = async (body) => {
    const { data } = await instance.get('/contacts', body);
    return data;
};