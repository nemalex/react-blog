import { Box, Card } from "@mui/material";
import { Link } from "react-router-dom";
import classes from './PostItem.module.css'

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
    return (
        <Box sx={{ minWidth: 275 }}>
            <Card variant="outlined" className={classes.card}>
                <h1>{p.title}</h1>
                <p>{p.text}</p>
                <small>{p.date.toString()}</small>
                {!single && <Link to={ "/posts/" + p.id }>Permalink</Link>}
            </Card>
        </Box>
    )
}

export default PostItem;