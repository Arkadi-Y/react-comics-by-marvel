import React, { useState,useEffect }  from 'react';
import CardItem from './CardItem';
import "./Card.css";
import  Carousel from 'react-elastic-carousel';

const ItemCarousel = (props) => {
    const [items,setItems]=useState(props.items)

    const breakPoints = [
        { width : 400, itemsToShow : 2},
        { width : 500, itemsToShow : 3},
        { width : 768, itemsToShow : 4},
        { width : 1200, itemsToShow : 5},
        { width : 1500, itemsToShow : 6}];
    return (
        <div>
              <Carousel breakPoints={breakPoints}>
                     {items.map((item)=>{
                         return  item ?(
                         <CardItem
                         key={item.id}
                         comic = {item}
                         />
                         ):
                         (console.log("null"))
                     })}
                     </Carousel>
        </div>
    )
}

export default ItemCarousel




  