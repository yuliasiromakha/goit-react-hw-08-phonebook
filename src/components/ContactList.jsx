// contactList.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContactAsync } from 'redux/contacts/contactSlice';
import Button from '@mui/joy/Button';
import { selectContacts, selectError, selectFilter } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const error = useSelector(selectError);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = contactId => {
    dispatch(deleteContactAsync(contactId));
  };

  if (error) {
    return error;
  }

  return (
    <ul
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        justifyContent: 'center',
      }}
    >
      {filteredContacts.map(contact => (
        <li key={contact.id} style={{ fontSize: 16 }}>
          {contact.name}: {contact.number || contact.phone}
          <Button
            color="neutral"
            type="button"
            style={{ marginLeft: 20, height: 15 }}
            onClick={() => handleDeleteContact(contact.id)}
          >
            Delete contact
          </Button>
        </li>
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  handleDeleteContact: PropTypes.func,
};

export default ContactList;