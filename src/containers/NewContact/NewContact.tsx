import AddContactForm from '../../features/contacts/components/AddContactForm';
import {useAppDispatch, useAppSelector} from '../../app/hooks';
import {addContact,  selectCreateContactLoading} from '../../features/contacts/contactsSlice';
import {ContactFormType} from '../../types';

const NewContact = () => {
  const dispatch = useAppDispatch();
  const isCreating = useAppSelector(selectCreateContactLoading);

  const onSubmit = async (contact: ContactFormType) => {
    try {
      dispatch(addContact(contact));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="container mt-5">
      <AddContactForm onSubmit={onSubmit} isSaving={isCreating} />
    </div>
  );
};

export default NewContact;