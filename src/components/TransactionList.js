import React from 'react';

export const TransactionList = () => {
    return (
        <div>
            <h3>Your Transaction History</h3>
            <ul className = "list">
                <li class = "minus">
                    <span>$400</span>
                    <button className = "delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}