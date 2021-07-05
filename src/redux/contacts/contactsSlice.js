import { createSlice } from '@reduxjs/toolkit';

export const contactSlice = createSlice({
  name: 'contacts',
  initialState: {
    contactList: {},
    contactSelected: '',
  },
  reducers: {
    getContacts: (state, action) => {
      state.contactList = action.payload;
    },
    setSelectedContact: (state, action) => {
      state.contactSelected = action.payload;
    },
  },
});
export const { getContacts, setSelectedContact } = contactSlice.actions;

export default contactSlice.reducer;
