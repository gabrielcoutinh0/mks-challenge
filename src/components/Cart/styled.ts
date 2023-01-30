import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

interface CartProps {
  isOpen: boolean;
}

export const ShoppingCart = styled.div<CartProps>`
  position: fixed;
  right: 0;
  top: 0;
  background-color: var(--color-primary);
  max-width: 100%;
  width: 100%;
  height: 100vh;
  box-shadow: -5px 0px 6px rgba(0, 0, 0, 0.13);
  transform: ${(props) =>
    props.isOpen ? "translateX(0)" : "translateX(100%)"};
  transition: all 0.4s;
  z-index: 999;

  @media (min-width: 640px) {
    max-width: 75%;
  }

  @media (min-width: 1024px) {
    max-width: 33%;
  }
`;

export const TitleAndClose = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: ${pixelToRem(70)};
  padding: ${pixelToRem(34.5)};
`;

export const TitleCart = styled.h2`
  color: var(--color-white);
  font-weight: 700;
  font-size: ${pixelToRem(27)};
  line-height: ${pixelToRem(33)};
`;

export const Close = styled.button`
  display: flex;
  background-color: #000;
  padding: ${pixelToRem(9)};
  border-radius: 100%;
  cursor: pointer;
`;

export const Products = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${pixelToRem(28)};
  height: 100%;
  overflow-y: auto;
  padding: ${pixelToRem(34.5)};
  max-height: max-content;
  height: 50%;

  &::-webkit-scrollbar {
    width: 13px;
  }

  &::-webkit-scrollbar-track {
    background: var(--color-primary);
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--color-white);
    border-radius: 10px;
    border: 3px solid var(--color-primary);
  }
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  color: var(--color-white);

  span {
    text-align: center;
    font-weight: 400;
    font-size: ${pixelToRem(28)};
    line-height: ${pixelToRem(40)};
  }

  span strong {
    font-weight: 700;
  }
`;

export const ProductBox = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-white);
  box-shadow: -2px 2px 10px rgba(0, 0, 0, 0.05);
  border-radius: ${pixelToRem(8)};
  padding: ${pixelToRem(19)} ${pixelToRem(22)};
`;

export const CloseProduct = styled.button`
  position: absolute;
  top: -10px;
  right: -10px;
  display: flex;
  background-color: #000;
  padding: ${pixelToRem(5)};
  border-radius: 100%;
  cursor: pointer;
`;

export const ProductImg = styled.div`
  position: relative;
  max-height: ${pixelToRem(60)};
  max-width: ${pixelToRem(50)};
  height: 100%;
  width: 100%;

  & > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProductTitle = styled.span`
  font-weight: 400;
  font-size: ${pixelToRem(13)};
  line-height: ${pixelToRem(17)};
  color: #2c2c2c;
  max-width: ${pixelToRem(113)};
  width: 100%;
`;

export const Counter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0.3px solid #bfbfbf;
  border-radius: ${pixelToRem(4)};
`;

export const Down = styled.button`
  font-size: ${pixelToRem(12)};
  color: #000;
  background-color: transparent;
  user-select: none;
  border-right: 0.2px solid #bfbfbf;
  margin: ${pixelToRem(4)};
  padding: 0 ${pixelToRem(8)} 0 ${pixelToRem(4)};
  cursor: pointer;
`;

export const Up = styled.button`
  font-size: ${pixelToRem(12)};
  color: #000;
  background-color: transparent;
  user-select: none;
  border-left: 0.2px solid #bfbfbf;
  margin: ${pixelToRem(4)};
  padding: 0 ${pixelToRem(4)} 0 ${pixelToRem(8)};
  cursor: pointer;
`;

export const ValueCounter = styled.span`
  border: 0;
  line-height: ${pixelToRem(9.75)};
  font-size: ${pixelToRem(8)};
  padding: 0 ${pixelToRem(5)};
  text-align: center;
  color: #000;
  appearance: none;
  outline: 0;
`;

export const ProductPrice = styled.span`
  color: #000;
  font-weight: 700;
  font-size: ${pixelToRem(14)};
  line-height: ${pixelToRem(17)};
`;

export const TotalAndFinish = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export const Total = styled.div`
  display: flex;
  justify-content: space-between;
  padding: ${pixelToRem(19)} ${pixelToRem(22)};

  span {
    font-weight: 700;
    font-size: ${pixelToRem(28)};
    line-height: ${pixelToRem(15)};
    color: var(--color-white);
  }
`;

export const Finish = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #000;
  color: var(--color-white);
  height: ${pixelToRem(97)};
  width: 100%;
  font-weight: 700;
  font-size: ${pixelToRem(28)};
  line-height: ${pixelToRem(15)};
  cursor: pointer;
`;
