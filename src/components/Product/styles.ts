import styled from "styled-components";
import pixelToRem from "../../utils/pxToRem";

export const Section = styled.section`
  display: grid;
  grid-template-columns: repeat(1fr);
  justify-items: center;
  gap: ${pixelToRem(25)};
  height: 100vh;
  padding: 0 60px;
  margin: 40px 0;

  @media (min-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
    margin: 120px auto;
    max-width: var(--max-width);
  }
`;

export const Article = styled.article`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: var(--color-white);
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.135216);
  border-radius: ${pixelToRem(8)};
`;

export const Info = styled.div`
  padding: ${pixelToRem(14)};
`;

export const Img = styled.div`
  position: relative;
  width: ${pixelToRem(189)};
  height: ${pixelToRem(138)};
  margin: auto;
`;

export const NameAndPrice = styled.div`
  display: flex;
  justify-content: space-between;
  gap: ${pixelToRem(10)};
  padding-bottom: ${pixelToRem(8)};
`;

export const Name = styled.h2`
  font-weight: 400;
  line-height: ${pixelToRem(19)};
  font-size: ${pixelToRem(16)};
  color: #2c2c2c;
`;

export const Price = styled.span`
  background-color: #373737;
  border-radius: 5px;
  color: var(--color-white);
  font-weight: 700;
  font-size: ${pixelToRem(15)};
  line-height: ${pixelToRem(15)};
  align-self: center;
  padding: ${pixelToRem(4)} ${pixelToRem(6)};
`;

export const Description = styled.p`
  font-weight: 300;
  font-size: ${pixelToRem(10)};
  line-height: ${pixelToRem(12)};
  color: #2c2c2c;
  //padding-bottom: ${pixelToRem(32)};
`;

export const Button = styled.button`
  display: flex;
  gap: ${pixelToRem(17)};
  justify-content: center;
  align-items: center;
  border-radius: 0 0 ${pixelToRem(8)} ${pixelToRem(8)};
  background-color: var(--color-primary);
  height: ${pixelToRem(32)};
  width: 100%;
  font-weight: 600;
  font-size: ${pixelToRem(14)};
  line-height: ${pixelToRem(18)};
  color: var(--color-white);
`;
