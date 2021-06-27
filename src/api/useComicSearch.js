import React,{useEffect,useState} from 'react'
import axios from 'axios'
import md5 from 'md5';
import getMarvelBaseAuth from './marvelAPI';



export default function useComicSearch (characterId,offset){
    const [comicData,setComicData]=useState([]);
    const [Loading,setLoading]=useState(true);
    const [auth,setAuth] = useState(getMarvelBaseAuth());
    const [hasMore,setHasMore]=useState(false);

    useEffect(()=>{
    setLoading(true);
    axios.get(`https://gateway.marvel.com:443/v1/public/characters/${characterId}/comics?formatType=comic&noVariants=true&limit=6&offset=${offset}&${auth}`)
    .then(res=>{setComicData(comicData =>{
        console.log(res);
        console.log(comicData+"prev comic");
        return ([...comicData,...res.data.data.results])
 })
    setHasMore(res.data.data.results.length>0)
    setLoading(false)
})
    .catch(e=>{console.log(e)
    return})
},[characterId,offset])


    return {Loading,comicData,hasMore}

}
