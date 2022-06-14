import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/post-list/PostList';
import PostView from './components/post-view/PostView';
import PostNew from './components/post-new/PostNew';
import Login from './components/login/Login';
import Feedback from './components/feedback/Feedback';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from './store/auth-slice';
import PostEdit from './components/post-edit/PostEdit';

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        const item = localStorage.getItem('isLoggedIn');
        if (item === 'true') {
		    dispatch(authActions.login())
        }
    },[dispatch]);

    return <>
        <Header />
        <div className='content'>
            <Routes>
                <Route path='/' element={<>
                    Home
                </>} />
                <Route path='/admin' element={<>admin</>} />
                <Route path='/newpost' element={<PostNew />} />
                <Route path='/posts' element={ <PostList /> } />
                <Route path='/posts/:id' element={<PostView />} />
                <Route path='/edit/:id' element={<PostEdit />} />
                <Route path='/login' element={<Login />} />
                <Route path='/feedback' element={<Feedback />} />
            </Routes>
        </div>
    </>;
}

export default App;