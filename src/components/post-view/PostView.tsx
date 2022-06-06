import { Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import { useGetEntryQuery } from '../../store/posts-api';
import PostItem from '../post-item/PostItem';
import classes from './PostView.module.css'

const PostView = () => {
    const { id } = useParams();
    const { isSuccess, isError, isLoading, data } = useGetEntryQuery(id);
    const navigate = useNavigate();

    return (<div className={classes.content}>
        {isSuccess && <>
            { data && <PostItem p={data} single={true}/> }
        </>}
        {isError && <>Post not found</>}
        {isLoading && <>Loading</>}
        <Button variant='outlined' onClick={() => navigate(-1)}>Back</Button>
    </div>)
}

export default PostView;