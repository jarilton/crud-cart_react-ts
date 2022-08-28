import { IProduct } from './../interfaces';
import { Api } from './../providers';

const getAll = () => Api.get<IProduct[]>('https://fakestoreapi.com/products')

export const ProductService = {
    getAll,
}