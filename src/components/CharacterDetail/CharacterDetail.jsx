import styles from './styles/CharacterDetail.module.scss';

const CharacterDetail = ({ character }) => {
  const {name, description, thumbnail, comics} = character
	return (
		<div className={styles.characterdetail}>
      <div className={styles.container__image}>
        <img src={`${thumbnail.path}.${thumbnail.extension}`} alt={`image-${name}`}/>
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
