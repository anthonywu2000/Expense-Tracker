import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Toy Car', amount: 30 },
        { id: 3, text: 'Debussy Images Book', amount: 700 },
        { id: 4, text: 'Orange Juice', amount: -19.99 }
    ]
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

