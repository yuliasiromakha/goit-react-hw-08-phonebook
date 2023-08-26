import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getContactsThunk } from "components/redux/contacts/contactThunk";
import ContactForm from "components/ContactForm/contactForm";
import FilterContact from "components/FilterContact/FilterContact";
import ContactList from "components/ContactList/ContactList";
import Loader from "components/Loader/Loader";

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