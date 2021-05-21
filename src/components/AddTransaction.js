import React, { useState } from "react";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form>
                <div className = "form-control">
                    <label for = "text">Transaction Name</label>
                    <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)}
                           placeholder = "Enter transaction name...." />
                </div>

                <div className = "form-control">
                    <label for = "amount">Transaction Amount<br/>
                        <small>(Enter negative sign (-) for expenses, enter positive sign (+) for incomes)</small>
                    </label>
                    <input type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)}
                           placeholder = "Enter transaction amount...." />
                </div>

                <button className = "btn">Submit Transaction</button>
            </form>
        </div>
    )
}