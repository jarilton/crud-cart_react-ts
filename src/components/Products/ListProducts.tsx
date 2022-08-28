import { Column, Row, Text, Icon } from "./styles";

export type ListProductsProps = {
  index: number;
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  key: number;
  onClick: (index: number) => void;
  isActive: boolean;
};

export const ListProducts: React.FC<ListProductsProps> = ({
  index,
  id,
  title,
  price,
  description,
  category,
  image,
  key,
  isActive,
  onClick,
}) => {
  return (
    <Column onClick={() => onClick(index)}>
      <Row>
        <Text>{title}</Text>
        {price === 1 && <Icon />}
      </Row>
    </Column>
  );
};
