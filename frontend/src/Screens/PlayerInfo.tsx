import { useFetch } from '../Hooks/useFetch';
import '../Styles/main.css'

interface Player {
  id: number,
  name: string,
  yearsPlaying: number,
  discord: string,
}


function PlayerInfo(){
  // const {data: player, isFetching } = useFetch<Player>("/player/new");

  return (
    <div className="text-white h-screen flex items-center justify-center">
      
      <div className="flex flex-col gap-6 items-center justify-center bg-slate-500 h-96 w-96 rounded-lg">
        <h1 className="font-black text-2xl">Próximo passo:</h1>
        <span>Preencha as suas informações</span>
        <input 
        className="h-12 w-4/5 p-5 rounded-lg"
        type="text" name="playerName" id="#playerName" placeholder="Nome completo" />
        <input 
        className="h-12 w-4/5 p-5 rounded-lg"
        type="number" name="yearsPlaying" id="#yearsPlaying" placeholder="Há quanto tempo você joga?" />
        <input 
        className="h-12 w-4/5 p-5 rounded-lg"
        type="text" name="discord" id="#discord" placeholder="Discord" />
        <button
        className=" bg-black w-4/5 h-9 rounded-lg font-black text-lg"
        >Confirmar</button>
      </div>
      
    </div>
  )
}

export default PlayerInfo;