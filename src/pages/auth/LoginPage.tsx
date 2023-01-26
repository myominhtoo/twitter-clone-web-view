import {
    Button,
    Container,
    Form,
    FormControl,
    FormGroup,
    FormLabel
} from "react-bootstrap";
import {FormPageHeader} from "../../components/common/Header";
import {PageHeaderTarget} from "../../data/constant/appData";

export default function LoginPage() {
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
                    <Form className='w-100 h-auto' >
                        <FormGroup className='form-group'>
                            <FormLabel>Email</FormLabel>
                            <FormControl
                                type='email'
                                placeholder='Your email'
                            />
                        </FormGroup>
                        <FormGroup className='form-group'>
                            <FormLabel>Password</FormLabel>
                            <FormControl
                                type='password'
                                placeholder='Your password'
                            />
                        </FormGroup>
                        <FormGroup>
                            <Button className='w-100 text-light'>Create</Button>
                            <div className='d-none text-center py-2 d-flex gap-2 align-items-center justify-content-center'>
                                <i className="fa-solid fa-thumbs-up fc-thm"></i>
                                <small className='fc-p-snow' >Sign In and enjoy your time!</small>
                            </div>
                        </FormGroup>
                    </Form>
                </section>
            </Container>
        </Container>
    )
}