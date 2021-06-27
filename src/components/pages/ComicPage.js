import axios from 'axios';
import React,{useEffect,useState} from 'react'
import getMarvelBaseAuth from '../../api/marvelAPI'
import '../../App.css';



const ComicPage = ({match}) => {
useEffect(()=>{
    fetchItem();
},[]);
const [item,setItem]=useState([]);
const [itemData,setItemData]=useState([]);
const [isLoading,setIsLoading]=useState(true);
const[storyURL,setStoryURL]=useState();
const base = getMarvelBaseAuth();
    const fetchItem = async ()=>{
            const getItem = await fetch(`https://gateway.marvel.com:443/v1/public/comics/${match.params.id}?${base}`)
            .then((APIitem) =>APIitem.json())
            .then((jsonAPIitem)=>{
            setItem(jsonAPIitem)
            setItemData(jsonAPIitem.data.results[0])
            setStoryURL(jsonAPIitem.data.results[0].stories.items[0].resourceURI);
            console.log(jsonAPIitem.data.results[0])
        }).then(()=>{
                setIsLoading(false);
            })
            
            
    }

    
    function parseDate(date){
        return date.slice(0,10)
    }
    return (
        isLoading ? (<h2>loading...</h2>):(
        <div>
            <div className="comic_page_container">
                <div className="comic_container">
                    <div className="comic_head">
                      <h2>{itemData.title}</h2>
                    </div>
                    <div className="comic_date">
                        <h3>{parseDate(itemData.dates[0].date)}</h3>
                    </div>
                    <div className="comic_text">
                        <p>{itemData.description}</p>
                        <p>{itemData.prices[0].price}$</p>
                    </div>
                    <div className="comic_image_container">
                    <img src={itemData.images ? (itemData.thumbnail.path+".jpg"):("/")} alt="Comic Image"className="item_image"/>
                    </div>
                </div>
            </div>
            <h4>{item.copyright}</h4>
            {item.attributionText}
        </div>
    )
    )
}

export default ComicPage
