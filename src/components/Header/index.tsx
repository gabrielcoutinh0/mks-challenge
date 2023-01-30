import React from "react";
import { Container, Logo, ShoppingCart } from "./styles";
import { TiShoppingCart } from "react-icons/ti";
import { IconContext } from "react-icons";
import { useSelector } from "react-redux";
import { RootState } from "@/reducer/store";

interface HeaderProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Header({ setIsOpen }: HeaderProps) {
  const { totalCount } = useSelector((state: RootState) => state.cart);

  return (
    <Container>
      <Logo>
        <span>MKS</span>
        <span>Sistemas</span>
      </Logo>
      <ShoppingCart onClick={() => setIsOpen((prev) => !prev)}>
        <IconContext.Provider value={{ color: "black", size: "18px" }}>
          <TiShoppingCart />
        </IconContext.Provider>
        <span>{totalCount}</span>
      </ShoppingCart>
    </Container>
  );
}
