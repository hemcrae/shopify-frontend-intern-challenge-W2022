import React, { useState } from 'react';
import classes from './Card.module.scss'


interface CardProps { 
  url: string
  title: string
  date: string;
  explanation: string;
}

export const Card: React.FC<CardProps> = ({ url, title, date, explanation }) => {

  const [showElement, setShowElement] = useState(false);
  
  return ( 
    <article className={classes.card}>
      <img className={classes.image} src={url} alt="Astronomy Picture of the Day"/>
      <header className={classes.heading}>
        <h2 className={classes.title}>
          {title}
        </h2>
        <time className={classes.date}>
          {date}
        </time>
      </header>
        <p className={`${classes.explanation} ${showElement ? classes.showExplanation : ''}`}>
          {explanation}
        </p>
      <footer className={classes.footer}>
        <button className={classes.expandButton} onClick={() => setShowElement(!showElement)}>
          Read More
        </button>
        <button className={classes.likeButton}>
          Like
        </button>
      </footer>
    </article>
  )
}
