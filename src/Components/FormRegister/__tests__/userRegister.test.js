import { render, screen } from "@testing-library/react";
import FormRegister from "../index";

test("testando inputs", () => {
  render(<FormRegister />);

  const button = screen.getByRole("button");
  const inputName = screen.getByTestId("input/name");
  const inputEmail = screen.getByTestId("input/email");
  const inputAdress = screen.getByTestId("input/adress");
  const inputPassword = screen.getByTestId("input/password");
  const inputConfirmPassword = screen.getByTestId("input/confirmPassword");

  expect(button).toBeInTheDocument();
  expect(button).toBeEnabled();
  expect(inputName).toBeInTheDocument();
  expect(inputName).toBeEnabled();
  expect(inputEmail).toBeInTheDocument();
  expect(inputEmail).toBeEnabled();
  expect(inputAdress).toBeInTheDocument();
  expect(inputAdress).toBeEnabled();
  expect(inputPassword).toBeInTheDocument();
  expect(inputPassword).toBeEnabled();
  expect(inputConfirmPassword).toBeInTheDocument();
  expect(inputConfirmPassword).toBeEnabled();
});
