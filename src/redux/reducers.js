export const handlePending = state => {
  state.isLoading = true;
};

export const handleFulfilled = state => {
  state.isLoading = false;
  state.error = '';
};

export const getHandleFulfilled = (state, action) => {
  state.contacts = action.payload;
};

export const addHandleFulfilled = (state, action) => {
  state.contacts = [...state.contacts, action.payload];
};

export const deleteHandleFulfilled = (state, action) => {
  state.contacts = state.contacts.filter(
    contact => contact.id !== action.payload.id
  );
};

export const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};
