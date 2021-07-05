import { createSlice } from '@reduxjs/toolkit';

export const tabSlice = createSlice({
  name: 'tab',
  initialState: {
    selectedTab: 'a',
  },
  reducers: {
    selectTab: (state, action) => {
      state.selectedTab = action.payload;
    },
  },
});
export const { selectTab } = tabSlice.actions;

export default tabSlice.reducer;
