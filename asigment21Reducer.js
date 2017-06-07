const initialState = {
    "user":null,
    "accounts":{},
    "invoices":{},
    "transactions":{}
};

const ACTIONS = {
    DEPOSIT:"DEPOSIT",
    WITHDRAW:"WITHDRAW",
    ID:"ID",
    TRANSFER:"TRANSFER",
};

function depositAction(numberAcc, amount){
return{
    type:ACTIONS.DEPOSIT,
    accounts:{
        numberAcc,
        amount
        }
    };
}

function withdrawAction(numberAcc, amount){
    return{
        type:ACTIONS.WITHDRAW,
        accounts:{
            numberAcc,
            amount
        }
    };
}

function transferAction(numberAcc,amount,receiver){
    return{
        type: ACTIONS.TRANSFER,
        transactions:{
            numberAcc,
            amount,
            receiver
        }
    };
}

function reducer(action, state = initialState) {
    switch(action.type){
        case "DEPOSIT":
        let newstate = Object.assign({},state);
        newstate.accounts = action.accounts;
        return newstate;

        case "WITHDRAW":
        let newstate = Object.assign({},state);
        newstate.accounts = action.accounts;
        return newstate;

        case "TRANSFER":
        let newstate = Objest.assign({},state);
        newstate.accounts = action.accounts;
        return newstate;
    }
}