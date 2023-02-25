import { Button } from '../Components/Components';
import { useFetch } from '../Hooks/useFetch';
import '../Styles/main.css'

interface GameProps {
  id: number,
  name: string
}

function AddAds(){

  const {data: game, isFetching } = useFetch<GameProps[]>('game/all');

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-white rounded-xl bg-slate-500 w-1/3 h-2/3 flex flex-col items-center gap-4">
        <h1 className="font-black text-3xl mt-20 mb-10">Crie seu Anúncio</h1>
        <span className="mb-6">Preencha as informações abaixo</span>
        <div className="flex flex-col gap-4 w-3/5 justify-center">
          <span>Selecione o Game</span>
          {/* { game?.map (repo => {
            return (
              <select key={repo.id} name="gameName" id="gameName">
                <option>Selecione uma opção</option>
                <option>{repo.name}</option>
              </select>
            )
          })} */}
        </div>
        <div>
          <span>Selecione os dias da semana</span>
          <input type="checkbox" name="sunday" id="" />
          <input type="checkbox" name="monday" id="" />
          <input type="checkbox" name="tuesday" id="" />
          <input type="checkbox" name="wednesday" id="" />
          <input type="checkbox" name="thursday" id="" />
          <input type="checkbox" name="friday" id="" />
          <input type="checkbox" name="saturday" id="" />
        </div>
        <div>
          <span>Selecione os seus horários</span>
          <input type="time" name="hourStard" id="" />
          <span>às</span>
          <input type="time" name="hourEnd" id="" />
        </div>
        <div>
          <span>Você utiliza chat de voz?</span>
          <input type="checkbox" name="voiceChat" id="" />
        </div>
        <Button content="Confirmar" type="submit"/>
      </div>
    </div>
  )
}

export default AddAds;