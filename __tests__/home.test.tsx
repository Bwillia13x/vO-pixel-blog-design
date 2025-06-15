import { render, screen } from "@testing-library/react";
import Home from "../app/page";

describe("Home page", () => {
  it("renders welcome text", () => {
    render(<Home />);
    expect(
      screen.getByRole("heading", { name: /pixel wisdom/i })
    ).toBeInTheDocument();
  });
});
