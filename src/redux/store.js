import { configureStore } from '@reduxjs/toolkit';
import tabReducer from './tab/tabSlice';
import contactReducer from './contacts/contactsSlice';

export default configureStore({
  reducer: {
    tab: tabReducer,
    contacts: contactReducer,
  },
});
