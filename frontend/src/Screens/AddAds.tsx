import { useEffect, useState } from 'react';
import '../Styles/main.css'

type Games = {
  name: string;
  bannerUrl: string;
}

function AddAds(){

  const [games, setGames] = useState<Games[]>([])

  useEffect(() => {
    fetch('http://localhost:8080/games/all')
    .then((resp) => resp.json())
    .then((data) => {
      setGames(data)
    })
    .catch((err) => console.log(err))
  },[])

  return (
    <div className="text-white">
      <ul >
        {games.map(repo => {
          return (
            <li key={repo.name}>
              <strong>{repo.name}</strong>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default AddAds;