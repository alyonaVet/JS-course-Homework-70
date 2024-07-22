import {ContactType} from '../../types';
import {createSlice} from '@reduxjs/toolkit';

export interface ContactsState {
  items: ContactType[];
  isCreating: boolean;
}

const initialState: ContactsState = {
  items: [],
  isCreating: false,
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state: ContactsState, action) => {
      state.items.push(action.payload);
      state.isCreating = true;
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
} = contactsSlice.actions;