import { useEffect, useState } from "react";
import { Jogo } from "../types/Jogo";

export default function Jogos() {

    const [jogos, setJogos] = useState<Jogo[]>([]);

    useEffect(() => {

        fetch("http://localhost:3001/api/produtos")
            .then(response => response.json())
            .then(data => setJogos(data));

    }, []);

    return (
        <div>
            <h1>Lista de Jogos</h1>

            <table border={1}>
                <thead>
                    <tr>
                        <th>Nome</th>
                        <th>Preço</th>
                        <th>Plataforma</th>
                        <th>Categoria</th>
                    </tr>
                </thead>

                <tbody>
                    {jogos.map(jogo => (

                        <tr key={jogo.id}>
                            <td>{jogo.nome}</td>
                            <td>R$ {jogo.preco}</td>
                            <td>{jogo.plataforma}</td>
                            <td>{jogo.categoria.nome}</td>
                        </tr>

                    ))}
                </tbody>

            </table>
        </div>
    );
}