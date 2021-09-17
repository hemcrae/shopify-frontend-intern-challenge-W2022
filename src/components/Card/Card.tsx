import React, { useCallback, useEffect, useState } from 'react';
import classes from './Card.module.scss'



interface CardProps { 
  url: string
  title: string
  date: string;
  explanation: string;
}

export const Card: React.FC<CardProps> = ({ url, title, date, explanation }) => {

  const [showElement, setShowElement] = useState(false);
  const [liked, setLiked] = useState(false);
  const onLike = useCallback(() => {
    setLiked(!liked)
    const localStorageLikes = localStorage.getItem('likes') || '{}'
    const likesObj = JSON.parse(localStorageLikes)
    localStorage.setItem('likes', JSON.stringify({...likesObj, [url]: !liked}))
  }, [liked])

  useEffect(() => {
    const localStorageLikes = localStorage.getItem('likes')
    if (!localStorageLikes) { 
      return
    }
    const likesObj = JSON.parse(localStorageLikes)
    if (typeof likesObj[url] !== 'undefined') {
      setLiked(likesObj[url])
    }
  }, [])
  
  
  return ( 
    <article className={classes.card}>
      <div className={classes.image}>
        <img className={classes.cardImage} src={url} alt="Astronomy Picture of the Day"/>
      </div>
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
        <button className={`${classes.likeButton} ${liked ? classes.likeButtonActive : ''}`} onClick={onLike}>
          Like
        </button>
      </footer>
    </article>
  )
}
