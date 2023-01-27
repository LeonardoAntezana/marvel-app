import { RotatingSquare } from 'react-loader-spinner';
import styles from './styles/Loader.module.scss';

const Loader = () => {
	return (
		<div className={styles.loader__container}>
			<RotatingSquare color='#fff' height={200} width={200}/>
		</div>
)};

export default Loader;
