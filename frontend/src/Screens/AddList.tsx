import '../Styles/main.css'
import { Button } from '../Components/Components'
import { useFetch } from '../Hooks/useFetch'

function Hour(time: number){
  var hour = time/60;
  return hour
}

interface AdProps{
  id: number,
  player: {
    id: number,
    name: string,
    discord: string,
    rating: number,
    yearsPlaying: number
  },
  game: {
    id: number,
    name: string
  },
  hourStart: number,
  hourEnd: number,
  voiceChat: boolean,  
}

function modalConect(props: AdProps){
  return (
    <div className="flex items-center justify-center ">
      <h1>Conexão criada.</h1>
      {
        
      }
      <span>Entre com contato com o seu duo através do discord:</span>
    </div>
  )
}

function AddList(){
  const {data: ads, isFetching} = useFetch<AdProps[]>('/ads/1/all')

  return(
    <div className="text-white flex flex-col items-center justify-center h-screen gap-6 " >
      <h1>{ads?.length} Anuncios encontrados</h1>
      <div className=" w-screen flex h-3/5 gap-6 items-center justify-center">
        {
          ads?.map(ad => {
            return(
              <div key={ad.id}
              className="bg-slate-500 flex flex-col gap-6 items-center justify-center w-80 h-96 rounded-lg ">

                <h1 className="font-black text-3xl">{ad.player.name}</h1>
                <span>Hora de início: {Hour(ad.hourStart)}</span>
                <span>Hora do fim: {Hour(ad.hourEnd)}</span>
                <span>Jogando à {ad.player.yearsPlaying} anos</span>
                <span>Chat de voz: {ad.voiceChat? "Sim":"Não"}</span>
                <span>Classificação: {ad.player.rating}</span>
                <Button content="Conectar" type="submit"/>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default AddList;
