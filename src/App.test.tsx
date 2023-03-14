import { render, screen } from "@testing-library/react";
import App from "./App";
import '@testing-library/jest-dom';

test("render pargraph", () => {
    render(<App />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
    expect(textElement).toBeVisible();
});

