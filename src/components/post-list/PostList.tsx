import { TextField } from '@mui/material';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetPostsQuery } from '../../store/posts-api';
import Fuse from 'fuse.js';
import PostItem from '../post-item/PostItem';
import classes from './PostList.module.css'
import { searchActions } from '../../store/search-slice';

interface Post {
    title: string,
    text: string,
    date: Date,
    id: string,
}

const PostList = () => {
    const dispatch = useDispatch();
    const { isLoading, isError, data } = useGetPostsQuery('');
    const searchHidden = useSelector((state: { search: { searchHidden: boolean } }) => state.search.searchHidden);
    const searchTerm = useSelector((state: { search: { searchTerm: string } }) => state.search.searchTerm);

    const changeHandler = (event: any) => {
        dispatch(searchActions.setTerm(event.target.value));
    }

    useEffect(() => {
        dispatch(searchActions.hide());
        dispatch(searchActions.setTerm(''));
    }, [dispatch]);

    const fuse = new Fuse(data ?? {}, {
        keys: ['title', 'text']
    });
    const result = fuse.search(searchTerm).map((i: any) => {
        return { ...(i.item) }
    });
    const list = searchTerm ? result : data;

    return (<div>
        {searchHidden || <>
            <TextField
                className={classes.search}
                variant="outlined"
                onChange={changeHandler}
            />
        </>}
        {isLoading ? <>Loading</> : list &&
            [...list]?.sort((a, b) => b.id - a.id).map((post: Post) =>
                <PostItem key={post.id} p={post} single={false} />
            )
        }

        {isError && <>Failed to load posts</>}
    </div>);
}

export default PostList;