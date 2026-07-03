import { Repository } from "typeorm";
import { Categoria } from "../entity/categoria";

export class CategoriaService {
    private repository: Repository<Categoria>;

    constructor(repository: Repository<Categoria>) {
        this.repository = repository;
    }

    async inserir(categoria: Categoria) {
        if (!categoria.nome) { //verifica se um nome foi recebido
            throw({id: 400, msg: "Nome obrigatório."});
        }
        const nome = categoria.nome.trim().toLowerCase(); //transforma tudo em lowercase
        const categorias = await this.repository.find();


        const repetido = categorias.find(
            cat => cat.nome?.trim().toLowerCase() === nome //busca uma categoria com nome igual
        );

        if (repetido) { //se encontrou categoria com nome igual, erro
            throw({id: 400, msg: "Já existe uma categoria com esse nome."});
        }

        return this.repository.save(categoria);
    }

    async listar() {
        return this.repository.find();
    }

    async buscarPorId(id: number) {
        const categoria = await this.repository.findOneBy({ id });
        if (!categoria) {
            throw { id: 404, msg: "Categoria não encontrada" };
        }
        return categoria;
    }

    async atualizar(id: number, dados: Categoria) {
        const categoria = await this.buscarPorId(id);
        Object.assign(categoria, dados);
        return this.repository.save(categoria);
    }

    async deletar(id: number) {
        const categoria = await this.buscarPorId(id);
        await this.repository.remove(categoria);
    }
}