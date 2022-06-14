import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { usePostFeedbackMutation } from "../../store/feedback-api";

const Feedback = () => {
    const [postFeedback] = usePostFeedbackMutation();
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
        postFeedback({
            ...data,
            subject: data.title,
            text: data.text,
            date: new Date()
        });
        navigate('/posts');
    }

    return (
        <div>
            <Typography variant="h5">Send a message!</Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Subject"
                    variant="outlined"
                    error={touchedFields.subject && errors.subject}
                    {...register('subject', {
                        required : true,
                        minLength : 3,
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
                        minLength : 10,
                    })}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    SEND
                </Button>
            </form>
        </div>
    );
}

export default Feedback;