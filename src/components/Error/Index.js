import Login from "../../pages/Login";
import Subtitle from "../Subtitle/Index";
import Title from "../Title/Index";

const Error = ({ showError }) => {
    let componenteDeErro;

    if (showError) {
        componenteDeErro = <Title text="Usuário não encontrado" />;
    } else {
        componenteDeErro = <Subtitle text="" />;
    }
    return (
        <div>
            {componenteDeErro}
        </div>
    );
 };


 export default Error;