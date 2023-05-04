import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  { id: 'id-1', name: 'Héloïse Letissier', number: '4591256' },
  { id: 'id-2', name: 'Gwendoline Christie', number: '4438912' },
];

const contactSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact(state, action) {
      return [...state, action.payload];
    },
    deleteContact(state, action) {
      return state.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReduser = contactSlice.reducer;
