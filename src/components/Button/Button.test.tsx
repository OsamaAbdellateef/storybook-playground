import { screen, render } from "@testing-library/react";
import Button from "./Button";
import "@testing-library/jest-dom";

test("testing the variants", () => {
    render(<Button variant="primary">
        text
    </Button>);
    const buttonElement = screen.getByText("text");
    expect(buttonElement).toBeInTheDocument();
    // expect(buttonElement).toHaveStyle(`background-color: #008cba`)
    expect(buttonElement).toHaveStyle({ color: "ButtonText" })
})