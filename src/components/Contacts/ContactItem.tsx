import React from 'react';
import {ContactType} from '../../types';

interface ContactItemProps {
  contact: ContactType | null;
  onClick: React.MouseEventHandler;
}

const ContactItem: React.FC<ContactItemProps> = ({contact, onClick}) => {
  return (
    <div className="card mb-3 p-3" style={{maxWidth: '540px', height: '165px'}} onClick={onClick}>
      <div className="row g-0">
        <div className="col-4">
          {contact?.image ?
            <img src={contact.image} alt="Contact photo" className="" style={{width: '150px', height: 'auto'}}/>
            : (
              <div className="py-5 px-4 border border-1 text-center">No photo</div>
            )
          }
        </div>
        <div className="col-8 d-flex align-items-center justify-content-between">
          <h4 className="card-title ms-5">{contact?.name}</h4>
        </div>
      </div>
    </div>
  );
};

export default ContactItem;