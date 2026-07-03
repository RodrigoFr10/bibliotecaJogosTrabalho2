import { Link } from "react-router-dom";
import "./Navbar.css";
export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
           

            <Link to="/jogos">Jogos</Link>
          

            <Link to="/cadastro">Cadastrar Jogo</Link>
            
            <Link to="/cadastro-categoria">Cadastrar Categoria</Link>
        </nav>
    );
}