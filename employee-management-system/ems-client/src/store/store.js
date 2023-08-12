import { configureStore, combineReducers } from "@reduxjs/toolkit";


const combinedReducer = combineReducers({
    [employeeSlice.name]: employeeSlice.reducer,
})

const rootReducer = (state, action) => {
    if (action.type === 'authSlice/logout') {
        state = undefined;
    }
    return combinedReducer(state, action);
}

export const store = configureStore({
    reducer: rootReducer
});