import {ContactType} from '../../types';
import {createSlice} from '@reduxjs/toolkit';

export interface ContactsState {
  items: ContactType[];
  isCreating: boolean;
}

const initialState: ContactsState = {
  items: [{
    id: "1",
    name: "abg",
    phone: '+2938948r',
    email: 'ajsjd@dlvjjv',
    image: '',
    imagePreview: '',

  }],
  isCreating: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state: ContactsState, action) => {
      state.items.push(action.payload);
    },
    updateContact: (state: ContactsState, action) => {
      console.log(action.payload);
      state.items = state.items.map((item) => item.id === action.payload.id ? action.payload : item)
    }
  },
  selectors: {
    selectContacts: (state) => state.items,
    selectCreateContactLoading: (state) => state.isCreating,
  }
});

export const contactsReducer = contactsSlice.reducer;

export const {
  selectContacts,
  selectCreateContactLoading
} = contactsSlice.selectors;

export const {
  addContact,
  updateContact
} = contactsSlice.actions;