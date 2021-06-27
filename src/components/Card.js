import React, { useState,useEffect }  from 'react';
import CardItem from './CardItem';
import "./Card.css";
import  Carousel from 'react-elastic-carousel';
import ItemCarousel from './ItemCarousel';
import useComicSearch from '../api/useComicSearch';

function Card(props) {
    const [url,setUrl]=useState(props.urlProp);
    const [comics,setComic]=useState([]);
    const [isLoading,setIsLoading]=useState(true);

    useEffect(()=>{
        async function getComics(){
            fetch(url).then(res=>{return res.json();})
            .then((res)=>{
                    setComic(res.data.results)
                }).then(()=>{
                setIsLoading(false);
                }
            )
        }
        getComics();

    },[]);
    return (
        isLoading ? (<h1>loading...</h1>):(
        <div className="cards ">
            <div className = "">
             <div className = "row main-row">
                 <ul className="container-fluid justify-content-center align-items-center">
                    <ItemCarousel className="Carousel" items={comics}></ItemCarousel>
                 </ul>
             </div>

            </div>
        </div>)
    )
}

export default Card
