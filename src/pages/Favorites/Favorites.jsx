import { useSelector } from 'react-redux';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import styles from './styles/Favorites.module.scss';

const Favorites = () => {
  const stateFavorites = useSelector((state) => state.favorites)
	return (
		<div className={styles.favorites}>
			{stateFavorites.length === 0 ? <p>No hay favoritos disponibles</p> : stateFavorites.map(elem => <CharacterCard key={elem.id} item={elem}/>)}
		</div >
)};

export default Favorites;
