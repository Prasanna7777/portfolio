import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App", () => {
  it("shows the name, experience and both projects", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 1, name: /Lakshmi Prasanna/ })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Experience" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Claim verification with RAG" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Customer churn prediction" })).toBeInTheDocument();
  });

  it("has a research section with the thesis and both papers", () => {
    render(<App />);
    expect(screen.getByRole("heading", { level: 2, name: "Research" })).toBeInTheDocument();
    expect(screen.getByText(/Grounded findings generation/)).toBeInTheDocument();
    expect(screen.getByText("CENTCON 2022 (IEEE)")).toBeInTheDocument();
    expect(screen.getByText("INDICON 2022 (IEEE)")).toBeInTheDocument();
  });

  it("has a skip link and a main landmark", () => {
    render(<App />);
    expect(screen.getByRole("link", { name: "Skip to content" })).toHaveAttribute("href", "#main");
    expect(screen.getByRole("main")).toBeInTheDocument();
  });
});