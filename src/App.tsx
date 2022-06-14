import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/post-list/PostList';
import PostView from './components/post-view/PostView';
import PostNew from './components/post-new/PostNew';
import Login from './components/login/Login';
import Feedback from './components/feedback/Feedback';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from './store/auth-slice';
import PostEdit from './components/post-edit/PostEdit';
import CookieConsentModal from './components/cookie-consent-modal/CookieConsentModal';
import { cookieActions } from './store/cookie-slice';

function App() {
    const [isDisplayed, setIsDisplayed] = useState(false);
    const [isDone, setIsDone] = useState(false);
    const dispatch = useDispatch();
    const agreed = useSelector((state: { cookie: { agreed: boolean } }) => state.cookie.agreed);

    useEffect(() => {
        const cookieAgreed = localStorage.getItem('cookieAgreed');
        if (cookieAgreed === 'true') {
            dispatch(cookieActions.agree())
        }
        const loggedIn = localStorage.getItem('isLoggedIn');
        if (loggedIn === 'true') {
            dispatch(authActions.login())
        }
        setIsDone(true);
    }, [dispatch]);

    useEffect(() => {
        setInterval(() => {
            setIsDisplayed(true);
        }, 1200);
    }, []);

    return <>
        <Header />
        {isDone && <div className='content'>
            <Routes>
                <Route path='/' element={<>
                    Home
                </>} />
                <Route path='/admin' element={<>admin</>} />
                <Route path='/newpost' element={<PostNew />} />
                <Route path='/posts' element={<PostList />} />
                <Route path='/posts/:id' element={<PostView />} />
                <Route path='/edit/:id' element={<PostEdit />} />
                <Route path='/login' element={<Login />} />
                <Route path='/feedback' element={<Feedback />} />
            </Routes>
        </div>}
        {(isDisplayed && !agreed) && <CookieConsentModal />}
    </>;
}

export default App;