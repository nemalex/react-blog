import { Typography, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useForm } from 'react-hook-form';
import { useDispatch } from "react-redux";
import { authActions } from "../../store/auth-slice";

const Login = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

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

    const submitHandler = () => {
        if (!isValid) return;
        dispatch(authActions.login())
        navigate('/posts');

    }

    return (
        <div>
            <Typography variant="h5">Login</Typography>
            <form onSubmit={handleSubmit(submitHandler)}>
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="text"
                    label="Username"
                    variant="outlined"
                    {...register('username', {
                        required: true,
                        minLength: 3,
                    })}
                    error={!!(touchedFields.username && errors.username)}
                    helperText={
                        (errors.username?.type === "required" && ("You must enter your username")) ||
                        (errors.username?.type === "minLength" && ("Your username must be at least 3 characters")) ||
                        ""}
                />
                <br />
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    {...register('password', {
                        required: true,
                        minLength: 6,
                    })}
                    error={!!(touchedFields.password && errors.password)}
                    helperText={
                        (errors.password?.type === "required" && ("You must enter your password")) ||
                        (errors.password?.type === "minLength" && ("Your password must be at least 6 characters")) ||
                        ""}
                />
                <br />
                <Button type="submit" variant="contained" color="primary">
                    Login
                </Button>
            </form>
        </div>
    );
}

export default Login;