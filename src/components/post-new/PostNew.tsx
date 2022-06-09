import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { usePostPostMutation } from "../../store/posts-api";
import { useForm } from 'react-hook-form';

const PostNew = () => {
    const [postPost] = usePostPostMutation();
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

    const submitHandler = (data: { [x: string]: any; }) => {
        if (!isValid) return;
        console.log(data)
        postPost({
            ...data,
            title: data.title,
            text: data.text,
            date: new Date()
        });
        navigate('/posts');

    }

    return (
        <div>
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
                        min : 10,
                    })}
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
                        min : 10,
                    })}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    save
                </Button>
            </form>
        </div>
    );
}

export default PostNew;
