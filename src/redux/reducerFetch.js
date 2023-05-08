import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchContacts = async () => {
  const data = await fetch(
    `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts`
  );
  const contacts = await data.json();
  return contacts;
};

export const addContacts = async newContact => {
  const data = await fetch(
    `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts`,
    {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newContact),
    }
  );

  const addedData = await data.json();
  return await addedData;
};

export const deleteContacts = async id => {
  const data = await fetch(
    `https://6453dfb6c18adbbdfeaa041f.mockapi.io/contacts/contacts/${id}`,
    {
      method: 'DELETE',
    }
  );

  const deleteRes = await data.json();
  return await deleteRes;
};

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

const initialState = {
  contacts: null,
  isLoading: false,
  error: '',
};

const handlePending = (state, action) => {
  state.isLoading = true;
};
const handleFulfilled = (state, action) => {
  state.isLoading = false;
  state.contacts = action.payload;
  state.error = '';
};

const deleteHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
  state.error = '';
};
const addHandleFulfilled = (state, action) => {
  state.isLoading = false;
  state.contacts = [...state.contacts, action.payload];

  state.error = '';
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const mySlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(contactsFetch.pending, handlePending)
      .addCase(contactsFetch.fulfilled, handleFulfilled)
      .addCase(contactsFetch.rejected, handleRejected)
      .addCase(contactsDelete.pending, handlePending)
      .addCase(contactsDelete.fulfilled, deleteHandleFulfilled)
      .addCase(contactsDelete.rejected, handleRejected)
      .addCase(contactsAdd.pending, handlePending)
      .addCase(contactsAdd.fulfilled, addHandleFulfilled)
      .addCase(contactsAdd.rejected, handleRejected);
  },
});

export const contactsReducer = mySlice.reducer;
