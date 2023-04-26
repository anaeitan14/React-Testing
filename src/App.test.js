import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "./App";

test("TC.1 All inputs should be initially empty", () => {
  render(<App />);
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  const confirm_password = screen.getByLabelText(/confirm password/i);
  expect(emailInputElement.value).toBe("");
  expect(passwordInputElement.value).toBe("");
  expect(confirm_password.value).toBe("");
});

/*  
test('TC.2 All inputs should be initially empty', () => {
    render(<App/>);
    const allInputs = screen.getAllByRole('textbox'); // Returns an array
    for(let i=0;i<allInputs;i++) {
        expect(allElements[i].value).toBe("");
    }
}) 
*/

test("TC.3 Enter an email address in the email input", () => {
    render(<App/>);
    const emailInput = screen.getByRole('textbox', {name:/email/i});
    userEvent.type(emailInput, "Testing");
    expect(emailInput.value).toBe("Testing");
});
