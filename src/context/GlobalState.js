import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

// Initial state
const initialState = {
    transactions: [] // initially, an empty transaction List
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component to allow the components to receive the current state and actions
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState); // dispatch calls the Reducer

    // dispatch action
    const deleteTransaction = (id) => {
        // the object is the action
        dispatch({
            type: "delete_transaction",
            payload: id
        });
    }

    const addTransaction = (transaction) => {
        dispatch({
            type: "add_transaction",
            payload: transaction
        });
    }

    // provide the state or the functions accessible to all of the components
    return (
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions,
                deleteTransaction,
                addTransaction
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

