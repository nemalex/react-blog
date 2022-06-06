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
    const { isLoading, isError, data } = useGetPostsQuery('');

    return <div className={classes.content}>
        {isLoading ? <>Loading</> : data ?
            [...data]?.reverse().map((post: Post) => <PostItem key={post.id} p={post} single={false}/>)
        : <></>}
        {isError ? <>Failed to load posts</> : <></>}
    </div>
}

export default PostList;