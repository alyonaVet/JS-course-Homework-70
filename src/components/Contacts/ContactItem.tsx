import React from 'react';
import {ContactType} from '../../types';

interface ContactItemProps {
  contact: ContactType;
}

const ContactItem: React.FC<ContactItemProps> = ({contact}) => {
  return (
    <div className="container d-flex flex-column mt-5">
      <div className="card mb-3 p-3" style={{maxWidth: '540px'}}>
        <div className="row g-0">
          <div className="col-md-4">
            <img src={contact.image} className="img-fluid rounded-start" alt=""/>
          </div>
          <div className="col-md-8">
            <h4 className="card-title">{contact.name}</h4>
          </div>
        </div>
      </div>
    </div>

  );
};

export default ContactItem;