import React from "react";
import { Container, Logo, ShoppingCart } from "./styles";
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";

export default function Header() {
  return (
    <Container>
      <Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </Logo>
      <ShoppingCart>
        <IconContext.Provider value={{ color: "black", size: "18px" }}>
          <TiShoppingCart />
        </IconContext.Provider>
        <span>0</span>
      </ShoppingCart>
    </Container>
  );
}
