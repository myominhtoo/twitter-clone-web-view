import {
    Container,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Button
} from "react-bootstrap"
import { FormPageHeader } from "../../components/common/Header";
import { PageHeaderTarget } from "../../data/constant/appData";
import {
    useReducer,
    useEffect,
    useState, FormEventHandler, FormEvent
} from "react";
import { initialAccount } from "../../data/constant/appData";
import {accountReducer} from "../../service/reducer/accountReducers";
import {ACCOUNT_ACTION} from "../../data/constant/reducerActions/accountAction";
import axios, {AxiosError} from "axios";
import { API } from "../../data/constant/api";
import {Account, ApiResponse} from "../../data/dto";
import {DeviceUUID} from "device-uuid";
import {AccountValidation, NamingMap} from "../../data/constant/validation";
import {useNavigate} from "react-router-dom";

export default function RegisterAccPage() {

    const [ account , accountDispatcher ] = useReducer( accountReducer , initialAccount() );
    const [ isSubmitDisable , setIsSubmitDisable ] = useState<boolean>(false);
    const [ isRegistering , setIsRegistering ] = useState<boolean>(false);
    const [ error , setError ] = useState<object>({});

    const navigate = useNavigate();

    const isEmpty = () => {
        return ( account.firstName.trim() == '' ||
            account.lastName.trim() == '' ||
            account.email.trim() == '' ||
                account.password.trim() == ''
        )
    }

    const areAllValuesEmpty = ( ) => {
        return (
            account.firstName.trim() == '' || account.lastName.trim() == '' ||
                account.email.trim() == '' || account.password.trim() == ''
        )
    }

    useEffect( () => {
        setIsSubmitDisable(isEmpty());
        if( !areAllValuesEmpty() ){
            listenIsValidWordCountOfState();
        }
    } , [account.firstName,account.lastName,account.email,account.password] );

    const handleChangeInput = ( key : string , value : string ) => {
        setError(prevError => {
            if( key == 'email' && value.length < account.email.length ){
                prevError['message' as keyof typeof error] = '' as never;
            }
            handleUpdateErrorState( key );
            return { ...prevError };
        });
        account[key as keyof typeof account] = value as never;
        accountDispatcher(
            { type : ACCOUNT_ACTION.UPDATE_REGISTER_DATA , payload : { ...account }}
        );
    };

    const isValidWordCount = ( value : string , min : number , max : number ) => {
        return ( value.trim().length >= min ) && ( value.trim().length <= max );
    }

    const listenIsValidWordCountOfState = () => {
        let isValid = true;
        const allStateKeys = ['firstName','lastName','email','password'];
        allStateKeys.forEach( key => {
            const validation = AccountValidation[ key as keyof typeof AccountValidation];
            isValid = isValid && isValidWordCount( account[ key as keyof typeof account ] as string , validation.min , validation.max );
        })
        setIsSubmitDisable(!isValid);
    }

    const handleLeaveInput = ( value : string , target : string ) => {
        const validation = AccountValidation[target as keyof typeof AccountValidation];
        if( !isValidWordCount( value , validation.min , validation.max )){
            setError( prevError => {
               prevError[ target as keyof typeof error ] = `Must between ${validation.min} and ${validation.max} characters!` as never;
               return { ...prevError }
            });
            return;
        }
        handleUpdateErrorState( target );
    }

    const handleUpdateErrorState = ( target : string) => {
        setError( prevError => {
            const filteredKeys = Object.keys(error)
                .filter( key => key != target && key != 'message' );
            const filteredValues = filteredKeys.map( key => {
                return error[key as keyof typeof error];
            })
            const nextVal = {};
            filteredKeys.forEach( ( key , idx ) => {
                nextVal[key as keyof typeof nextVal] = filteredValues[idx];
            })
            return nextVal;
        })
    }

    const handleSubmitForm = async ( e : FormEvent ) => {
        e.preventDefault();
        account.deviceId = new DeviceUUID().get();
        setIsRegistering(true);
        await axios.post( API.REGISTER_ACCOUNT , account )
            .then( res => {
                setIsRegistering(false);
                setError({});
                navigate('/login?status=Success!');

            })
            .catch( ( e : AxiosError)  => {
                setIsRegistering(false);
                const errorResponse = e.response?.data as ApiResponse<null>;

                if( errorResponse == null) {
                    setError({});
                    navigate('/login?message=Success!');
                }else {
                    setError(errorResponse.errors);
                }
            });
    };

    return (
        <Container id='outer-container' >
            <FormPageHeader
                target={PageHeaderTarget.REGISTER}
            />
            <Container id='main-container' >
                <section id='form-title' >
                    <h3 className='text-center fc-p-snow' >Create Your Account!</h3>
                </section>
                <section id='form-container'>
                    <Form onSubmit={handleSubmitForm} className='w-100 h-auto' >
                        <FormGroup className='form-group d-flex gap-2'>
                            <div className='w-50'>
                                <FormLabel>First Name</FormLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Your first name'
                                    value={account.firstName}
                                    onChange={ e => handleChangeInput('firstName',e.target.value)}
                                    onBlur={ e => handleLeaveInput( e.target.value , 'firstName')}
                                />
                                <div className='w-100'>
                                    <small className='text-danger' >
                                        { error['firstName' as keyof typeof error ] }
                                    </small>
                                </div>
                            </div>
                            <div className='w-50' >
                                <FormLabel>Last Name</FormLabel>
                                <FormControl
                                    type='text'
                                    placeholder='Your last name'
                                    value={account.lastName}
                                    onChange={ e => handleChangeInput('lastName',e.target.value)}
                                    onBlur={ e=> handleLeaveInput( e.target.value , 'lastName' )}
                                />
                                <div className='w-100'>
                                    <small className='text-danger' >
                                        { error['lastName' as keyof typeof error ] }
                                    </small>
                                </div>
                            </div>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type='email'
                                placeholder='Your email'
                                value={account.email}
                                onChange={ e => handleChangeInput('email',e.target.value)}
                                onBlur={ e => handleLeaveInput( e.target.value , 'email' ) }
                             />
                            <div className='w-100'>
                                <small className='text-danger' >
                                    { error['message' as keyof typeof error] || error['email' as keyof typeof error] }
                                </small>
                            </div>
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type='password'
                                placeholder='Your password'
                                autoComplete='false'
                                value={account.password}
                                onChange={ e => handleChangeInput('password',e.target.value)}
                                onBlur={ e => handleLeaveInput( e.target.value , 'password') }
                            />
                            <div className='w-100'>
                                <small className='text-danger' >
                                    { error['password' as keyof typeof error ] }
                                </small>
                            </div>
                        </FormGroup>
                        <FormGroup>
                             <Button
                                 type='submit'
                                 className='w-100 text-light'
                                 disabled={
                                 isSubmitDisable || isRegistering ||( Object.keys(error).length > 0 )
                             }
                             >
                                 Create
                             </Button>
                            <div className='d-none text-center py-2 d-flex gap-2 align-items-center justify-content-center'>
                                <i className="fa-solid fa-thumbs-up fc-thm"></i>
                                <small className='fc-p-snow' >Create account and enjoy your time!</small>
                            </div>
                        </FormGroup>
                    </Form>
                </section>
            </Container>
        </Container>
    )
}