import { Link, useLocation } from 'react-router-dom';
import classes from './Header.module.css'
import { AppBar, Button, Box, Card, Toolbar, Stack, Paper} from '@mui/material';

interface ItemWrapperProps {
    to: string,
    children: React.ReactNode
    selected: boolean
}

const ItemWrapper = ({ to, children, selected }: ItemWrapperProps) => {
    // TODO button not getting colored by selected
    return <Link to={to} className={classes.link}>
        <Button variant='contained' className={selected ? classes.selected : ''}>
            {children}
        </Button>
    </Link>
}

const Header = () => {
    const location = useLocation();

    const links = [
        {
            name: "Home",
            href: "/"
        },
        {
            name: "Posts",
            href: "/posts"
        },
        {
            name: "New Post",
            href: "/newpost"
        },
        {
            name: "Admin",
            href: "/admin"
        }
    ]

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Stack
                        direction='row'
                        spacing={ 3 }
                        className={classes.links}
                    >
                        {
                            links.map(l => (
                                <ItemWrapper
                                    to={ l.href }
                                    selected={l.href === location.pathname}
                                    key={l.href}
                                >
                                    { l.name }
                                </ItemWrapper>
                            ))
                        }
                    </Stack>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default Header;