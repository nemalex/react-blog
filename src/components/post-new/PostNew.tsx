import { Typography, TextField, Button } from "@mui/material";
import { Navigate, useNavigate } from "react-router-dom";
import { usePostPostMutation } from "../../store/posts-api";
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';

const PostNew = () => {
    const [postPost] = usePostPostMutation();
    const isLoggedIn = useSelector((state: { auth: { loggedIn: boolean } }) => state.auth.loggedIn);
    const navigate = useNavigate();

    const {
        handleSubmit,
        register,
        formState: {
            touchedFields,
            errors,
            isValid,
        },
    } = useForm({
        reValidateMode: 'onChange',
        mode: 'onBlur',
    });

    const submitHandler = (data: { [x: string]: any; }) => {
        if (!isValid) return;
        postPost({
            ...data,
            title: data.title,
            text: data.text,
            date: new Date(),
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
                    error={!!(touchedFields.title && errors.title)}
                    {...register('title', {
                        required: true,
                        minLength: 3,
                    })}
                    helperText={
                        (errors.title?.type === "required" && ("You must enter a title")) ||
                        (errors.title?.type === "minLength" && ("The title must be at least 3 characters")) ||
                        ""}
                />
                <br />
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Text body"
                    variant="outlined"
                    multiline
                    rows={10}
                    error={!!(touchedFields.text && errors.text)}
                    {...register('text', {
                        required: true,
                        minLength: 10,
                    })}
                    helperText={
                        (errors.text?.type === "required" && ("You must enter a text body")) ||
                        (errors.text?.type === "minLength" && ("The body must be at least 10 characters")) ||
                        ""}
                />
                <br />
                <Button
                    type="submit"
                    variant="contained" color="primary"
                >
                    Save
                </Button>
            </form>
        </div>}
    </>);
}

export default PostNew;