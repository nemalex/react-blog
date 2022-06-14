import { TextField } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../store/posts-api';
import Fuse from 'fuse.js';
import PostItem from '../post-item/PostItem';
import classes from './PostList.module.css'

interface Post {
    title: string,
    text: string,
    date: Date,
    id: string,
}

const PostList = () => {
    const [ term, setTerm ] = useState('');
    const { isLoading, isError, data } = useGetPostsQuery('');
    const searchHidden = useSelector((state: {search: {searchHidden: boolean}}) => state.search.searchHidden);

    // TODO figure put types again
    const changeHandler = (event: any) => {
        setTerm(event.target.value);
    }

    const fuse = new Fuse(data ?? {}, {
        keys: ['title', 'text']
    });
    const result = fuse.search(term).map((i: any) => {
        return {...(i.item)}
      })
    const list = term ? result : data;
    console.log(term, result)
    
    return <div>
        {searchHidden || <>
            <TextField
                className={classes.search}
                variant="outlined"
                onChange={changeHandler}
            />
        </>}
        {isLoading ? <>Loading</> : list &&
            [...list]?.sort((a, b) => b.id - a.id).map((post: Post) => 
                    <PostItem key={post.id} p={post} single={false}/>
                )
        }

        {isError ? <>Failed to load posts</> : <></>}
    </div>
}

export default PostList;