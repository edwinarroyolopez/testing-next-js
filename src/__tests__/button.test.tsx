import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from '@components/ui/button';


test('debe renderizar el botón con el texto correcto', () => {
  const { getByText } = render(<Button onClick={() => {}} label="Click me" />);
  expect(getByText('Click me')).toBeInTheDocument();
});

test('debe llamar a onClick cuando se hace clic', () => {
  const handleClick = jest.fn();
  const { getByText } = render(<Button onClick={handleClick} label="Click me" />);
  fireEvent.click(getByText('Click me'));
  expect(handleClick).toHaveBeenCalledTimes(1);
});
