import '../Styles/main.css'

function Sign(){
  return (
    <div className="flex flex-col items-center h-full justify-center text-white">
      <h1>Crie sua conta</h1>
      <input type="text" name="playerName" id="#playerName" placeholder="Nome"/>
      <input type="password" name="password" id="#password" placeholder="Senha" />
      <input type="password" name="confpassword" id="#confpassword" placeholder="Confirmar Senha" />
      <button>Cadastrar</button>
    </div>
  )
}

export default Sign;