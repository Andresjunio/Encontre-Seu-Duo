import '../Styles/main.css'

function Sign(){
  return (
    <div
     className="text-white h-screen w-screen flex items-center justify-center gap-6 ">
      <div className="flex flex-col gap-6 items-center justify-center bg-slate-500 h-96 w-72 rounded-lg">
        <h1 className="font-black text-3xl ">Crie sua conta</h1>
        <input 
        className="h-12 w-4/5 p-5 rounded-lg"
        type="text" name="userName" id="#userName" placeholder="Nome"/>
        <input 
        className="h-12 w-4/5 p-5 rounded-lg"
        type="password" name="password" id="#password" placeholder="Senha" />
        <input 
        className="h-12 w-4/5 p-5 rounded-lg"
        type="password" name="confpassword" id="#confpassword" placeholder="Confirmar Senha" />
        <button className="mt-4 bg-black w-4/5 h-9 rounded-lg font-black text-lg">
          Cadastrar</button>
      </div>
    </div>
  )
}

export default Sign;