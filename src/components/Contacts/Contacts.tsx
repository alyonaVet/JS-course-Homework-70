import ContactItem from './ContactItem';
import {useAppSelector} from '../../app/hooks';
import {selectContacts} from '../../features/contacts/contactsSlice';

const Contacts = () => {
  const contacts = useAppSelector(selectContacts);
  console.log(contacts);

  return (
    <div>
      {contacts.length > 0 ? (
        contacts.map((contact) => (
          <ContactItem
            key={contact.id}
            contact={contact}
          />
        ))
      ) : (
        'No contacts added yet'
      )}
    </div>
  );
};

export default Contacts;