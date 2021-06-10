import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/utility-formatting";

export const Transaction = ({ transaction }) => {
    const context = useContext(GlobalContext);
    const sign = transaction.amount < 0 ? '-' : '+';
    return (
        <li className = {transaction.amount < 0 ? 'minus' : 'plus'}>
            {transaction ? transaction.text : ""}
            <span>{sign}${numberWithCommas(Math.abs(transaction.amount))}</span>
            <small>Added on {new Date().toLocaleDateString("en-US", {
                year: "numeric",
                month: "numeric",
                day: "numeric",
            })}</small>
            <button onClick = {() => context.deleteTransaction(transaction._id)} className = "delete-btn">x</button>
        </li>
    )
}