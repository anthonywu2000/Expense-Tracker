import React, { useContext } from 'react';
import { GlobalContext } from "../context/GlobalState";

export const IncomeExpenses = () => {
    const context = useContext(GlobalContext);
    const reducer = (accumulator, currentVal) => accumulator + currentVal;
    const amountsArray = context.transactions.map(transaction => transaction.amount);
    const income = amountsArray.filter(amount => amount > 0)
        .reduce(reducer, 0);
    const expense = (amountsArray.filter(amount => amount < 0)
        .reduce(reducer, 0) * -1);

    return (
        <div className = "inc-exp-container">
            <div>
                <h4 className = "header">Income</h4>
                <p className = "money plus">${income.toFixed(2)}</p>
            </div>

            <div>
                <h4 className = "header">Expense</h4>
                <p className = "money minus">${expense.toFixed(2)}</p>
            </div>
        </div>
    )
}