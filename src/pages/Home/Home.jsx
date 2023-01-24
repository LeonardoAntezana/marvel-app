import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import styles from './styles/Home.module.scss';

const Home = () => {
  const [characters, setCharacters] = useState([])
  const url = 'http://gateway.marvel.com/v1/public/characters?ts=1&apikey=4442ef4e3aae679fff0e2f6e19e96be8&hash=32bfa31ec597ede355ace93746fefec1'
  useEffect(() => {
    const getData = async () => {
      let data = await axios.get(url)
      setCharacters(data.data.data.results)
    }
    getData()
  } , [])
  
	return (
    <div className={styles.home}>
      <h1>PERSONAJES</h1>
      <div className={styles.container__characters}>
        {characters.length !== 0 && characters.map(item => <CharacterCard key={item.id} item={item}/>)}
      </div>
    </div>
)};

export default Home;
