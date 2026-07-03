import { useState } from "react";
import "./CadastroCategoria.css"

export default function CadastroCategoria() {
    const [nome, setNome] = useState("");
       async function cadastrar() {

    const categoria = {
        nome,
    };
    if (nome.trim() === "") {
        alert("Digite o nome da categoria.");
        return;
    }

    try {
        const response = await fetch("http://localhost:3001/api/categorias", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(categoria)
        });
        const dados = await response.json();
        if (response.ok) {
            alert("Categoria cadastrada com sucesso!");

            setNome("");
        } else {
            alert(dados.error);
        }
     } catch {
        alert("Não foi possível conectar à API.");
    }

}

    return (
        <div>
            <div id="containerCadCat">
                <div id="divTituloCat">
                    <h1>Cadastrar Categoria</h1>
                </div>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    cadastrar();
                }}
    >
                    <label htmlFor="nomeCategoria">Nome:</label>
                    <input type="text" id="nomeCategoria" name="nomeCategoria" value={nome} onChange={(e) => setNome(e.target.value)}/>
                    
                    <input id="cadCatBtn" type="submit" value="Cadastrar Categoria"/>
                </form>
            </div>
        </div>
       
    );
}