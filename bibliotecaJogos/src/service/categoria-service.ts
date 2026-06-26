import { Repository } from "typeorm";
import { Categoria } from "../entity/categoria";

export class CategoriaService {
    private repository: Repository<Categoria>;

    constructor(repository: Repository<Categoria>) {
        this.repository = repository;
    }

    async inserir(categoria: Categoria) {
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