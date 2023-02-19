import '../Styles/main.css'
import { Button } from '../Components/Components'
interface AddProps{
  
}

function AddList(){
  return(
    <div className="text-white flex flex-col items-center justify-center h-screen gap-6 " >
      <span>nome teste</span>
      <span>dias jogados teste</span>
      <span>hora inicio teste</span>
      <span>hora fim teste</span>
      <span>anos jogados teste</span>
      <span>voice chat teste</span>
      <Button content="Conectar" type="submit"/>
    </div>
  )
}

export default AddList;
