import { useCallback, useState } from "react";
import { IProduct } from "../interfaces";
import { ProductService } from "../services";

export const useProduct = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  const getAll = useCallback(async () => {
    const { status, data } = await ProductService.getAll();

    if (status !== 200) throw new Error();

    setProducts(data);
  }, []);

  return {
    products,
    getAll,
  };
};
