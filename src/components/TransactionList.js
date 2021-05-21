import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
    const context = useContext(GlobalContext);

    return (
        <div>
            <h3>Your Transaction History</h3>
            <ul className = "list">
                {context.transactions.map(transaction => (
                    <Transaction key = {transaction.id} transaction = {transaction}/>
                ))}
            </ul>
        </div>
    )
}