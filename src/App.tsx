import './App.css';
import Header from './components/header/Header';
import { Route, Routes } from 'react-router-dom';
import { useGetPostsQuery } from './store/posts-api';
import PostList from './components/post-list/PostList';
import PostView from './components/post-view/PostView';
import PostNew from './components/post-new/PostNew';

interface Post {
	title: string,
	text: string,
	date: Date,
    id: string,
}

function App() {
    const { data } = useGetPostsQuery('');
    const list: Post[] = data;
  return <>
    <Header />

    <Routes>
      <Route path='/' element={<>
        Home
      </>} />
      <Route path='/admin' element={<>admin</>} />
      <Route path='/newpost' element={<PostNew />} />
      <Route path='/posts' element={ <PostList posts={list} /> } />
			<Route path='/posts/:post' element={<PostView />} />
    </Routes>
  
  </>;
}

export default App;
