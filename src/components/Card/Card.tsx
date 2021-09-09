import React from 'react';
import { NasaApodItem } from '../../App'
import classes from './Card.module.scss'

interface CardProps { 
  items: NasaApodItem[]
}

export const Card: React.FC<CardProps> = () => {
  return ( 
    <div className={classes.card}>
      <image className={classes.image}>

      </image>
    </div>
  )
}
