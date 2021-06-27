import React from 'react';
import { Link } from 'react-router-dom';

const HeroItem = (props) => {
    function parseDate(date){
        return date.slice(0,10)
    }
    return (
        <>
            <li className="cards_item">
                <Link className="cards_item_link" to={`/HeroPage/${props.id}`}>
                    <figure className="cards_item_pic-wrap">
                        <img src={props.comic.images ? (props.thumbnail.path+".jpg"):("/")} alt="Comic Image"className="cards_item_img"/>
                    </figure>
                    <div className="cards_item_info">
                        <h4 className= "cards_item_text">{props.name}</h4>
                        <h5 >{props.comic.description?(props.comic.description):("no discription available")}</h5>
                    </div>
                </Link>
            </li>
        </>
    )
}

export default HeroItem
