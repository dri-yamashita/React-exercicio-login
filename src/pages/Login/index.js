
import  '../../App.css';
import Title from '../../components/Title/Index.js';
import Input from '../../components/Input/Index.js';
import Button from '../../components/Button/Index.js';
import Link from '../../components/Link/Index.js';
import Subtitle from '../../components/Subtitle/Index.js';

import { useNavigate } from "react-router-dom";
import { useState } from "react";


const Login = () =>  {
  const navigate = useNavigate();
  const [title, setTitle] = useState("Login");
  const [subtitle, setSubtitle] = useState ("")

  const vaParaHome = () => {
    navigate("/home");
  }

  const mudarTitulo = () => {
    setTitle("Teste state")
  }

  const novoSubtitle = (event) => {
    setSubtitle(event.target.value)
  }

  return (
    <div className="container">
     <Title text={title} />
     <Subtitle text={subtitle} />
     <Input label='Usuário' value={subtitle} onChange={novoSubtitle}/>
     <Input label='Senha' hideContent />
     <Button title='Entrar' aoClicar={vaParaHome} />
     <Button title='Trocar título' aoClicar={mudarTitulo} />
     <Link link='https://www.google.com' text='Esqueceu a senha?'/>
    </div>
  );
}

export default Login;




