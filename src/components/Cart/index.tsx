import {
  ShoppingCart,
  TitleAndClose,
  TitleCart,
  Close,
  ProductBox,
  ProductImg,
  Products,
  Empty,
  CloseProduct,
  ProductTitle,
  ProductPrice,
  Counter,
  ValueCounter,
  Up,
  Down,
  Total,
  Finish,
  TotalAndFinish,
} from "./styled";
import { IoCloseSharp } from "react-icons/io5";
import { BsCartX } from "react-icons/bs";
import { IconContext } from "react-icons";
import { useDispatch, useSelector } from "react-redux";
import Image from "next/image";
import { Product, RootState } from "@/lib/product";
import { useEffect } from "react";
import {
  RemoveCart,
  GetCartTotal,
  AddCart,
  DecreaseProduct,
} from "@/features/productsCart";
import { currencyFormat } from "@/utils/currencyFormat";

interface CartProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function Cart({ setIsOpen, isOpen }: CartProps) {
  const { items, totalAmount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCartTotal());
  }, [items, dispatch]);

  return (
    <ShoppingCart isOpen={isOpen}>
      <TitleAndClose>
        <TitleCart>
          Carrinho <br />
          de compras
        </TitleCart>
        <Close onClick={() => setIsOpen((prev) => !prev)}>
          <IconContext.Provider value={{ color: "white", size: "20px" }}>
            <IoCloseSharp />
          </IconContext.Provider>
        </Close>
      </TitleAndClose>
      <Products>
        {items.length === 0 ? (
          <Empty>
            <IconContext.Provider value={{ size: "40px" }}>
              <BsCartX />
            </IconContext.Provider>
            <span>
              Seu carrinho está <strong>Vázio!</strong>
            </span>
          </Empty>
        ) : (
          items.map((product: Product, key: number) => (
            <ProductBox key={key}>
              <ProductImg>
                <Image
                  src={product.photo}
                  alt={product.name}
                  layout="fill"
                  objectFit="contain"
                />
              </ProductImg>
              <ProductTitle>{product.name}</ProductTitle>
              <Counter>
                <Down onClick={() => dispatch(DecreaseProduct(product))}>
                  -
                </Down>
                <ValueCounter>{product.amount}</ValueCounter>
                <Up onClick={() => dispatch(AddCart(product))}>+</Up>
              </Counter>
              <ProductPrice>{currencyFormat(product.price)}</ProductPrice>
              <CloseProduct onClick={() => dispatch(RemoveCart(product.id))}>
                <IconContext.Provider value={{ color: "white", size: "10px" }}>
                  <IoCloseSharp />
                </IconContext.Provider>
              </CloseProduct>
            </ProductBox>
          ))
        )}
      </Products>
      <TotalAndFinish>
        <Total>
          <span>Total:</span>
          <span>{currencyFormat(totalAmount)}</span>
        </Total>
        <Finish>Finalizar Compra</Finish>
      </TotalAndFinish>
    </ShoppingCart>
  );
}
