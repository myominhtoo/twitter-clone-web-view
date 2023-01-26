import { Routes , Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import LoginPage from '../pages/auth/LoginPage'
import RegisterAccPage from '../pages/account/RegisterAccPage'
import ProfilePage from '../pages/account/ProfilePage'
import FollowersPage from '../pages/account/FollowersPage'
import FollowingsPage from '../pages/account/FollowingsPage'
import VerifyEmailMessagePage from '../pages/account/VerifyEmailMessagePage';

export default function AppRoutes(){

    return (
        <Routes>
            <Route path='/' element={ <HomePage/> } />

            <Route path='/home' element={ <HomePage /> } />

            <Route path='/:id' element={ <ProfilePage /> } />

            <Route path='/:id/followers' element={ <FollowersPage /> } />

            <Route path='/:id/followings' element={ <FollowingsPage/> } />
            
            <Route path='/login' element={ <LoginPage /> } />

            <Route path='/register' element={ <RegisterAccPage /> } />

            <Route path='/me' element={ <ProfilePage /> } />
            
            <Route path='/followers' element={ <FollowersPage /> } />

            <Route path='/followings' element={ <FollowingsPage /> } />

            <Route path='/verify-email' element={ <VerifyEmailMessagePage /> } />
        </Routes>
    )
}