import { screen, render } from "@testing-library/react";
import Great from "./Great";
import '@testing-library/jest-dom';

test("Greate renders correctly", () => {
    render(<Great />);
    const textElement = screen.getByText("hello");
    expect(textElement).toBeInTheDocument();
})

test("great renders with name", () => {
    render(<Great name="Osama" />);
    const textElement = screen.getByText("hello Osama");
    expect(textElement).toBeInTheDocument();

})