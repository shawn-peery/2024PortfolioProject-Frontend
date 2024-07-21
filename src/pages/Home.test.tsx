import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Home from "./Home.tsx"
import { render, screen } from "@testing-library/react"

describe("Home Page Tests", () => {
  it("renders main nav", () => {

    render(<BrowserRouter><Home /></BrowserRouter>);

    const anchorElement = screen.getByRole("navigation");
    expect(anchorElement).toBeInTheDocument();

  })
})
