import React from 'react';
import classes from './Card.module.scss'

interface CardProps { 
  url: string
  title: string
  date: string;
  explanation: string;
}

export const Card: React.FC<CardProps> = ({ url, title, date, explanation }) => {
  return ( 
    <article className={classes.card}>
      <img className={classes.image} src={url} alt="Astronomy Picture of the Day"/>
      <div className={classes.content}>
        <div className={classes.heading}>
          <h2 className={classes.title}>
            {title}
          </h2>
          <time className={classes.date}>
            {date}
          </time>
        </div>
        <p className={classes.explanation}>
          {explanation}
        </p>
        <button className={classes.button}>
          Like
        </button>
      </div>
    </article>
  )
}
