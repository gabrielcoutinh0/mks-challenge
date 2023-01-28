import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const Container = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--color-footer);
  width: 100%;
  height: ${pixelToRem(34)};
`;

export const TextFooter = styled.span`
  font-weight: 400;
  font-size: ${pixelToRem(12)};
  line-height: ${pixelToRem(14)};
  color: #000;
`;
