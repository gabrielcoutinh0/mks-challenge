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
} from "./styles";
import { FiShoppingBag } from "react-icons/fi";

export default function Product() {
  const paramsURL = {
    page: 1,
    rows: 8,
    sortBy: "id",
    orderBy: "ASC",
  };

  const url = `https://mks-challenge-api-frontend.herokuapp.com/api/v1/products?page=${paramsURL.page}&rows=${paramsURL.rows}&sortBy=${paramsURL.sortBy}&orderBy=${paramsURL.orderBy}`;
  const { data, loading, error } = useFetch(url);

  function currencyFormat(num: number) {
    return (
      "R$" +
      Number(num)
        .toFixed(0)
        .replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
    );
  }

  return (
    <Section>
      {data.map((product, key) => (
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
          <Button>
            <FiShoppingBag />
            COMPRAR
          </Button>
        </Article>
      ))}
    </Section>
  );
}
