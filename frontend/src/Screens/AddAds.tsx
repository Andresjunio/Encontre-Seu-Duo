import { Button } from '../Components/Components';
import { useFetch } from '../Hooks/useFetch';
import '../Styles/main.css'

interface GameProps {
  id: number,
  name: string
}

function AddAds(){

  const {data: game, isFetching } = useFetch<GameProps[]>('games/all');

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="text-white rounded-xl bg-slate-500 w-1/3 h-2/3 flex flex-col items-center gap-4">
        <h1 className="font-black text-3xl mt-20 mb-10">Crie seu Anúncio</h1>
        <span className="mb-6">Preencha as informações abaixo</span>
        <div className="flex flex-col gap-4 w-3/5 justify-center">
          <span>Selecione o Game</span>
          {/* { game?.map (repo => {
            return (
              <select  name="gameName" id="gameName">
                <option key={repo.id}>Selecione uma opção</option>
                <option>{repo.name}</option>
              </select>
            )
          })} */}
          <select name="gameName" id="gameName">
            { game?.map (repo => {
              <option value="Selecione">Selecione uma opção</option>
              return (
                <option value="game">{repo.name}</option>
              )
            })}

          </select>
        </div>
        <div>
          <span>Selecione os dias da semana</span>
          <div className="flex  gap-6 items-center">
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Domingo</span>
              <input type="checkbox" name="sunday" id="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Segunda</span>
              <input type="checkbox" name="monday" id="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Terça</span>
              <input type="checkbox" name="tuesday" id="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Quarta</span>
              <input type="checkbox" name="wednesday" id="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Quinta</span>
              <input type="checkbox" name="thursday" id="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Sexta</span>
              <input type="checkbox" name="friday" id="" />
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
              <span>Sábado</span>
              <input type="checkbox" name="saturday" id="" />
            </div>
            </div>
            <div className="flex flex-col items-center justify-center gap-2">
            <span>Selecione os seus horários</span>
            <input type="time" name="hourStard" id="" />
            <span>às</span>
            <input type="time" name="hourEnd" id="" />
                    </div>
                    <div className="flex flex-col items-center justify-center">
            <span>Você utiliza chat de voz?</span>
            <input type="checkbox" name="voiceChat" id="" />
                 </div>
          </div>
        <Button content="Confirmar" type="submit"/>
      </div>
    </div>
  )
}

export default AddAds;