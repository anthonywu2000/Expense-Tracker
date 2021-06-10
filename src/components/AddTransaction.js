import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";
import uuid from "react-uuid";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);
    const context = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

       const newTransaction = {
           id: uuid(),
           text,
           // date: new Date().toLocaleDateString("en-US", {
           //     year: "numeric",
           //     month: "numeric",
           //     day: "numeric",
           // }),
           amount: +amount
       }

       if (newTransaction.amount === 0 || newTransaction.text === "") {
           alert("INVALID INPUTS. PLEASE CHECK AGAIN.");
       } else {
           context.addTransaction(newTransaction);
           setText("");
           setAmount(0);
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
                    <label>Transaction Amount<br/>
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