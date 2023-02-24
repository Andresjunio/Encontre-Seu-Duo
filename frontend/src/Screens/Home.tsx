import { useEffect, useState } from 'react';
import { Title, Button } from '../Components/Components';
import '../Styles/main.css'
import { motion } from 'framer-motion'
import axios from 'axios'
import { useFetch } from '../Hooks/useFetch';
import { Link, useParams } from 'react-router-dom'

type Games = {
  id: number,
  name: string,
  bannerUrl: string
}

function Home(){
  const { data: games, isFetching } = 
    useFetch<Games[]>('/games/all');

  return (
    <div className="h-screen text-white">
      <div className="flex flex-col items-center justify-around  h-4/5 ">
        <img src="/logo-nlw-esports.svg" alt="Logo" className="mt-14"/>
        <Title content="Encontre seu duo"/>
        <div className="flex justify-center gap-16 w-1/3 items-center">
          <h2 className="font-black text-xl">ou, se preferir</h2>
          <Button content="Crie Seu Anuncio" type="submit"/>
        </div>
        <div className="flex justify-around items-center py-5  h-2/5 w-3/5 ">
          { games?.map(repo => {
            return (
              <Link to=""  key={repo.name}>
                <div className="w-52 flex flex-col items-center ">
                  <img src={repo.bannerUrl} alt="" className="rounded-md h-52"/>
                  <span className="font-black mt-2">{repo.name}</span>
                </div>
              </Link>
            )
          })}
        </div>
      </div>

    </div>
  )
}

export default Home;