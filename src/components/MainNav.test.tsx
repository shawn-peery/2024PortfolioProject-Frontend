import { describe, expect, it } from 'vitest'
import { render, screen } from "@testing-library/react"

import MainNav from "./MainNav";

describe("Navbar Tests", () => {
	it("shows option for todos", () => {

		render(<MainNav />);

		const anchorElement = screen.getByRole("link");
		console.log(anchorElement)

		expect(anchorElement).toBeInTheDocument();

		expect(anchorElement).toHaveAttribute("href", "/todos");



	})

})
