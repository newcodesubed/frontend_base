const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const reducer(state = initialState, action){
    switch(action.type){
        case 'account/deposite':
            return{...state, balance:state.balance + action.payload}

        case 'account/withdraw':
            return{...state, balance:state.balance - action.payload}
        
        case 'account/requestLoan':
            if (state.loan > 0) return state;
            //Later
            return{...state, loan:action.payload}

        case 'account/payLoan':
            return{...state,loan: 0, loanPurpose:'',balance: state.balance- state.loan}

        default:
            return state;
    }
}