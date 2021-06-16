import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import uuid from "react-uuid";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const [date, setDate] = useState("");
    const context = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

       const newTransaction = {
           id: uuid(),
           text,
           date,
           amount: +amount
       }

       if (newTransaction.amount === 0 || newTransaction.text === "") {
           alert("INVALID INPUTS. PLEASE CHECK AGAIN.");
       } else {
           context.addTransaction(newTransaction);
           setText("");
           setAmount(0);
           setDate("");
       }
    }

    return (
        <div>
            <h3>Add New Transaction</h3>
            <form onSubmit = {onSubmit}> {/*The effect of the submission*/}
                <div className = "form-control">
                    <label>Transaction Name</label>
                    <input type = "text" value = {text} onChange = {(e) => setText(e.target.value)}
                           placeholder = "Enter transaction name...." />
                </div>

                <div className = "form-control">
                    <label>Transaction Date</label>
                    <input type = "date" value = {date} onChange = {(e) => setDate(e.target.value)} />
                </div>

                <div className = "form-control">
                    <label>Transaction Amount
                        (Note: Enter negative sign (-) for expenses.)
                    </label>
                    <input type = "number" value = {amount} onChange = {(e) => setAmount(e.target.value)}
                           placeholder = "Enter transaction amount...." />
                </div>

                <button className = "btn">Submit Transaction</button>
            </form>
        </div>
    )
}