import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contactsSlice';
import { filterReducer } from './filterSlice';
import { contactsReducer } from './reducerFetch';

const rootReducer = combineReducers({
  contacts: contactsReducer,
  filter: filterReducer,
  // movies: moviesReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// import { combineReducers, configureStore } from '@reduxjs/toolkit';
// import { contactsReduser } from './contactsSlice';
// import { filterReducer } from './filterSlice';
// import {
//   persistStore,
//   persistReducer,
//   FLUSH,
//   REHYDRATE,
//   PAUSE,
//   PERSIST,
//   PURGE,
//   REGISTER,
// } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { moviesReducer } from './reducerFetch';

// const rootReducer = combineReducers({
//   contacts: contactsReduser,
//   filter: filterReducer,
//   movies: moviesReducer,
// });

// const persistConfig = {
//   key: 'root',
//   storage,
//   whitelist: ['contacts'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// export const store = configureStore({
//   reducer: persistedReducer,
//   middleware: getDefaultMiddleware =>
//     getDefaultMiddleware({
//       serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
//       },
//     }),
// });

// export const persistor = persistStore(store);
