import '../Styles/main.css'
import { Button } from '../Components/Components'
import { useFetch } from '../Hooks/useFetch'

interface AdProps{
  player_id: number,
  hourStart: number,
  hourEnd: number,
  yearsPlaying: number,
  voiceChat: boolean,
  discord: string,  
}

function modalConect(props: AdProps){
  return (
    <div>
      <h1>Conexão criada.</h1>
      <span>Entre com contato com o seu duo através do discord:</span>
      <input type="hidden" placeholder={props.discord} />
    </div>
  )
}

function AddList(){
  const {data: ads, isFetching} = useFetch<AdProps[]>('/ads/all')

  return(
    <div className="text-white flex items-center justify-center h-screen gap-6 " >
      {
        ads?.map(ad => {
          return(
            <div key={ad.player_id}
            className="bg-slate-500 flex flex-col gap-6 items-center justify-center w-1/5 h-2/5 rounded-lg ">
              <span>{ad.player_id}</span>
              <span>dias jogados teste</span>
              <span>{ad.hourStart}</span>
              <span>{ad.hourEnd}</span>
              <span>{ad.yearsPlaying}</span>
              <span>{ad.voiceChat}</span>
              <Button content="Conectar" type="submit"/>
            </div>
          )
        })
      }
    </div>
  )
}

export default AddList;
