import './style.css'
import {useNavigate, useLocation} from "react-router-dom";
import Button from '../../components/Button/Index';



const Home =  () => {
    const navigate = useNavigate();
    const location = useLocation();

    const {listaDeUsuarios} = location.state;

    const voltarLogin = () => {
        navigate("/")
    };

    return (
    <>
    <h1>Home</h1>
   
    <ul>
          <h2>Lista de Usuarios</h2>
          {listaDeUsuarios.map((user) => (
            <li key={user.id}>Email do usuario: {user.email}</li>
          ))}
    </ul>

    <button onClick={voltarLogin} title='Voltar login'>
      Voltar Login
    </button>
    </>
    )
}

export default Home;
 

