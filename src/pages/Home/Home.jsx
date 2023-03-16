import { useCallApi } from '../../hooks/useCallApi';
import { useState, useRef } from 'react';
import CharacterCard from '../../components/CharacterCard/CharacterCard';
import Button from '../../components/Button/Button';
import styles from './styles/Home.module.scss';
import Loader from '../../components/Loader/Loader';
import { BiSearchAlt2 } from 'react-icons/bi'
import { BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom';

const BASE_URL = 'https://gateway.marvel.com/v1/public/characters?'
const KEYS = '&ts=1&apikey=4442ef4e3aae679fff0e2f6e19e96be8&hash=32bfa31ec597ede355ace93746fefec1'

const Home = () => {
  const [valueSearch, setValueSearch] = useState('')
  const navigation = useRef(0)
  const [url, setUrl] = useState(`${BASE_URL}${KEYS}`)
  const {data: characters, isPending} = useCallApi(url)

  const nextPage = () => {
      navigation.current = navigation.current + 20
      setUrl(`${BASE_URL}limit=20&offset=${navigation.current}${KEYS}`)
  }

  const prevPage = () => {
    if(navigation - 20 >= 0){
      navigation.current = navigation.current - 20
      setUrl(`${BASE_URL}limit=20&offset=${navigation.current}${KEYS}`)
    }
  }

  const searchCharacter = () => {
    setUrl(`${BASE_URL}nameStartsWith=${valueSearch}&limit=20&offset=0&${KEYS}`)
  }

  if(isPending){
    return <Loader/>
  }
  return (
    <div className={styles.home}>
      <Link className={styles.link__favorites} to='/favorites'><BsFillStarFill size={40}/></Link>
      <div className={styles.container__search}>
        <input className={styles.search} value={valueSearch} onChange={(e) => setValueSearch(e.target.value)} type="search" placeholder='Search' maxLength={16}/>
        {valueSearch && 
        <BiSearchAlt2 
        size={25} 
        color='#fff' 
        cursor='pointer'
        onClick={searchCharacter}
        />}
      </div>
      {characters.length === 0 
      ? <div className={styles.noCharacters}>
          <p className={styles.noCharacters__p}>Character not found</p>
          <button onClick={() => setUrl(`${BASE_URL}${LIMITS}${KEYS}`)}>Volver al inicio</button>
        </div>
      :
      <>
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
      </>}
    </div>
)};

export default Home;
