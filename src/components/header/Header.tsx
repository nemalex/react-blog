import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css'
import { AppBar, Button, Box, Card, Toolbar, Stack, Paper} from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';

interface ItemWrapperProps {
    to: string,
    children: React.ReactNode
    selected: boolean
}

interface LoginButtonProps {
    isLoggedIn: boolean,
    logout: () => void,
}

const ItemWrapper = ({ to, children, selected }: ItemWrapperProps) => {
    // TODO button not getting colored by selected
    return <Link to={to} className={classes.link}>
        <Button variant='contained' className={selected ? classes.selected : ''}>
            {children}
        </Button>
    </Link>
}

const LoginButton = ({ isLoggedIn, logout }: LoginButtonProps) => {
    return <>{ isLoggedIn && 
        <Button variant='contained' onClick={logout}>
            Logout
        </Button> 
        }
    
        {isLoggedIn ||
        <ItemWrapper
            to='/login' selected={false}                            >
            Login
        </ItemWrapper> }
    </>
}

const Header = () => {
    const location = useLocation();
	const isLoggedIn = useSelector((state: {auth: {loggedIn: boolean}}) => state.auth.loggedIn);
	const dispatch = useDispatch();

	const logout = () => {
		dispatch(authActions.logout())
	}

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Stack
                        direction='row'
                        spacing={ 3 }
                        className={classes.links}
                    >
                        <ItemWrapper
                            to='/'
                            selected={'/' === location.pathname}
                        >
                            Home
                        </ItemWrapper>
                        <ItemWrapper
                            to='/posts'
                            selected={'/posts' === location.pathname}
                        >
                            Posts
                        </ItemWrapper>
                        <ItemWrapper
                            to='/newpost'
                            selected={'/newpost' === location.pathname}
                        >
                            New Post
                        </ItemWrapper>
                        <LoginButton isLoggedIn={isLoggedIn} logout={logout} />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;