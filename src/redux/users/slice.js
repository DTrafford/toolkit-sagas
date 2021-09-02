import { createSlice } from "@reduxjs/toolkit";

export const usersSlice = createSlice({
  name: "users",
  initialState: {
    users: [],
  },
  reducers: {
    fetchUsers: (state, action) => {
      return {
        users: action.payload,
      };
    },
  },
});
