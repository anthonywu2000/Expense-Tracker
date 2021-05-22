export default (state, action) => {
    switch(action.type) {
        case "add_transaction":
            return {
                transactions: [action.payload, ...state.transactions] // add new transaction onto the original transactions
            };
        case "delete_transaction":
            return {
                // ...state, // send in the current state
                transactions: state.transactions.filter(transaction => transaction.id !== action.payload)
            };
        default:
            return state;
    }
}