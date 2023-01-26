import { ReducerActionType } from "../../data/types/paramTypes";
import { Account } from "../../data/dto";
import { ACCOUNT_ACTION } from "../../data/constant/reducerActions/accountAction";

export function accountReducer(
    prevState : Account,
    action : ReducerActionType<Account>
) : Account {
    const nextVal = action.payload;
    switch( action.type ){
        case ACCOUNT_ACTION.UPDATE_REGISTER_DATA :
            return getUpdatedRegisterNextState( prevState , nextVal )
        default :
            return prevState;
    }
    return prevState;
}

function getUpdatedRegisterNextState(
    prevState : Account ,
    nextState : Account
){
    return {
        ...prevState,
        firstName : nextState.firstName.trim(),
        lastName : nextState.lastName.trim(),
        email : nextState.email.trim(),
        password : nextState.password.trim()
    }
}