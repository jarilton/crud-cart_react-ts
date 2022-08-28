import { useEffect } from "react";
import { useProduct } from "../../hooks";
import { DivText } from "./styles";

export function Store() {
  const { products, getAll } = useProduct();

  useEffect(() => { 
    getAll();
  }, [getAll])

  return (
    <>
      <DivText>Loja</DivText>
    </>
  );
}
