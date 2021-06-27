import React from 'react'
import Button from './Button';
import './comicSection.css';
import '../App.css';

const ComicSection = () => {
    return (
        <div className="comic-container">
            <video src='/video/marvelsIntro.mp4' autoPlay loop muted/>
            <h1>What Are You Waiting For?</h1>
        </div>
    )
}

export default ComicSection
