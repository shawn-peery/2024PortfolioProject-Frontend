import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import MainNav from "./MainNav";
import { BrowserRouter } from 'react-router-dom';

describe("Navbar Tests", () => {
	it("shows option for todos", () => {

		render(<BrowserRouter><MainNav /></BrowserRouter>);

		const anchorElement = screen.getByRole("link");

		expect(anchorElement).toBeInTheDocument();

		expect(anchorElement).toHaveAttribute("href", "/todos");



	})

})
