import { useCallApi } from '../../hooks/useCallApi';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';
import styles from './styles/CharacterContainer.module.scss';

const CharacterContainer = () => {
  const {idCharacter} = useParams()
  const {data: hero} = useCallApi(`http://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=1&apikey=4442ef4e3aae679fff0e2f6e19e96be8&hash=32bfa31ec597ede355ace93746fefec1`)
	return (
		<div className={styles.charactercontainer}>
      {hero && <CharacterDetail character={hero[0]}/>}
    </div>
	)
};

export default CharacterContainer;
