import React from 'react';
import {ContactType} from '../../../types';

interface OneContactProps {
  contact: ContactType;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
  isDeleting: boolean;
}


const OneContact: React.FC<OneContactProps> = ({contact, onClose, onEdit, onDelete, isDeleting}) => {

  return (
    <>
      <div
        className={`modal-backdrop show`}
        style={{display: 'block'}}
      />
      <div
        className={`modal show`}
        style={{display: 'block'}}
        onClick={onClose}
      >
        <div
          className="modal-dialog"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="modal-content">
            <div className="modal-header">
              <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
            </div>
            <div className="modal-body d-flex">
              <div>
                {contact.image ?
                  <img src={contact.image} alt="Contact" className="img-fluid "
                       style={{width: '150px', height: 'auto'}}/>
                  : (
                    <div className="py-5 px-4 border border-1">No photo</div>
                  )
                }
              </div>
              <div className="ms-4">
                <h1 className="modal-title fs-5 mb-3">{contact.name}</h1>
                <span className="d-block mb-2"><strong>Phone: </strong><a href="#">{contact.phone}</a></span>
                <span className="d-block"><strong>Email: </strong><a href="#">{contact.email}</a></span>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary px-4"
                onClick={onEdit}
              >
                Edit
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={onDelete}
                disabled={isDeleting}
              >
                {isDeleting ? 'Deleting...' : 'Delete'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OneContact;