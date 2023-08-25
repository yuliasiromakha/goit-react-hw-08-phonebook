import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "components/pages/redux/auth/contacts/contactThunk";
import ContactForm from "components/files/ContactForm/contactForm";
import FilterContact from "components/files/FilterContact/FilterContact";
import ContactList from "components/files/ContactList/ContactList";
import Loader from "components/files/Loader/Loader";

const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state) => state.contacts.isLoading);
  
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  return (
    <div className="general__positioning">
      <div className="border__style">
        <ContactForm />
      </div>

      <FilterContact />

      {isLoading ? <Loader/> : <ContactList/>}
    </div>
  );
}

export default Contacts;