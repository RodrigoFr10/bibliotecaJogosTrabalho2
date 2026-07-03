import { BrowserRouter, Routes, Route } from "react-router-dom"; //rotas
import Navbar from "./components/Navbar";
import TabelaJogos from "./components/tabelaJogos"
import Home from "./pages/Home";
import Jogos from "./pages/Jogos";
import CadastroJogo from "./pages/CadastroJogo";
import CadastroCategoria from "./pages/CadastroCategoria";

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/jogos" element={<Jogos />} />
        <Route path="/cadastro" element={<CadastroJogo />} />
        <Route path="/cadastro-categoria" element={<CadastroCategoria />} />
      </Routes>
      {/* <TabelaJogos></TabelaJogos> */}
    </BrowserRouter>
  );
}

export default App;