import { configureStore } from '@reduxjs/toolkit';
import tabReducer from 'redux/tab/tabSlice';
import contactReducer from 'redux/contacts/contactsSlice';

export default configureStore({
  reducer: {
    tab: tabReducer,
    contacts: contactReducer,
  },
});
