import { Box, Button, Card } from "@mui/material";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { useDeletePostMutation } from "../../store/posts-api";
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

const PostItem = ({ p, single }: PostItemProps) => {
    const [deletePost] = useDeletePostMutation();
    const navigate = useNavigate();
    const isLoggedIn = useSelector((state: {auth: {loggedIn: boolean}}) => state.auth.loggedIn);

    const deleteHandler = async () => {
        const isConfirmed = window.confirm("Are you sure you want to remove this burrito?");

        if (isConfirmed) {
            await deletePost(p.id)
            if (single) {
                navigate('/posts')
            }
        }

    }

    return (
        <Box>
            <Card variant="outlined" className={classes.card}>
                <h1>{p.title}</h1>
                <p>{p.text}</p>
                <small>{p.date.toString()}</small>
                {isLoggedIn && <Button onClick={deleteHandler}>Delete</Button>}
                {!single && <Link to={ "/posts/" + p.id }>Permalink</Link>}
            </Card>
        </Box>
    )
}

export default PostItem;
