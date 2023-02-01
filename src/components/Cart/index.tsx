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
import { useEffect } from "react";
import {
  RemoveItemCart,
  GetCartTotal,
  AddAndIncrementItemCart,
  DecrementItem,
} from "@/features/productsCart";
import { currencyFormat } from "@/utils/currencyFormat";
import { Product } from "@/lib/product";
import { RootState } from "@/reducer/store";

interface CartProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  data: Product[] | [];
}

export default function Cart({ isOpen, setIsOpen, data }: CartProps) {
  const { totalAmount } = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(GetCartTotal());
  }, [data, dispatch]);

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
      <Products data-testid="ListProductCart">
        {data.length === 0 ? (
          <Empty>
            <IconContext.Provider value={{ size: "40px" }}>
              <BsCartX />
            </IconContext.Provider>
            <span>
              Seu carrinho está <strong>Vázio!</strong>
            </span>
          </Empty>
        ) : (
          data.map((product: Product, key: number) => (
            <ProductBox key={key} data-testid="itemCart">
              <ProductImg>
                <Image
                  src={product.photo}
                  alt={product.name}
                  width="0"
                  height="0"
                  sizes="100vw"
                />
              </ProductImg>
              <ProductTitle>{product.name}</ProductTitle>
              <Counter>
                <Down onClick={() => dispatch(DecrementItem(product))}>-</Down>
                <ValueCounter>{product.quantity}</ValueCounter>
                <Up
                  onClick={() => dispatch(AddAndIncrementItemCart(product))}
                  data-testid="add"
                >
                  +
                </Up>
              </Counter>
              <ProductPrice>{currencyFormat(product.price)}</ProductPrice>
              <CloseProduct
                data-testid="removeItem"
                onClick={() => dispatch(RemoveItemCart(product.id))}
              >
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
          <span data-testid="total"> {currencyFormat(totalAmount)}</span>
        </Total>
        <Finish>Finalizar Compra</Finish>
      </TotalAndFinish>
    </ShoppingCart>
  );
}
