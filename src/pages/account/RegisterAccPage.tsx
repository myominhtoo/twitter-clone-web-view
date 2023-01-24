import {
    Card,
    Container,
    Form,
    FormGroup,
    FormLabel,
    FormControl,
    Button
} from "react-bootstrap"
import { FormPageHeader } from "../../components/common/Header";

export default function RegisterAccPage() {
    return (
        <Container id='outer-container' >
            <FormPageHeader />
            <Container id='main-container' >
                <section id='form-title' >
                    <h3 className='text-center fc-p-snow' >Create Your Account</h3>
                </section>
                <section id='form-container'>
                    <Form className='w-100 h-auto' >
                        <FormGroup className='form-group'>
                            <FormLabel>Username</FormLabel>
                            <FormControl
                                type='text'
                                placeholder='Your name'
                            />
                        </FormGroup>
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
                            <div className='text-center py-2 d-flex gap-2 align-items-center justify-content-center'>
                                <i className="fa-solid fa-thumbs-up fc-thm"></i>
                                <small className='fc-thm' >Create account and enjoy your time!</small>
                            </div>
                        </FormGroup>
                    </Form>
                </section>
            </Container>
        </Container>
    )
}