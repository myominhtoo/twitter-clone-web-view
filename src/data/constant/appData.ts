import { Account } from "../dto";

export const PageHeaderTarget = {
    REGISTER : 'register',
    LOGIN : 'login',
    VERIFY_EMAIL : 'verify-email'
}

export function initialAccount(){
    const account = new Account();
    return { ...account , firstName: '' , lastName: '' , email : '' , password : '' }
}
