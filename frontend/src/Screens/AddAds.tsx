import '../Styles/main.css'


function AddAds(){
  return (
    <div className="text-white">
      <h1>Crie seu Anúncio</h1>
      <span>Preencha as informações abaixo</span>
      <div>
        <span>Selecione o Game</span>
        <select name="" id="">
          <option value=""></option>
        </select>
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



    </div>
  )
}

export default AddAds;