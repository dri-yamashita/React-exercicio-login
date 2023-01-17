
import  '../../App.css';
import Title from '../../components/Title/Index.js';
import Input from '../../components/Input/Index.js';
import Button from '../../components/Button/Index.js';
import Link from '../../components/Link/Index.js';
import { useNavigate } from "react-router-dom";



function Login() {
  const navigate = useNavigate()

  function vaParaHome() {
    navigate("/home");
  }

  return (
    <div className="container">
     <Title title='Login' />
     <Input label='Usuário'/>
     <Input label='Senha' hideContent />
     <Button  name='Entrar' redirecionar={vaParaHome} />
     <Link link='https://www.google.com' text='Esqueceu a senha?'/>
    </div>
  );
}

export default Login;




