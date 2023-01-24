import styles from './styles/CharacterDetail.module.scss';

const CharacterDetail = ({ character }) => {
  const {id, name, description, thumbnail} = character
	return (
		<div className={styles.characterdetail}>
      CharacterDetail
    </div>
	)
};

export default CharacterDetail;
