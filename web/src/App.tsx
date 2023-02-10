import './styles/main.css'
import logo from '../public/Logo.svg'
import { MagnifyingGlassPlus } from 'phosphor-react'


function App() {
  

  return (
    <div className="max-w-[1344px] mx-auto flex flex-col items-center my-20">
      <img src={logo} alt="" />
      <strong className="text-6xl text-white font-black my-14">Seu <span className="bg-nlw-gradient text-transparent bg-clip-text">duo</span> está aqui.</strong>
      <div className="grid grid-cols-6 gap-6 ">
        <a href="" className="relative rouded-lg overflow-hidden">
          <img src="../public/game1.png" alt="" />
          <div className="absolute w-full bg-game-gradient pt-16 px-4 pb-6 bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>
        <a href="" className="relative rouded-lg overflow-hidden">
          <img src="../public/game2.png" alt="" />
          <div className="absolute w-full bg-game-gradient pt-16 px-4 pb-6 bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a><a href="" className="relative rouded-lg overflow-hidden">
          <img src="../public/game3.png" alt="" />
          <div className="absolute w-full bg-game-gradient pt-16 px-4 pb-6 bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a><a href="" className="relative rouded-lg overflow-hidden">
          <img src="../public/game4.png" alt="" />
          <div className="absolute w-full bg-game-gradient pt-16 px-4 pb-6 bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a><a href="" className="relative rouded-lg overflow-hidden">
          <img src="../public/game5.png" alt="" />
          <div className="absolute w-full bg-game-gradient pt-16 px-4 pb-6 bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a><a href="" className="relative rouded-lg overflow-hidden">
          <img src="../public/game6.png" alt="" />
          <div className="absolute w-full bg-game-gradient pt-16 px-4 pb-6 bottom-0 left-0 right-0">
            <strong className="font-bold text-white block">League of Legends</strong>
            <span className="text-zinc-300 text-sm block ">4 anúncios</span>
          </div>
        </a>

      </div>
      <div className="pt-1 bg-nlw-gradient rounded-lg mt-8 overflow-hidden self-stretch">
      
        <div className="bg-[#2A2634] px-8 py-6 flex justify-between items-center">
          <div>
            <strong className="block text-2xl text-white font-black">Não encontrou o seu duo?</strong>
            <span className="block text-zinc-400">Publique um anúncio para encontrar novos players!</span>
          </div>
          <button className="py-3 px-4 rounded-md bg-violet-500 hover:bg-violet-600 text-white flex items-center gap-2">
            <MagnifyingGlassPlus size={24}/>
            Publicar Anúncio
          </button>
        </div>
      </div>     

    </div>
  )
}

export default App
