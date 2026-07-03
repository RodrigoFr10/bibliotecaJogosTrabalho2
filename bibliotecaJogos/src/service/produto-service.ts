import { Repository } from "typeorm";
import { Produto } from "../entity/produto";
import { ProdutoRepository } from "../repository/produto-repository";

export class ProdutoService {
    private repository: Repository<Produto>;

    constructor(repository: Repository<Produto>){
        this.repository = repository;
    }

    async inserir(produto: Produto): Promise<Produto> {

        if (!produto || !produto.nome || !produto.preco) {
            throw({id: 400, msg: "Falta dados obrigatórios de produto"});
        }

        const nome = produto.nome.trim().toLowerCase(); //transforma tudo em lowercase
        const jogos = await this.repository.find();

        const repetido = jogos.find(
            jogo => jogo.nome?.trim().toLowerCase() === nome //busca um jogo com nome igual
        );

        if (repetido) { //se encontrou jogo com nome igual, erro
            throw({id: 400, msg: "Já existe um jogo com esse nome."});
        }

        return await this.repository.save(produto);
    }

    async listar(): Promise<Produto[]> {
        return await this.repository.find({
            relations:{categoria:true}
        });
    }

    async buscarPorId(id: number): Promise<Produto> {
        let produto = await this.repository.findOne({
            where: {id:id},
            relations:{
                categoria:true
            }
        }
        );
        if(!produto) {
            throw({id: 404, msg:"Produto nao encontrado!"})
        }
        return produto;
    }

    async atualizar(id:number, produtoAlterado: Produto): Promise<Produto> {
        if(produtoAlterado && produtoAlterado.nome && produtoAlterado.preco) {
            const produto = await this.repository.findOneBy({id:id});
            if(produto) {
                produto.nome = produtoAlterado.nome;
                produto.preco = produtoAlterado.preco;
                await this.repository.save(produto);
                return produto;
            }        
            else {
                throw {id:404, msg: "Produto não encontrado"};
            }
        }
        else {
            throw {id:400, msg: "Produto sem dados corretos"};
        }
    }

    async deletar(id:number) {
        let produto = await this.repository.findOneBy({id:id});
        if(produto) {
            await this.repository.delete({id:id});
            return produto;
        }
        else {
            throw { id: 404, msg: "Produto não encontrado!" }
        }
    }
}