import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/utility-formatting";

export const Balance = () => {
    const context = useContext(GlobalContext);
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    const amountsArray = context.transactions ? context.transactions.map(transaction => transaction.amount) : [];
    const totalAmount = amountsArray ? amountsArray.reduce(reducer, 0) : 0;
    return (
        <div>
            <h4>Your Balance</h4>
            <h1>${numberWithCommas(totalAmount.toFixed(2))}</h1>
        </div>
    )
}