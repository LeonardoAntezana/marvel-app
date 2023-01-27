import { useCallApi } from '../../hooks/useCallApi';
import { useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Button from '../../components/Button/Button';
import styles from './styles/Home.module.scss';
import Loader from '../../components/Loader/Loader';

const Home = () => {
  const [navigation, setNavigation] = useState(0)
  const BASE_URL =  `http://gateway.marvel.com/v1/public/characters?limit=20&offset=${navigation}&ts=1&apikey=4442ef4e3aae679fff0e2f6e19e96be8&hash=32bfa31ec597ede355ace93746fefec1`
  const {data: characters, setAxiosData} = useCallApi(BASE_URL)

  const nextPage = () => { 
    setNavigation(state => state + 20)
    setAxiosData(BASE_URL)
  }

  const prevPage = () => {
    if(navigation - 20 >= 0){
      setNavigation(state => state - 20)
      setAxiosData(BASE_URL)
    }
  }

  if(characters.length === 0){
    return <Loader/>
  }
  return (
    <div className={styles.home}>
      <input className={styles.search} type="text" placeholder='Search'/>
      <div className={styles.container__pagination}>
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
      </div>
      <div className={styles.container__characters}>
        {characters.map(item => <CharacterCard key={item.id} item={item}/>)}
      </div>
      <div className={styles.container__pagination}>
        <Button onClick={prevPage}>Prev</Button>
        <Button onClick={nextPage}>Next</Button>
      </div>
    </div>
)};

export default Home;
