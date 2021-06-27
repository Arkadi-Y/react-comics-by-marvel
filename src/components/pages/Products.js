import React from 'react';
import '../../App.css';
import {useState, useEffect } from 'react';
import getMarvelBaseAuth from '../../api/marvelAPI';
import Card from '../Card';
import axios from 'axios';



const Products = () => {
    const [searchValue,setSearchValue]=useState('spider-man');
    const[heros,setHeros]=useState([]);
    const [comicData,setComicData]=useState([]);
    const [Loading,setLoading]=useState(false);
    const base = getMarvelBaseAuth();
       useEffect(()=>{
        setComicData([])
        const timeOutId = setTimeout(() => fetchItem(), 1000);
        return () => clearTimeout(timeOutId);
    },[searchValue]);
        const fetchItem = async ()=>{
                if(searchValue){
                setHeros([])
                await axios.get(`https://gateway.marvel.com:443/v1/public/characters?nameStartsWith=${searchValue}&limit=100&${base}`)
                .then((item)=>{
                    setHeros(item.data.data.results);
                })
                }else{console.log("no search value")}
        }

        return (
            Loading ? (<>
                <h1>loading...</h1>
                </>):(
                <>
                 <div class="searchBoxcontainer text-center" id="searchBox">
                    <div class="form col-xs-12">   
                          <input class="col-xs-12" id="searchBar" type="text" placeholder="Spider-man" onChange={e=>{setSearchValue(e.target.value)}}/>
                     </div>

                 </div>
                <div className="">
                    <div className = "cards_container">
                     <div className = "cards_wrapper">
                             {heros.map((hero)=>{
                                if(hero.comics.available>1){
                                        return (
                                        <>
                                        <h2>{hero.name}</h2>                    
                                    <Card
                                                urlProp={`https://gateway.marvel.com:443/v1/public/characters/${hero.id}/comics?format=comic&formatType=comic&noVariants=true&orderBy=-issueNumber&${base}`}
                                                hero={hero}/>
                                        </>
                                                )
                                         }
                        })}
                       
                     </div>
        
                    </div>
                </div>
                </>)
            
        )
}

export default Products
