import { useLocation, NavLink } from 'react-router-dom';
import classes from './Header.module.css'
import { AppBar, Button, Box, Toolbar, Stack } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux';
import { authActions } from '../../store/auth-slice';
import { searchActions } from '../../store/search-slice';

interface ItemWrapperProps {
    to: string,
    children: React.ReactNode
    selected: boolean
}

interface LoginButtonProps {
    isLoggedIn: boolean,
    selected: boolean,
    logout: () => void,
}

const ItemWrapper = ({ to, children, selected }: ItemWrapperProps) => {
    // TODO button not getting colored by selected
    return (<NavLink to={to} className={classes.link}>
        <Button variant='contained' className={selected ? classes.selected : ''}>
            {children}
        </Button>
    </NavLink>);
}

const LoginButton = ({ isLoggedIn, selected, logout }: LoginButtonProps) => {
    return (<>
        {isLoggedIn &&
            <Button variant='contained' onClick={logout}>
                Logout
            </Button>}
        {isLoggedIn ||
            <ItemWrapper
                to='/login'
                selected={selected}
            >
                Login
            </ItemWrapper>}
    </>);
}

const Header = () => {
    const location = useLocation();
    const isLoggedIn = useSelector((state: { auth: { loggedIn: boolean } }) => state.auth.loggedIn);
    const dispatch = useDispatch();

    const logout = () => {
        dispatch(authActions.logout());
    }

    const toggle = () => {
        dispatch(searchActions.toggle());
        dispatch(searchActions.setTerm(''));
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Stack
                        direction='row'
                        spacing={3}
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
                        {isLoggedIn && <ItemWrapper
                            to='/newpost'
                            selected={'/newpost' === location.pathname}
                        >
                            New Post
                        </ItemWrapper>}
                        {isLoggedIn || <ItemWrapper
                            to='/feedback'
                            selected={'/feedback' === location.pathname}
                        >
                            Feedback
                        </ItemWrapper>
                        }
                        {'/posts' === location.pathname && <Button
                            variant='contained'
                            onClick={toggle}
                            hidden={'/posts' !== location.pathname}
                        >
                            <SearchIcon />
                        </Button>}
                        <LoginButton
                            isLoggedIn={isLoggedIn}
                            selected={'/login' === location.pathname}
                            logout={logout}
                        />
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;