import { store } from "@/reducer/store";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import "@testing-library/jest-dom";
import Cart from "../Cart";
import { ProductsItem } from "./ProductsItem";

function renderWithContext(Component: JSX.Element) {
  render(<Provider store={store}>{Component}</Provider>);
}

const setStateMock = jest.fn();

describe("Cart", () => {
  it("should cart not start by default", () => {
    expect(
      renderWithContext(
        <Cart
          data={ProductsItem}
          isOpen={true}
          setIsOpen={() => setStateMock((prev: boolean) => !prev)}
        />
      )
    ).toBeFalsy();
  });
});
