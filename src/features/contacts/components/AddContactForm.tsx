import React, {useEffect, useState} from 'react';
import {ContactFormType, ContactType} from '../../../types';
import ButtonSpinner from '../../../components/ButtonSpinner/ButtonSpinner';
import {NavLink} from 'react-router-dom';

interface ContactProps {
  onSubmit: (contact: ContactType) => void;
  existingContact?: ContactType;
  isSaving?: boolean;
}

const emptyState: ContactFormType = {
  name: '',
  phone: '',
  email: '',
  image: '',
  imagePreview: '',
};


const AddContactForm: React.FC<ContactProps> = ({onSubmit, existingContact, isSaving = false}) => {

  const [contact, setContact] = useState<ContactFormType>(emptyState);
  useEffect(() => {
    if (existingContact) {
      setContact(existingContact);
    }
  }, [existingContact]);

  const changeContact = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setContact((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  const onFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    onSubmit({
      ...contact,
      id: contact?.id ? contact.id : Math.random().toString(),
    });

    setContact(emptyState);
  };

  return (
    <form onSubmit={onFormSubmit}>
      <h4>{existingContact ? 'Edit contact' : 'Add new contact'}</h4>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          className="form-control w-50 mb-2"
          onChange={changeContact}
          value={contact.name}
        />
      </div>
      <div className="form-group">
        <label htmlFor="phone">Phone</label>
        <input
          type="text"
          name="phone"
          id="phone"
          required
          className="form-control w-50 mb-2"
          onChange={changeContact}
          value={contact.phone}
        />
      </div>
      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="form-control w-50 mb-2"
          onChange={changeContact}
          value={contact.email}
        />
      </div>
      <div className="form-group">
        <label htmlFor="image">Photo</label>
        <input
          type="url"
          name="image"
          id="image"
          className="form-control w-50 mb-2"
          onChange={changeContact}
          value={contact.image}
        />
      </div>
      <div className="mb-2">
        <div className="d-flex align-items-center gap-3">Photo Preview:
          {contact.image ? <img src={contact.image} alt="contact photo" style={{width: '150px', height: 'auto'}}></img>
            :
            ' No photo available'}
        </div>
      </div>
      <button
        type="submit"
        className="btn btn-primary mt-2"
        disabled={isSaving}
      >
        {isSaving && <ButtonSpinner/>}
        {existingContact ? 'Update' : 'Save'}
      </button>
      <NavLink to="/" type="button" className="btn btn-info mt-2 ms-4">Back to contacts</NavLink>
    </form>

  );
};

export default AddContactForm;