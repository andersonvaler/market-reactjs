import { render, screen } from "@testing-library/react";
import Home from "../index";

test("testando botoes", () => {
  render(<Home />);
  const botaoUm = screen.getByText(/sou cliente/i);
  const botaoDois = screen.getByText(/Tenho um negócio/i);

  expect(botaoUm).toBeInTheDocument();
  expect(botaoDois).toBeInTheDocument();
  expect(botaoUm).toBeEnabled();
  expect(botaoDois).toBeEnabled();
});
