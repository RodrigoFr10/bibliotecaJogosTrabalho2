export interface Categoria {
    id: number;
    nome: string;
}

export interface Jogo {
    id: number;
    nome: string;
    preco: number;
    plataforma: string;
    dataLancamento: string;
    categoria: Categoria;
}