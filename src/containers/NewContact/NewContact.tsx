import AddContactForm from '../../features/contacts/components/AddContactForm';
import {useAppDispatch} from '../../app/hooks';
import {addContact} from '../../features/contacts/contactsSlice';
import {ContactFormType} from '../../types';

const NewContact = () => {
  const dispatch = useAppDispatch();

  const onSubmit = async (contact: ContactFormType) => {
    try {
      dispatch(addContact(contact));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <AddContactForm onSubmit={onSubmit} />
    </div>
  );
};

export default NewContact;