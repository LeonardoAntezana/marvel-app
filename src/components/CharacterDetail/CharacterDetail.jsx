import styles from './styles/CharacterDetail.module.scss';
import { BsFillStarFill } from 'react-icons/bs'
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, deleteFavorite} from '../../redux/states/favortesSlice';

const CharacterDetail = ({ character }) => {
  const {id, name, description, thumbnail, comics} = character
  const state = useSelector((state) => state.favorites)
  const dispatch = useDispatch()

  const findCharacterInFavorites = characterId => state.find(chr => chr.id === characterId)
	
  return (
		<div className={styles.characterdetail}>
      <div className={styles.container__image}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`image-${name}`}/>
        <BsFillStarFill 
        className={findCharacterInFavorites(id) ? styles.star__fav : styles.star}
        size={40}
        onClick={() => findCharacterInFavorites(id) === undefined ? dispatch(addFavorite(character)) : dispatch(deleteFavorite(id))}/>
      </div>
      <div className={styles.infoHero}>
        <p className={styles.name}>{name}</p>
        <p className={styles.description}>{description ? description : 'No description for now'}</p>
        <p><span>Appearances in comics:</span> {comics.available}</p>
        {comics.items.length !== 0 && 
        <>
          <p><span>Most recents appearances: </span></p>
          <ul>
            {comics.items.slice(0,3).map((comic, index) => <li key={index}>{comic.name}</li>)}
          </ul>
        </>
        }
      </div>
    </div>
	)
};

export default CharacterDetail;
