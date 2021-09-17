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

export const App: React.FC = () => {

  const key: string = import.meta.env.VITE_NASA_API_KEY as string;

  const ApiUrl = `https://api.nasa.gov/planetary/apod`

  const [apod, setApod] = useState<NasaApodItem[]>([])

  const [selectedDate, setSelectedDate] = useState('2021-09-01');

  if (key === undefined) {
    throw new Error("No NASA API key defined")
  }

  const onChange = useCallback((e: any) => {
    e.preventDefault();
    setSelectedDate(e?.target?.value)
  },[selectedDate])

  useEffect(() => {
    axios.get<NasaApodItem[]>(ApiUrl, {
      params: {
        api_key: key,
        start_date: selectedDate
      }
    })
    .then((res) => (setApod(res.data))
  )}, [selectedDate])

  return (
    <div className={classes.container}>
      <header className={classes.header}>
        <h1 className={classes.heading}>Spacestagram</h1>
      </header>
      <main className={classes.main}>
        <input className={classes.input} type="date" min="1995-06-16" value={selectedDate} onChange={(e) => onChange(e)} />
        <div className={classes.cards}>
          {apod.map(({ url, title, explanation, date }) => (
            <Card url={url} key={url} title={title} explanation={explanation} date={date}/>
          ))}
        </div>
      </main>
    </div>
  )
}



