import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	isFabOpen: false,
};

export const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		setIsFabOpen: (state, action) => {
			state.isFabOpen = action.payload;
		},
	},
});

export const { setIsFabOpen } = userSlice.actions;

export default userSlice.reducer;
