import React from 'react';
import {ContactType} from '../../types';

interface ContactItemProps {
  contact: ContactType | null;
  onClick: React.MouseEventHandler;
}

const ContactItem: React.FC<ContactItemProps> = ({contact, onClick}) => {
  return (
      <div className="card mb-3 p-3" style={{maxWidth: '540px', height: '165px'}} onClick={onClick}>
        <div className=" d-flex g-0">
          <div className="col-md-4">
            <img src={contact?.image} className="img-fluid rounded" alt="Photo"/>
          </div>
          <div className="col-md-8 align-self-center">
            <h4 className="card-title ms-5">{contact?.name}</h4>
          </div>
        </div>
      </div>
  );
};

export default ContactItem;