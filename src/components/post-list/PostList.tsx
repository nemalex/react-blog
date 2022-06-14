import { TextField } from "@mui/material";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useGetPostsQuery } from "../../store/posts-api";
import PostItem from "../post-item/PostItem";
import classes from './PostList.module.css'

interface Post {
	title: string,
	text: string,
	date: Date,
    id: string,
}

const PostList = () => {
    const [ term, setTerm ] = useState('');
    const { isLoading, isError, post } = useGetPostsQuery('');
	const searchHidden = useSelector((state: {search: {searchHidden: boolean}}) => state.search.searchHidden);

    // TODO figure put types again
    const changeHandler = (event: any) => {
        setTerm(event.target.value);
    }
    
    return <div>
        {searchHidden || <>
            <TextField
                className={classes.search}
                variant="outlined"
                onChange={changeHandler}
            />
        </>}
        {isLoading ? <>Loading</> : post &&
            [...post]?.
                reverse().
                filter((p: Post) => {
                    p.text 
                }).
                map((post: Post) => 
                    <PostItem key={post.id} p={post} single={false}/>
                )
        }

        {isError ? <>Failed to load posts</> : <></>}
    </div>
}

export default PostList;