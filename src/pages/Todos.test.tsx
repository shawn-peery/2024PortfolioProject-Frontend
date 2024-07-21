import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import Todos from "./Todos"
import { render, screen } from "@testing-library/react";

describe("Todos Tests", () => {

  it("renders navigation", () => {
    render(<BrowserRouter><Todos /></BrowserRouter>)

    const navigation = screen.getByRole("navigation");
    expect(navigation).toBeInTheDocument();

  })

  it("renders footer", () => {

    render(<BrowserRouter><Todos /></BrowserRouter>)

    const footer = screen.getByRole("contentinfo");

    expect(footer).toBeInTheDocument();
  });


  it("renders todos header", () => {
    render(<BrowserRouter><Todos /></BrowserRouter>)

    const todosHeader = screen.getByRole("heading");

    expect(todosHeader).toBeInTheDocument();
    expect(todosHeader).toHaveTextContent("Todos");
  });

})
