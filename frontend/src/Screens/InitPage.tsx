import '../Styles/main.css'
import { Link }  from 'react-router-dom'


function InitPage(){
  return (
    <div className="text-white h-screen w-screen flex items-center justify-center gap-6 ">
        <div className="w-2/5 flex flex-col items-center">
          <img src="" alt="" />
          <h1 className="font-black font-inter text-5xl"> Seu duo está aqui</h1>
        </div>
        <div className="flex flex-col gap-4 w-2/5 items-center">
          <input 
          className="block w-2/3 h-16 rounded-lg p-4"
          type="text"
          name="user"
          id="#user"
          placeholder='Nome de usuário'/>
          <input 
          className="block w-2/3 h-16 rounded-lg p-4"
          type="password"
          name="password" 
          id="#password" 
          placeholder='Senha' />
          <button
          className="font-black text-xl bg-slate-300 w-2/3 py-4 rounded-lg text-black hover:bg-slate-400">
            Login</button>
            <span className="font-black text-xl">
              <Link to="/player/new">Ainda não possui registro? Cadastre-se aqui.</Link></span>
        </div>
    </div>
  )
}

export default InitPage;
