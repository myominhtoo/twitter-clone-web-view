import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function AppHeader(){
    return (
        <header id='header' >

        </header>
    )
}

export function FormPageHeader(){
    return (
        <header id='form-page-header'>
            <section id='icon-section'>
                <i id='header-logo' className="fa-brands fa-twitter"></i>
                <span id='header-title'>#Tweet</span>
            </section>
            <section id='menu-section' >
                <span className='text-danger'>Already Account?</span>
                <span className='fc-p-snow' >|</span>
                <span className='fc-thm' >Reviews</span>
            </section>
        </header>
    )
}