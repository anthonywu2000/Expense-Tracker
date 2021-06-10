import React, { useContext, useEffect } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { Transaction } from "./Transaction";

export const TransactionList = () => {
    const context = useContext(GlobalContext);

    useEffect(() => {
        context.getTransactions();
    }, []);

    return (
        <div>
            <h3>Your Transaction History</h3>
            <ul className = "list">
                {/*render each of the transactions in the list and format them by the Transaction component as props*/}
                {context.transactions ? context.transactions.map(transaction => (
                    <Transaction key = {transaction.id} transaction = {transaction}/>
                )) : ""}
            </ul>
        </div>
    )
}