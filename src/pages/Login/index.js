
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
  const [showError, setShowError] = useState(false);
  const [colorInput, setColorInput] = useState(false);
  //const [subtitle, setSubtitle] = useState ("");

  //valor do input do usuário:
  const [nomeDeUsuario, setNomeDeUsuario] = useState ("")

  //valor do input da senha:
  const [senha, setSenha] = useState ("")
  const [usuarios] = useState([
    {
      id: 1,
      email: 'joão@hotmail.com',
      senha: 'oidevs',
    },
    {
      id: 2,
      email: 'jady@oi.com.br',
      senha: 'oidevs',
    },
    {
      id: 3,
      email: 'raniel@oi.com.br',
      senha: 'caneta',
    },
    {
      id: 4,
      email: 'carol@oi.com.br',
      senha: 'carol',
    }
  ]);
  
  const vaParaHome = () => {
    const usuarioEscolhido = usuarios.find((usuario) => usuario.email ===       nomeDeUsuario && usuario.senha === senha );
   
    if (usuarioEscolhido) {
      navigate("/home", { state: {listaDeUsuarios:usuarios} });
    } else {
      setShowError(true);
      mudarColorInput(true)
      // alert("Credenciais Invalidas");
      }
    };


  const mudarTitulo = () => {
    setTitle("Testando o State")
  }

  //const novoSubtitle = (event) => {
   // setSubtitle(event.target.value)
  
   const mudarColorInput = () => {
    setColorInput("#a13854")
   }

  return (

    //<ul>
      //<li key={id.usuario} onClick={() => }
    //</ul>
    <div className="container">
     <Title text={title} />
     {showError ? <Subtitle text='Credenciais Inválidas' /> : <Title text={""}/>}
     <Input label='E-mail' color={colorInput} onChange={(e) => setNomeDeUsuario(e.target.value)} /> {colorInput ? true : null}
     <Input label='Senha' color={colorInput} onChange={(e) => setSenha(e.target.value)} hideContent />
     <Button title='Entrar' aoClicar={vaParaHome}  bgColor="blue" />
     <Button title='Trocar título' aoClicar={mudarTitulo} />
     <Link link='https://www.google.com' text='Esqueceu a senha?'/>
    </div>
  );
}


export default Login;
