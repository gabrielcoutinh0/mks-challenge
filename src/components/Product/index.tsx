import { useFetch } from "@/hooks/useFetch";
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
import { currencyFormat, url } from "@/lib/product";
import { useDispatch, useSelector } from "react-redux";
import { AddCart } from "@/features/productsCart";
import { useEffect } from "react";

export default function Product() {
  const { data, loading, error } = useFetch(url);
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
                  layout="fill"
                  objectFit="contain"
                />
              </Img>
              <NameAndPrice>
                <Name>{product.name}</Name>
                <Price>{currencyFormat(product.price)}</Price>
              </NameAndPrice>
              <Description>{product.description}</Description>
            </Info>
            <Button onClick={() => dispatch(AddCart(product))}>
              <FiShoppingBag />
              COMPRAR
            </Button>
          </Article>
        )
      )}
    </Section>
  );
}
