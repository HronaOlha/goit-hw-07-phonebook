import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsAdd, contactsDelete, contactsFetch } from './operations';

const arrThunks = [contactsAdd, contactsDelete, contactsFetch];
const thunksType = type => arrThunks.map(thunk => thunk[type]);

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

const getHandleFulfilled = (state, action) => {
  state.contacts = action.payload;
};

const addHandleFulfilled = (state, action) => {
  state.contacts = [...state.contacts, action.payload];
};

const deleteHandleFulfilled = (state, action) => {
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const mySlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: null,
    isLoading: false,
    error: '',
  },
  extraReducers: builder => {
    builder
      .addCase(contactsFetch.fulfilled, getHandleFulfilled)
      .addCase(contactsDelete.fulfilled, deleteHandleFulfilled)
      .addCase(contactsAdd.fulfilled, addHandleFulfilled)
      .addMatcher(isAnyOf(...thunksType('pending')), handlePending)
      .addMatcher(isAnyOf(...thunksType('rejected')), handleRejected)
      .addMatcher(isAnyOf(...thunksType('fulfilled')), handleFulfilled);
  },
});

export const contactsReducer = mySlice.reducer;
