import {useNavigate, useParams} from 'react-router-dom';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {selectContacts, updateContact} from '../../features/contacts/contactsSlice';
import AddContactForm from '../../features/contacts/components/AddContactForm';
import {ContactType} from '../../types';

const EditContact = () => {
  const params = useParams();
  const contacts =useAppSelector(selectContacts);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const contact = contacts.find(contact => contact.id === params.id);

  const updateContactHandler = (contact: ContactType) => {
    try {
      dispatch(updateContact(contact));
      navigate(`/`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <AddContactForm
        existingContact={contact}
        onSubmit={updateContactHandler}
      />
    </div>
  );
};

export default EditContact;