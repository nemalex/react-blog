import PostItem from "../post-item/PostItem";

interface Post {
	title: string,
	text: string,
	date: Date,
    id: string,
}

interface PostListProps {
    posts: Post[]
}

const PostList = ({posts}: PostListProps) => {
    return (
        posts ?
    <>
        {[...posts]?.reverse().map((post) => <PostItem key={post.id} p={post} single={false}/>)}
    </>: <></>)

}

export default PostList;
