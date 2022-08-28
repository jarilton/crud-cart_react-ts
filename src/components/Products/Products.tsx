// import { Column } from 'components';
import { IProduct } from "../../interfaces";
import { ListProducts } from "./ListProducts";

import { Column } from "./styles";

type ListProductsProps = {
  items: IProduct[];
  selectedIndex: number;
  isActive: boolean;
  index: number;
  onClick: (index: number) => void;
};

export const List: React.FC<ListProductsProps> = ({
  items,
  selectedIndex,
  onClick,
}) => {
  return (
    <Column>
      {items.map((item, index) => (
        <ListProducts
          key={index}
          {...item}
          isActive={index === selectedIndex}
          index={index}
          onClick={onClick}
        />
      ))}
    </Column>
  );
};
