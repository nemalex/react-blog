import { Link } from 'react-router-dom';
import classes from './Header.module.css'

const Header = () => {
    return <>
        <Link to='/' className={classes.link} >Home</Link>
        <Link to='/posts' className={classes.link} >Posts</Link>
        <Link to='/newpost' className={classes.link} >New Post</Link>
        <Link to='/admin' className={classes.link} >Admin</Link>
    </>
}

export default Header;