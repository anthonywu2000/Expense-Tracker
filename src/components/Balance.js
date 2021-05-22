import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const Balance = () => {
    const context = useContext(GlobalContext);
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    const amountsArray = context.transactions.map(transaction => transaction.amount);
    const totalAmount = amountsArray.reduce(reducer, 0);
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${totalAmount.toFixed(2)}</h1>
        </div>
    )
}