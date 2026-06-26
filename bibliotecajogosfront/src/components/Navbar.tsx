import { Link } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <br />

            <Link to="/jogos">Jogos</Link>
            <br />

            <Link to="/cadastro">Cadastrar Jogo</Link>

            <Link to="/cadastro-categoria">Cadastrar Categoria</Link>
        </nav>
    );
}