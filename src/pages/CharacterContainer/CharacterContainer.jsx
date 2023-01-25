import axios from 'axios';
import styles from './styles/CharacterContainer.module.scss';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import CharacterDetail from '../../components/CharacterDetail/CharacterDetail';

const CharacterContainer = () => {
  const {idCharacter} = useParams()
  const [hero, setHero] = useState('')
  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(`http://gateway.marvel.com/v1/public/characters/${idCharacter}?ts=1&apikey=4442ef4e3aae679fff0e2f6e19e96be8&hash=32bfa31ec597ede355ace93746fefec1`)
      setHero(data.data.data.results[0])
    }
    getData()
  }, [])
	return (
		<div className={styles.charactercontainer}>
      {hero && <CharacterDetail character={hero}/>}
    </div>
	)
};

export default CharacterContainer;
