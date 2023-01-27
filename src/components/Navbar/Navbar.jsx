import { Link } from 'react-router-dom';
import styles from './styles/Navbar.module.scss';

const Navbar = () => {
	return <div className={styles.navbar}><Link to='/'>MARVEL</Link></div >;
};

export default Navbar;
