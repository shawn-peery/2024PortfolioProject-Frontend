import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Footer from "./Footer.tsx"

describe("Footer Test", () => {
	it("renders footer text", () => {

		render(<Footer />)

		const footerMessage = screen.getByRole("contentinfo");

		expect(footerMessage).toBeInTheDocument();

		expect(footerMessage).toHaveTextContent("Made by Shawn Peery - shawn.w8465@gmail.com - 801-503-2828")

	});
});
