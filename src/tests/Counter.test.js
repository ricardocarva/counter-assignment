// import necessary react testing library helpers here
// import the Counter component here
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import Counter from "../components/Counter.js";

beforeEach(() => {
  // Render the Counter component here
  render( <Counter />);
   
})

test('renders counter message', () => {
  // Complete the unit test below based on the objective in the line above
  const counterDisplay = screen.getByText(/Counter/i);
  expect(counterDisplay).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Complete the unit test below based on the objective in the line above


  const countBeforeAction = screen.getByTestId("count");
    // Note to self: toHaveTextContent is used to check if the specific text content exists in the elements. toBeInTheDocument does not take a value to check against; it simply asserts that an element is present in the document.  So, I used toHaveTextContent instead.
  expect(countBeforeAction).toHaveTextContent("0");
});

test('clicking + increments the count', () => {
  // Complete the unit test below based on the objective in the line above

  const incrementButton = screen.getByText("+");
  fireEvent.click(incrementButton);

  const countAfterAction = screen.getByTestId("count");
  expect(countAfterAction).toHaveTextContent("1");  
});

test('clicking - decrements the count', () => {
  // Complete the unit test below based on the objective in the line above


  const incrementButton = screen.getByText("+");
  // Loop to click the increment button three times
  for (let i = 0; i < 3; i++) {
    fireEvent.click(incrementButton);
  }
  // count should be 3 now. Lets decrease it by 1
  const decrementButton = screen.getByText("-");
  fireEvent.click(decrementButton);

  const countAfterAction = screen.getByTestId("count");
  expect(countAfterAction).toHaveTextContent("2");  
});
