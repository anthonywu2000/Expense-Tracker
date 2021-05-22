import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const Transaction = ({ transaction }) => {
    const context = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className = {transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction ? transaction.text : ""}
            <span>{sign}${Math.abs(transaction.amount)}</span>
            <button onClick = {() => context.deleteTransaction(transaction.id)} className = "delete-btn">x</button>
        </li>
    )
}