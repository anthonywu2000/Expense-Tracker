import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Toy Car', amount: 30}
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component to allow the components to receive the current state and actions
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState);
    return (
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

