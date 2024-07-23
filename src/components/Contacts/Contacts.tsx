import ContactItem from './ContactItem';
import {useAppSelector} from '../../app/hooks';
import {selectContacts} from '../../features/contacts/contactsSlice';
import {useState} from 'react';
import {ContactType} from '../../types';
import OneContact from '../../features/contacts/components/OneContact';


const Contacts = () => {
  const [showContact, setShowContact] = useState<ContactType | null>(null);
  const contacts = useAppSelector(selectContacts);

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
            onEdit={() => null}
            onDelete={() => null}
          />
        )
      }
    </>
  );
};

export default Contacts;