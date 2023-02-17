import '../Styles/main.css'

interface ButtonProps{
  content: string,
  type: string,
}

interface TitleProps{
  content: string;
}

interface InputProps{
  placeholder: string;
}

function Inputs(inpprops: InputProps){
  return (
    <div>
      <input type="text" 
      className="block w-2/3 h-16 rounded-lg p-4"
      placeholder={inpprops.placeholder}/>
    </div>
  )
}

function Title(titprops: TitleProps){
  return (
    <div>
      <h1 className="font-black text-6xl">{titprops.content}</h1>
    </div>
  )
}

function Button(butProps: ButtonProps){
  return (
    <div>
      <button
       className=" bg-black w-48 h-9 rounded-lg font-black text-lg hover:bg-slate-800" 
       >{butProps.content}</button>
    </div>
  )
}

export { Inputs, Title, Button };