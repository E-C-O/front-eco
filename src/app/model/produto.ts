import { Venda } from './venda';
import { Categoria } from './categoria';

export class Produto {
    public id: number;
    public nome: string;
    public descricao: string;
    public qtdEstoque: number;
    public valor: number;
    public marca: string;
    public categoria: Categoria;
    public venda: Venda[];
}