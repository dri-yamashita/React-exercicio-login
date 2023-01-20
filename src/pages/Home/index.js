import './style.css'
import {useNavigate} from "react-router-dom";


const Home =  () => {
    const navigate = useNavigate();

    const voltarLogin = () => {
        navigate("/")
    }
    return (
    <>
    <h1>Home</h1>
    <button onClick={voltarLogin} title='Voltar login'>
      Voltar Login
    </button>
    </>
    )
}

export default Home;
 

