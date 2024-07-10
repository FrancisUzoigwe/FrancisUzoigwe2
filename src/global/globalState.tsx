import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    visibility: false,
    toggle: false
}

const globalState = createSlice({
    name: "second",
    initialState,
    reducers: {
        light: (state: any) => {
            state.visibility = true;
        },
        dark: (state: any) => {
            state.visibility = false
        },
        open: (state: any) => {
            state.toggle = true;
        },
        close: (state: any) => {
            state.toggle = false;
        }
    }
});

export const { light, dark, close, open } = globalState.actions

export default globalState.reducer