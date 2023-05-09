import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { contactsAdd, contactsDelete, contactsFetch } from './operations';
import {
  addHandleFulfilled,
  deleteHandleFulfilled,
  getHandleFulfilled,
  handleFulfilled,
  handlePending,
  handleRejected,
} from './reducers';

const arrThunks = [contactsAdd, contactsDelete, contactsFetch];
const thunksType = type => arrThunks.map(thunk => thunk[type]);

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
