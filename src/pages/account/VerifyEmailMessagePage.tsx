import {FormPageHeader} from "../../components/common/Header";
import {PageHeaderTarget} from "../../data/constant/appData";
import {
    Container
} from "react-bootstrap";

export default function VerifyEmailMessagePage(){
    return (
        <Container id='outer-container' >
            <FormPageHeader
                target={PageHeaderTarget.VERIFY_EMAIL}
            />
            <Container id='main-container' >
                <section id='form-title' >
                    <h3 className='text-center fc-p-snow mt-5 pt-5' >Please Check Your Email!</h3>
                </section>
                <section id='form-container'>

                </section>
            </Container>
        </Container>
    )
}