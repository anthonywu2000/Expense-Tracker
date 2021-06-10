import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";
import { numberWithCommas } from "../utils/utility-formatting";

export const IncomeExpenses = () => {
    const context = useContext(GlobalContext);
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    const amountsArray = context.transactions ? context.transactions.map(transaction => transaction.amount) : [];
    const income = amountsArray ? amountsArray.filter(amount => amount > 0)
        .reduce(reducer, 0) : 0;
    const expense = amountsArray ? (amountsArray.filter(amount => amount < 0)
        .reduce(reducer, 0) * -1) : 0;

    return (
        <div className = "inc-exp-container">
            <div>
                <h4 className = "income-exp-inner">Income</h4>
                <p className = "money plus">${numberWithCommas(income.toFixed(2))}</p>
            </div>

            <div>
                <h4 className = "income-exp-inner">Expense</h4>
                <p className = "money minus">${numberWithCommas(expense.toFixed(2))}</p>
            </div>
        </div>
    )
}