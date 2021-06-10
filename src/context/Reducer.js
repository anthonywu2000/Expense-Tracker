export default (state, action) => {
    switch(action.type) {
        case "add_transaction":
            return {
                ...state,
                transactions: [...state.transactions, action.payload] // add new transaction onto the original transactions
            };
        case "delete_transaction":
            return {
                ...state, // send in the current state
                transactions: state.transactions.filter(transaction => transaction._id !== action.payload)
            };
        case "get_transactions":
            return {
                ...state,
                transactions: action.payload,
            };
        case "error_request":
            return {
                ...state,
                error: action.payload,
            }
        default:
            return state;
    }
}