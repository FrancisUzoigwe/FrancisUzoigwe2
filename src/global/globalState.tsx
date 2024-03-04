import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false,
    scroll: false
}

const globalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        toggled: (state: any) => {
            state.toggle = true
        },
        changedToggled: (state: any) => {
            state.toggle = false
        },
        scrolled: (state: any) => {
            state.scroll = true
        },
        changedScroll: (state: any) => {
            state.scroll = false
        }
    }
});

export const { toggled, changedToggled, changedScroll, scrolled } = globalState.actions

export default globalState.reducer