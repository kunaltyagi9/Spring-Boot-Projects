import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    employees: []
}

const employeeSlice = createSlice({
    name: 'employeeSlice',
    initialState: initialState,
    reducers: {
        setEmployees: (state, { payload: { employees } }) => {
            state.employees = employees
        }
    }
})


export const { setEmployees } = employeeSlice.actions;