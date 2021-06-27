import React,{useState} from 'react';
import { Link } from 'react-router-dom';

const CardItem = (props) => {
    const [comics, setComic] = useState(props.comic);
    return (
        <>
            <li className="card text-center bg-dark justify-content-center">
                <div className="card-container">
                <div className="card-img-wrapper">
                    <img className="card-img card-img-top " src={comics.thumbnail ? (comics.thumbnail.path+".jpg"):(comics.images[0].path+"/portrait_fantastic.jpg")} alt="Comic Image" className="cards_item_img"/>
                 </div>
                    <div className="card-body justify-content-center">
                        <a className="card-link" href={comics.urls[0].url} target="_blank">
                            <h5 className= "card-title text-light">{comics.title?(comics.title):("no title available")}</h5>                  
                            </a> 
                        <p className= "comic-text text-secondary">{comics.description?(comics.description):("no discription available")}</p>
                    </div>
                    </div>
            </li>
        </>
    )
}

export default CardItem
