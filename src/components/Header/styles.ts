import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--color-primary);
  color: var(--color-white);
  height: ${pixelToRem(101)};
`;

export const Logo = styled.div`
  display: flex;
  gap: ${pixelToRem(10)};
  max-height: ${pixelToRem(30)};
  height: 100%;

  span {
    line-height: ${pixelToRem(19)};
    color: var(--color-white);
  }

  span:first-child {
    font-size: ${pixelToRem(40)};
    font-weight: 600;
    place-self: center;
  }

  span:last-child {
    font-size: ${pixelToRem(20)};
    font-weight: 300;
    place-self: end;
  }
`;

export const ShoppingCart = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  width: ${pixelToRem(90)};
  height: ${pixelToRem(45)};
  background-color: var(--color-white);
  border-radius: ${pixelToRem(8)};

  span {
    font-weight: 700;
    font-size: ${pixelToRem(18)};
  }
`;
