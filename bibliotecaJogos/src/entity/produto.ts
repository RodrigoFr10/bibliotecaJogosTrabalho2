import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Categoria } from "./categoria";

@Entity()
export class Produto {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    nome?: string;
    @Column("decimal")
    preco?: number;
    @Column({nullable:true})
    plataforma?: string;
    @Column({nullable:true})
    dataLancamento?: Date;
    @ManyToOne(() => Categoria, categoria => categoria.produtos)
    @JoinColumn({ name: "categoria_id" })
    categoria?: Categoria;
   
}


//modelo adicionar categoria
// {
//   "nome": "Terror"
// }

//modelo para adicionar jogo(insomnia, link http://localhost:3000/api/produtos)

// {
//   "nome": "Grand Theft Auto V",
//   "preco": 149.90,
//   "plataforma": "PC",
//   "dataLancamento": "2013-09-17",
//   "categoria": {
//     "id": 1
//   }
// }