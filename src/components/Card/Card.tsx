import React from 'react';
import { NasaApodItem } from '../../App'
import classes from './Card.module.scss'

interface CardProps { 
  url: string
  title: string
  date: string;
  explanation: string;
}

export const Card: React.FC<CardProps> = ({ url, title, date, explanation }) => {
  return ( 
    <div className={classes.card}>
      <img className={classes.image} src={url}/>
      <h2 className={classes.title}>
        {title}
      </h2>
      <h3 className={classes.date}>
        {date}
      </h3>
      <p className={classes.explanation}>
        {explanation}
      </p>
      <button className={classes.button}>
        Like
      </button>
    </div>
  )
}
