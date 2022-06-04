import { useParams, Link } from 'react-router-dom';
import { useGetEntryQuery } from '../../store/posts-api';
import PostItem from '../post-item/PostItem';
const PostView = () => {
    const { id } = useParams();

    const { isSuccess, isError, isLoading, data } = useGetEntryQuery(id);

    return (<>
        {isSuccess && <>
            { data && <PostItem p={data} single={true}/> }
        </>}
        {isError && <>Post not found</>}
        {isLoading && <>Loading</>}
        <Link to="/posts">Back</Link>
    </>)
}

export default PostView;
