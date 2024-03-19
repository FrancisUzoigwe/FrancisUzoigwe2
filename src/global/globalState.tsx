import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    toggle: false
}

const globalState = createSlice({
    name: "state",
    initialState,
    reducers: {
        showcv: (state: any) => {
            state.toggle = true
        },
        hidden: (state: any) => {
            state.toggle = false
        }
    }
});

export const { hidden, showcv } = globalState.actions

export default globalState.reducer