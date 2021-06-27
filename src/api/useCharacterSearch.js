import React,{useEffect,useState} from 'react'
import axios from 'axios'
import getMarvelBaseAuth from './marvelAPI';

export default function useCharacterSearch (query){
    const [searchValue,setSearchValue]=useState('spider-man');
    const [CharacterArray,setItem]=useState([]);
    const [Loading,setLoading]=useState(true);
    const [auth,setAuth] = useState(getMarvelBaseAuth());
    useEffect(()=>{
    setItem([]);
    axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&limit=100&${auth}`)
    .then((res)=>{setItem(res.data.data.results)
                    setLoading(false)
                console.log(res.data.data.results)})
},[query])
    return {CharacterArray}

}
