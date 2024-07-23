import ContactItem from './ContactItem';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {deleteContact, selectContacts} from '../../features/contacts/contactsSlice';
import {useState} from 'react';
import {ContactType} from '../../types';
import OneContact from '../../features/contacts/components/OneContact';
import {useNavigate} from 'react-router-dom';


const Contacts = () => {
  const [showContact, setShowContact] = useState<ContactType | null>(null);
  const [isDeleting, setIsDeleting] = useState(false);


  const contacts = useAppSelector(selectContacts);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const onEditHandler = (contact: ContactType) => {
    try {
      setShowContact(null);
      navigate(`/edit-contact/${contact.id}`);
    } catch (error) {
      console.error(error);
    }
  };

  const onDeleteHandler = (contact: ContactType) => {
    try {
      setIsDeleting(true);
      dispatch(deleteContact(contact));
      setShowContact(null);
      navigate(`/`);
    } catch (error) {
      console.error(error);
    } finally {
      setIsDeleting(false);
    }
  };


  return (
    <>
      <div className="container d-flex flex-column mt-4">
        {contacts.length > 0 ? (
          contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              onClick={() => setShowContact(contact)}
            />
          ))
        ) : (
          <div className="align-self-center mt-5">No contacts added yet</div>
        )}
      </div>
      {
        showContact !== null && (
          <OneContact
            contact={showContact}
            onClose={() => setShowContact(null)}
            onEdit={() => onEditHandler(showContact)}
            onDelete={() => onDeleteHandler(showContact)}
            isDeleting={isDeleting}
          />
        )
      }
    </>
  );
};

export default Contacts;