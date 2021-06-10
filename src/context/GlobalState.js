import React, { createContext, useReducer } from 'react';
import Reducer from './Reducer';
import axios from 'axios';

// Initial state
const initialState = {
    transactions: [], // initially, an empty transaction List
    error: null,
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component to allow the components to receive the current state and actions
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialState); // dispatch calls the Reducer

    async function getTransactions() {
        try {
            const res = await axios.get('/api/v1/transactions');
            dispatch({
                type: "get_transactions",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "error_request",
                payload: err.message,
            });
        }
    }

    // dispatch action
    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);
            // the object is the action
            dispatch({
                type: "delete_transaction",
                payload: id
            });
        } catch (err) {
            dispatch({
                type: "error_request",
                payload: err.message,
            });
        }
    }

    async function addTransaction(transaction) {
        try {
            const res = await axios.post('/api/v1/transactions', transaction);
            dispatch({
                type: "add_transaction",
                payload: res.data.data, // need the newly created object to add it inside the transaction list
            });
        } catch (err) {
            dispatch({
                type: "error_request",
                payload: err.message,
            });
        }
    }

    // provide the state or the functions accessible to all of the components
    return (
        <GlobalContext.Provider value = {
            {
                transactions: state.transactions,
                error: state.error,
                getTransactions,
                deleteTransaction,
                addTransaction,
            }
        }>
            {children}
        </GlobalContext.Provider>
    )
}

