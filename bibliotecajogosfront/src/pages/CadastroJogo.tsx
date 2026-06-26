import {  useEffect, useState } from "react";
import { Categoria } from "../types/Categoria";

export default function CadastroJogo() {
    const [nome, setNome] = useState("");
    const [preco, setPreco] = useState(0);
    const [plataforma, setPlataforma] = useState("");
    const [dataLancamento, setDataLancamento] = useState("");
    const [categoriaId, setCategoriaId] = useState(1);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    async function cadastrar() {

    const jogo = {
        nome,
        preco,
        plataforma,
        dataLancamento,
        categoria: {
            id: categoriaId
        }
    };

    await fetch("http://localhost:3001/api/produtos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(jogo)
    });

}
useEffect(() => {
    fetch("http://localhost:3001/api/categorias")
        .then(response => response.json())
        .then(data => setCategorias(data));
    }, []);
    return (
        <div>
             <h1>Cadastrar Jogo</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                cadastrar();
            }}
>
                <label htmlFor="nomeJogo">Nome:</label>
                <input type="text" id="nomeJogo" name="nomeJogo" value={nome} onChange={(e) => setNome(e.target.value)}/>
                
                <label htmlFor="preco">Preço:</label>
                <input type="number" id="preco" name="preco" value={preco} onChange={(e) => setPreco(Number(e.target.value))}/>
                
                <label htmlFor="plataforma">Plataforma:</label>
                {/* <input type="text" id="plataforma" name="plataforma" value={plataforma} onChange={(e) => setPlataforma(e.target.value)}/> */}
                <select id="plataforma" name="plataforma" value={plataforma} onChange={(e) => setPlataforma(e.target.value)}>
                    <option value="">Selecione...</option>
                    <option value="PC">PC</option>
                    <option value="PS5">PS5</option>
                    <option value="Xbox Series S/X">Xbox Series S/X</option>
                    <option value="PS4">PS4</option>
                    <option value="Xbox One">Xbox One</option>
                    <option value="PC, PS5, Xbox">PC, PS5, Xbox</option>
                </select>
                <label htmlFor="lancamento">Data de Lançamento:</label>
                <input type="text" id="lancamento" name="lancamento" value={dataLancamento} onChange={(e) => setDataLancamento(e.target.value)}/>
                
                <label htmlFor="categoria">Categoria:</label>
                <select id="categoria" value={categoriaId} onChange={(e) => setCategoriaId(Number(e.target.value))}>
                    {categorias.map((categoria) => (
                        <option
                            key={categoria.id}
                            value={categoria.id}
                        >
                            {categoria.nome}
                        </option>
                    ))}
                </select>
                <input type="submit" value="Cadastrar Jogo"/>
            </form>
        </div>
       
    );
}