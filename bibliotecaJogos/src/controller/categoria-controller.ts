import { Request, Response } from "express";
import { CategoriaService } from "../service/categoria-service";

export class CategoriaController {
    private service: CategoriaService;

    constructor(service: CategoriaService) {
        this.service = service;
    }

    inserir = async (req: Request, res: Response) => {
        try {
            const nova = await this.service.inserir(req.body);
            res.status(201).json(nova);
        } catch (err: any) {
            res.status(err.id || 500).json({ error: err.msg });
        }
    };

    listar = async (_req: Request, res: Response) => {
        res.json(await this.service.listar());
    };

    buscarPorId = async (req: Request, res: Response) => {
        try {
            const cat = await this.service.buscarPorId(+req.params.id);
            res.json(cat);
        } catch (err: any) {
            res.status(err.id).json({ error: err.msg });
        }
    };

    atualizar = async (req: Request, res: Response) => {
        try {
            const cat = await this.service.atualizar(+req.params.id, req.body);
            res.json(cat);
        } catch (err: any) {
            res.status(err.id).json({ error: err.msg });
        }
    };

    deletar = async (req: Request, res: Response) => {
        try {
            await this.service.deletar(+req.params.id);
            res.status(204).send();
        } catch (err: any) {
            res.status(err.id).json({ error: err.msg });
        }
    };
}