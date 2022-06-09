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
        formState : {
            touchedFields,
            errors,
            isValid,
        },
    } = useForm({
        reValidateMode : 'onChange',
        mode : 'onBlur',
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
                    error={touchedFields.username && errors.username}
                    {...register('username', {
                        required : true,
                        min : 3,
                    })}
                />
                <br />
                <TextField
                    style={{ width: "100%", margin: "5px" }}
                    type="password"
                    label="Password"
                    variant="outlined"
                    error={touchedFields.password && errors.password}
                    {...register('password', {
                        required : true,
                        min : 6,
                    })}
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