interface Post {
	title: string,
	text: string,
	date: Date,
    id: string,
}

interface PostItemProps {
    p: Post
}

const PostItem = ({ p }:PostItemProps) => {
    const asd: Date = p.date;
    //console.log(asd.toISOString())
    return (
        <div>
            <h1>{p.title}</h1>
            <p>{p.text}</p>
            <small>{p.date.toString()}</small>
        </div>
    )
}

export default PostItem;