import Image from "next/image";
import {
  Article,
  Section,
  Img,
  NameAndPrice,
  Name,
  Price,
  Description,
  Button,
  Info,
  Skeleton,
} from "./styles";
import { FiShoppingBag } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { AddAndIncrementItemCart } from "@/features/productsCart";
import { currencyFormat } from "@/utils/currencyFormat";
import { Product } from "@/lib/product";

interface ProductProps {
  data: Product[] | [];
  loading: boolean;
}

export default function Products({ data, loading }: ProductProps) {
  const dispatch = useDispatch();

  return (
    <Section>
      {data.map((product, key) =>
        loading ? (
          <Skeleton key={key} />
        ) : (
          <Article key={key}>
            <Info>
              <Img>
                <Image
                  src={product.photo}
                  alt={product.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </Img>
              <NameAndPrice>
                <Name>{product.name}</Name>
                <Price>{currencyFormat(product.price)}</Price>
              </NameAndPrice>
              <Description>{product.description}</Description>
            </Info>
            <Button
              data-testid="buy"
              onClick={() => dispatch(AddAndIncrementItemCart(product))}
            >
              <FiShoppingBag />
              COMPRAR
            </Button>
          </Article>
        )
      )}
    </Section>
  );
}
