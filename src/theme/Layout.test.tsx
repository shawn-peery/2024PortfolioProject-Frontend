import { BrowserRouter } from "react-router-dom";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";
import Layout from "./Layout.tsx"

describe("Layout Tests", () => {
  it("Renders main nav", () => {
    render(<BrowserRouter><Layout /></BrowserRouter>);

    const mainNav = screen.getByRole("navigation");
    expect(mainNav).toBeInTheDocument();

    const anchorElement = screen.getByRole('link');
    expect(anchorElement).toBeInTheDocument();

    expect(anchorElement).toHaveAttribute('href', '/todos')
  });
})
