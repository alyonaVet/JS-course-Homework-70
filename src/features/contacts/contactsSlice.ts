import {ContactType} from '../../types';
import {createSlice} from '@reduxjs/toolkit';

export interface ContactsState {
  items: ContactType[];
}

const initialState: ContactsState = {
  items: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state: ContactsState, action) => {
      state.items.push(action.payload);
    },
    updateContact: (state: ContactsState, action) => {
      state.items = state.items.map((item) => item.id === action.payload.id ? action.payload : item)
    },
    deleteContact: (state: ContactsState, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id)
    },
  },
  selectors: {
    selectContacts: (state) => state.items,
  }
});

export const contactsReducer = contactsSlice.reducer;

export const {
  selectContacts,
} = contactsSlice.selectors;

export const {
  addContact,
  updateContact,
  deleteContact,
} = contactsSlice.actions;