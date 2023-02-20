import '../Styles/main.css'
import { Button } from '../Components/Components'

interface AdProps{
  name: string,
  hourStart: Date,
  hourEnd: Date,
  yearsPlaying: BigInt,
  voiceChat: Boolean,
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

function AddList(props: AdProps){
  return(
    <div className="text-white flex items-center justify-center h-screen gap-6 " >
      <div 
      className="bg-slate-500 flex flex-col gap-6 items-center justify-center w-1/5 h-2/5 rounded-lg ">
        <span>nome teste</span>
        <span>dias jogados teste</span>
        <span>hora inicio teste</span>
        <span>hora fim teste</span>
        <span>anos jogados teste</span>
        <span>voice chat teste</span>
        <Button content="Conectar" type="submit"/>
      </div>
    </div>
  )
}

export default AddList;
