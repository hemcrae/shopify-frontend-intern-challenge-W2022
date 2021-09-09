import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css'
interface NasaResponse {
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

  const [apod, setApod] = useState({})

  if (key === undefined) {
    throw new Error("No NASA API key defined")
  }

  useEffect(() => {
    axios.get<NasaResponse>(`${ApiUrl}`, {
      params: {
        api_key: key 
      }
    })
    .then((data) => (setApod(data.data))
  )}, [])

  return (
    <>
      <h1>Spacestagram</h1>
    </>
  )
}



