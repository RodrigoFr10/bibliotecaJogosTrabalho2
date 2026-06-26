import { useState } from "react";

export default function CadastroCategoria() {
    const [nome, setNome] = useState("");
       async function cadastrar() {

    const categoria = {
        nome,
       
    };

    // await fetch("http://localhost:3001/api/categorias", {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(categoria)
    // });

    const response = await fetch("http://localhost:3001/api/categorias", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(categoria)
    });

    if (response.ok) {
        alert("Categoria cadastrada com sucesso!");
        setNome("");
    }

}

    return (
        <div>
             <h1>Cadastrar Categoria</h1>

            <form onSubmit={(e) => {
                e.preventDefault();
                cadastrar();
            }}
>
                <label htmlFor="nomeCategoria">Nome:</label>
                <input type="text" id="nomeCategoria" name="nomeCategoria" value={nome} onChange={(e) => setNome(e.target.value)}/>
                
                <input type="submit" value="Cadastrar Categoria"/>
            </form>
        </div>
       
    );
}