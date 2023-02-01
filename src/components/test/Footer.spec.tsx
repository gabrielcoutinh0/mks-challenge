import { render } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer", () => {
  it("should render footer element", () => {
    const { getByText } = render(<Footer />);
    expect(
      getByText("MKS sistemas © Todos os direitos reservados")
    ).toBeTruthy();
  });
});
