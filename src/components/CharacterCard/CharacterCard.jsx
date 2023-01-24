import { Link } from 'react-router-dom';
import styles from './styles/CharacterCard.module.scss';

const CharacterCard = ({ item }) => {
  const {id, name, thumbnail} = item;
	return (
		<Link to={`/character/${id}`} className={styles.charactercard} style={{backgroundImage: `linear-gradient(rgb(211 198 198 / 60%), rgba(0, 0, 0, 0.6)), url(${thumbnail.path}.${thumbnail.extension})`}}>
      <h3 className={styles.titleCard}>{name}</h3>
    </Link>
	)}
;

export default CharacterCard;
