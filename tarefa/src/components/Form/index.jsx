
import {useState} from 'react';


import './style.css';

export default function Form() {

 const [peso, setPeso] = useState(0);

 const [altura, setAltura] = useState(0);

 const [imc, setImc] = useState(0);


 const calcular = (e)=> {

 e.preventDefault();

 setImc(peso/altura ** 2);

 }

 return(

 <div>

 <form className="formulario" onSubmit={calcular}>

 <label htmlFor="peso">Peso:</label> 

 <input type="number" required value={peso} onChange={(e)=>{

 setPeso(e.target.value);

 }}/>


 <label htmlFor="altura">Altura:</label> 

 <input type="number" required value={altura} onChange={(e)=>{

 setAltura(e.target.value);

 }}/>

 <label>Resultado: {imc.toFixed(2)}</label> 

 <button className="botao">Calcular</button>

 </form>

 </div>


 )

}


