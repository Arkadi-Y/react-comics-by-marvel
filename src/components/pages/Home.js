import '../../App.css';
import ComicSection from '../ComicSection';
import Card from '../Card';
import React from 'react';
import {useState, useEffect } from "react";
import md5 from 'md5';
import axios from 'axios';

const Home = (props) => {
    const [url,setUrl]=useState(props.url);
    const [isLoading,setIsLoading]=useState(false)
  
    console.log(url +" home url")
  /* isLoading ? (<h1>loading...</h1>):(
        <div className = {'task'}>
            <h4>{data.activity}</h4>
            <h5>{data.price}</h5>
        </div>*/
    return (
        isLoading ?(<h1>loading...</h1>):(
            
        <div>
            <ComicSection/>
            <h2 className="label">cheack out these new releses</h2>
            <Card 
            urlProp={url} 
            />
        </div>
    )
    )
};

export default Home
