import {NavLink} from 'react-router-dom';
import Contacts from '../../components/Contacts/Contacts';

const MainPage = () => {
  return (
    <>
    <header>
      <div className="container d-flex justify-content-between align-items-center mt-3 border-bottom pb-3">
        <div className="fs-4">Contacts</div>
        <NavLink to="/new-contact" className="btn btn-outline-success me-3 px-4">Add new contact</NavLink>
      </div>
    </header>
      <div>
        <Contacts />
      </div>
    </>
  );
};

export default MainPage;