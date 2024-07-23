import React from 'react';
import {ContactType} from '../../../types';

interface OneContactProps {
  contact: ContactType;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}


const OneContact: React.FC<OneContactProps> = ({ contact, onClose, onEdit, onDelete}) => {
  return (
    <>
      <div
        className={`modal-backdrop show`}
        style={{ display: 'block' }}
      />
      <div
        className={`modal show`}
        style={{ display: 'block' }}
        onClick={onClose}
      >
        <div
          className="modal-dialog"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5">{contact.name}</h1>
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              {contact.image && <img src={contact.image} alt="Contact" className="img-fluid" />}
              <p><strong>Name:</strong> {contact.name}</p>
              <p><strong>Phone:</strong> {contact.phone}</p>
              <p><strong>Email:</strong> {contact.email}</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={onEdit}>Edit</button>
              <button type="button" className="btn btn-danger" onClick={onDelete}>Delete</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneContact;