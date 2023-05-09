import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addContacts,
  deleteContacts,
  fetchContacts,
} from 'services/fetchContactsAPI';

export const contactsFetch = createAsyncThunk(
  'contacts/getContacts',
  async () => {
    return await fetchContacts();
  }
);
export const contactsDelete = createAsyncThunk(
  'movies/deleteContacts',
  async id => {
    return await deleteContacts(id);
  }
);
export const contactsAdd = createAsyncThunk(
  'movies/addContacts',
  async newContact => {
    return await addContacts(newContact);
  }
);
