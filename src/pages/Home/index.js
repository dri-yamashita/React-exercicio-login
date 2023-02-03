import './style.css'
import {useNavigate, useLocation} from "react-router-dom";
import Button from '../../components/Button/Index';
import { useState, useEffect } from 'react';



const Home =  () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [contador, setContador] = useState(0);

    const {listaDeUsuarios} = location.state;
    const {UsuArio} = location.state;

    const voltarLogin = () => {
      navigate("/")
  };

 
 //useEffect(() => {
    //localStorage.setItem('UserLogado', UsuArio.name);
   //return () => {
        //localStorage.removeItem('UserLogado')
        //console.log("Apagando um item no localStorage")
    //};

//}, [voltarLogin]);

useEffect(() => {
    console.log("executei")

}, [contador]);

    return (
     <div>
        <h1>Home</h1>
   
        <ul>
          <h2>Lista de Usuarios</h2>
          {listaDeUsuarios.map((user) => (
            <li key={user.id}>Email do usuario: {user.email}</li>
          ))}
        </ul>

        <h1>Contador: {contador}</h1>
        <button onClick={() => setContador(contador + 1)}>+</button>
      
        <Button aoClicar={voltarLogin} title='Voltar login'>
      Voltar Login
        </Button>
     </div>
    )
}

export default Home;
 

