import { useCallApi } from '../../hooks/useCallApi';
import { useState } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Button from '../../components/Button/Button';
import styles from './styles/Home.module.scss';
import Loader from '../../components/Loader/Loader';
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const Home = () => {
  const [navigation, setNavigation] = useState(0)
  const [valueSearch, setValueSearch] = useState('')
  const BASE_URL =  `http://gateway.marvel.com/v1/public/characters?${valueSearch ? `nameStartsWith=${valueSearch}&`: ''}limit=20&offset=${navigation}&ts=1&apikey=4442ef4e3aae679fff0e2f6e19e96be8&hash=32bfa31ec597ede355ace93746fefec1`
  const {data: characters, setAxiosData} = useCallApi(BASE_URL)

  const nextPage = () => { 
    if(characters.length === 20){
      setNavigation(state => state + 20)
      setAxiosData()
    }
    
  }

  const prevPage = () => {
    if(navigation - 20 >= 0){
      setNavigation(state => state - 20)
      setAxiosData()
    }
  } 

  if(characters.length === 0){
    return <Loader/>
  }
  return (
    <div className={styles.home}>
      <Link className={styles.link__favorites} to='/favorites'><BsFillStarFill size={40}/></Link>
      <div className={styles.container__search}>
        <input className={styles.search} value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} type="text" placeholder='Search'/>
        {valueSearch && <BiSearchAlt2 size={25} cursor='pointer'/>}
      </div>
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
