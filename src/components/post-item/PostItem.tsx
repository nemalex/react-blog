import { Link } from "react-router-dom";

interface Post {
	title: string,
	text: string,
	date: Date,
    id: string,
}

interface PostItemProps {
    p: Post,
    single: boolean,
}

const PostItem = ({ p, single }:PostItemProps) => {
    const asd: Date = p.date;
    //console.log(asd.toISOString())
    return (
        <div>
            <h1>{p.title}</h1>
            <p>{p.text}</p>
            <small>{p.date.toString()}</small>
            {!single && <Link to={ "/posts/" + p.id }>Permalink</Link>}
        </div>
    )
}

export default PostItem;
