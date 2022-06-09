import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import PostList from './components/post-list/PostList';
import PostView from './components/post-view/PostView';
import PostNew from './components/post-new/PostNew';
import Login from './components/login/Login';

function App() {
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
                <Route path='/login' element={<Login />} />
            </Routes>
        </div>
    </>;
}

export default App;