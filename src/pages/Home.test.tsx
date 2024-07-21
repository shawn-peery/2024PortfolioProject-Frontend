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

  it("has a welcome header", () => {

    render(<BrowserRouter><Home /></BrowserRouter>);

    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    expect(headingElement).toHaveTextContent("Welcome to Shawn's Portfolio Project")

  })

  it("renders a navigation", () => {
    render(<BrowserRouter><Home /></BrowserRouter>)

    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();
  })


  it("renders a footer", () => {
    render(<BrowserRouter><Home /></BrowserRouter>)

    const footer = screen.getByRole("contentinfo");
    expect(footer).toBeInTheDocument();
  })
})
