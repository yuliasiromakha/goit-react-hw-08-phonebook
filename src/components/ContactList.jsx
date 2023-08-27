// contactList.jsx
import React from "react";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";
import { deleteContactAsync } from "redux/contacts/contactSlice";
import Button from '@mui/joy/Button';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector((state) => state.contacts.contacts);
  const error = useSelector((state) => state.contacts.error);
  const filter = useSelector((state) => state.filter.filter);

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const handleDeleteContact = (id) => {
    dispatch(deleteContactAsync(id));
  };

  if (error) {
    return error;
  }
  console.log('contacts:', contacts); 

  return (
    <ul
      style={{
        display: "flex",
        flexDirection: "column",
        gap: 10,
        justifyContent: "center"
      }}
    >
      {filteredContacts.map((contact) => (
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