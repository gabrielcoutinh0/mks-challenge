import { store } from "@/reducer/store";
import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Cart from "../Cart";
import Header from "../Header";
import { ProductsItem } from "./ProductsItem";

const renderWithContext = (Component: JSX.Element) => {
  render(<Provider store={store}>{Component}</Provider>);
};

const setStateMock = jest.fn();
describe("Header", () => {
  it("should render header element", () => {
    renderWithContext(
      <Header setIsOpen={() => setStateMock((prev: boolean) => !prev)} />
    );
    expect(screen.getByText("MKS" && "Sistemas")).toBeInTheDocument();
    expect(screen.getByTestId("shoppingCart")).toBeInTheDocument();
  });

  it("should open shopping cart when button is clicked", () => {
    renderWithContext(
      <Header setIsOpen={() => setStateMock((prev: boolean) => !prev)} />
    );
    const buttonShoppingCart = screen.getByRole("button");
    fireEvent.click(buttonShoppingCart);

    expect(
      renderWithContext(
        <Cart
          data={ProductsItem}
          isOpen={true}
          setIsOpen={() => setStateMock((prev: boolean) => !prev)}
        />
      )
    );
  });
});
