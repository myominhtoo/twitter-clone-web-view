import { PageHeaderTargetType } from "../../data/types/propTypes";
import { Link } from "react-router-dom";
import {
    PageHeaderTarget
} from '../../data/constant/appData';

export function AppHeader(){
    return (
        <header id='header' >

        </header>
    )
}

export function FormPageHeader(
    {
        target
    } : PageHeaderTargetType
){
    return (
        <header id='form-page-header'>
            <section id='icon-section'>
                <i id='header-logo' className="fa-brands fa-twitter"></i>
                <span id='header-title'>#Tweet</span>
            </section>
            <section id='menu-section' >
                <Link
                    id='link'
                    to={ target == PageHeaderTarget.REGISTER ? '/login' : '/register'}
                >
                    <span className='text-danger'>
                        {
                            target == PageHeaderTarget.REGISTER
                            ? 'Already Account?'
                                : 'Create Account?'
                        }
                    </span>
                </Link>
                <span className='fc-p-snow' >|</span>
                <span className='fc-thm' >Reviews</span>
            </section>
        </header>
    )
}
