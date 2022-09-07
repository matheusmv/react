import React from 'react';

import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Button } from '.';

describe('<Button />', () => {
  it("should render 2 buttons with the text 'back' & 'next'", () => {
    const backFn = jest.fn();
    const nextFn = jest.fn();

    render(<Button onClick={backFn} text="back" />);
    render(<Button onClick={nextFn} text="next" />);

    expect.assertions(7);

    const buttons = screen.getAllByRole('button', { name: /back|next/i });

    expect(buttons.length).toBe(2);

    const backButton = buttons[0];
    const nextButton = buttons[1];

    expect(backButton).toBeInTheDocument();
    expect(backButton).toHaveClass('button');
    expect(backButton).toHaveTextContent('back');

    expect(nextButton).toBeInTheDocument();
    expect(nextButton).toHaveClass('button');
    expect(nextButton).toHaveTextContent('next');
  });

  it('should call function on button click', () => {
    const backFn = jest.fn();
    const nextFn = jest.fn();

    render(<Button text="back" onClick={backFn} />);
    render(<Button text="next" onClick={nextFn} />);

    expect.assertions(3);

    const buttons = screen.getAllByRole('button', { name: /back|next/i });

    expect(buttons.length).toBe(2);

    const backButton = buttons[0];
    const nextButton = buttons[1];

    fireEvent.click(backButton);
    expect(backFn).toHaveBeenCalled();

    userEvent.click(nextButton);
    expect(nextFn).toHaveBeenCalled();
  });

  it("should be disabled when 'disabled' is true", () => {
    const backFn = jest.fn();

    render(<Button onClick={backFn} text="back" disabled />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /back/i });

    expect(button).toBeDisabled();
  });

  it("should be enabled when 'disabled' is false", () => {
    const backFn = jest.fn();

    render(<Button onClick={backFn} text="back" disabled={false} />);

    expect.assertions(1);

    const button = screen.getByRole('button', { name: /back/i });

    expect(button).toBeEnabled();
  });

  it('should match snapshot', () => {
    const backFn = jest.fn();

    const { container } = render(<Button text="back" disabled={false} onClick={backFn} />);

    expect(container).toMatchSnapshot();
  });
});
