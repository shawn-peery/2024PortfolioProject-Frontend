
import { describe, it } from 'vitest'
import { render, screen } from "@testing-library/react"
import MainNav from "./MainNav";

describe("Navbar Tests", () => {
	it("shows option for todos", () => {

		render(<MainNav />);

		const anchorElement = screen.getByRole("link");
		console.log(anchorElement)



	})

})
