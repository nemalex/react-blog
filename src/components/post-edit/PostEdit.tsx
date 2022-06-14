import { Typography, TextField, Button } from "@mui/material";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { useEditPostMutation, useGetEntryQuery } from "../../store/posts-api";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const PostEdit = () => {
    const [editPost] = useEditPostMutation();
    const { id } = useParams();
    const { data } = useGetEntryQuery(id);
    const isLoggedIn = useSelector((state: {auth: {loggedIn: boolean}}) => state.auth.loggedIn);
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState : {
            touchedFields,
            errors,
            isValid,
        },
    } = useForm({
        reValidateMode : 'onChange',
        mode : 'onBlur',
    });

    const submitHandler = (data: any) => {
        if (!isValid) return;
        console.log(data)
        editPost({
            ...data,
            title: data.title,
            text: data.text,
        });
        navigate('/posts');

    }

    return (<>
        {isLoggedIn || <Navigate to='/login' />}
        {isLoggedIn && <div>
            <Typography variant="h5">Make something wonderful!</Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Title"
                    variant="outlined"
                    error={touchedFields.title && errors.title}
                    {...register('title', {
                        required : true,
                        minLength : 10,
                    })}
                    defaultValue={data?.title}
                />
                <br />
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Text body"
                    variant="outlined"
                    multiline
                    rows={10}
                    error={touchedFields.text && errors.text}
                    {...register('text', {
                        required : true,
                        minLength : 10,
                    })}
                    defaultValue={data?.text}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    save
                </Button>
            </form>
        </div>}
        </>
    );
}

export default PostEdit;
