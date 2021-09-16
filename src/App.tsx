import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios';
import classes from './App.module.scss'
import { Card } from './components/Card/Card';
export interface NasaApodItem {
  copyright: string;
  date: string;
  explanation: string;
  hdurl: string;
  media_type: string;
  service_version: string;
  title: string;
  url: string;
}

export const App: React.FC = ({

}) => {

  const key: string = import.meta.env.VITE_NASA_API_KEY as string;

  const ApiUrl = `https://api.nasa.gov/planetary/apod`

  const [apod, setApod] = useState<NasaApodItem[]>([])

  if (key === undefined) {
    throw new Error("No NASA API key defined")
  }

  useEffect(() => {
    axios.get<NasaApodItem[]>(`${ApiUrl}`, {
      params: {
        api_key: key,
        start_date: "2021-09-1",
      }
    })
    .then((res) => (setApod(res.data))
  )}, [])

  return (
    <>
      <h1 className={classes.heading}>Spacestagram</h1>
      <div className={classes.cards}>
        {apod.map(({ url, title, explanation, date }) => (
          <Card url={url} key={url} title={title} explanation={explanation} date={date}/>
        ))}
      </div>
    </>
  )
}



