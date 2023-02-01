import { store } from "@/reducer/store";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import Products from "../Products";
import { ProductsItem } from "./ProductsItem";
import "@testing-library/jest-dom";

describe("Product", () => {
  it("should render products element", async () => {
    render(
      <Provider store={store}>
        <Products data={ProductsItem} loading={false} />
      </Provider>
    );
    for (let product of ProductsItem)
      await screen.findByRole("heading", { name: product.name });
  });
});
