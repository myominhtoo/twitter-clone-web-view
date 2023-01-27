import {
    Button,
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel
} from "react-bootstrap";
import {FormPageHeader} from "../../components/common/Header";
import {initialAccount, PageHeaderTarget} from "../../data/constant/appData";
import {
    useReducer,
    useState,
    useEffect, FormEvent
} from 'react';
import { useNavigate } from "react-router-dom";
import {accountReducer} from "../../service/reducer/accountReducers";
import {ACCOUNT_ACTION} from "../../data/constant/reducerActions/accountAction";
import {ApiResponse} from "../../data/dto";
import axios, {AxiosError} from "axios";
import { API } from "../../data/constant/api";

export default function LoginPage(){

    const [ account , accountDispatcher ] = useReducer( accountReducer , initialAccount());
    const [ error , setError ] = useState<object>({});
    const [ isLoggingIn , setIsLoggingIn ] = useState<boolean>(false);
    const [ isSubmitDisable , setIsSubmitDisable ] = useState<boolean>(false);

    const navigate = useNavigate();

    const  handleChangeInput = ( target : string , value : string ) => {
        account[ target as keyof typeof account ] = value as never;
        accountDispatcher(
            { type : ACCOUNT_ACTION.UPDATE_REGISTER_DATA , payload : { ...account } }
        );
    }

    const handleSubmitForm =  async ( e : FormEvent ) => {
        e.preventDefault();
        setIsLoggingIn(true);
        await axios.post( API.LOGIN , account )
            .then( res => {
                setIsLoggingIn(false);
                navigate('/?status=Success!');
            })
            .catch(( e : AxiosError) => {
                setIsLoggingIn(false);
                const errorResponse = e.response?.data as ApiResponse<null>;
                setError( errorResponse.errors );
            });
    }

    useEffect(() => {
        setIsSubmitDisable( account.email.trim() == '' || account.password.trim() == '')
    } , [ account.email , account.password ])

    return (
        <Container id='outer-container' >
            <FormPageHeader
             target={PageHeaderTarget.LOGIN}
            />
            <Container id='main-container' >
                <section id='form-title' >
                    <h3 className='text-center fc-p-snow' >Sign in Your Account</h3>
                </section>
                <section id='form-container'>
                    <Form onSubmit={handleSubmitForm} className='w-100 h-auto' >
                        <FormGroup className='form-group'>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type='email'
                                placeholder='Your email'
                                value={account.email}
                                onChange={ e => handleChangeInput( 'email' , e.target.value )}
                            />
                            <div className='w-100' >
                                <small className='text-danger'>
                                    { error['email' as keyof typeof error] || error['message' as keyof typeof error ] }
                                </small>
                            </div>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type='password'
                                placeholder='Your password'
                                value={account.password}
                                onChange={ e => handleChangeInput( 'password' , e.target.value )}
                            />
                            <div className='w-100' >
                                <small className='text-danger' >
                                    { error['password' as keyof typeof error ] || error['message' as keyof typeof error] }
                                </small>
                            </div>
                        </FormGroup>
                        <FormGroup>
                            <Button
                                type='submit'
                                className='w-100 text-light'
                                disabled={ isSubmitDisable || isLoggingIn }
                            >
                                Login
                            </Button>
                            <div className='d-none text-center py-2 d-flex gap-2 align-items-center justify-content-center'>
                                <i className="fa-solid fa-thumbs-up fc-thm"></i>
                                <small className='fc-p-snow' >Sign In and enjoy your time!</small>
                            </div>
                        </FormGroup>
                    </Form>
                </section>
            </Container>
        </Container>
    );
}