import React from 'react';

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { TextInput } from '.';

describe('<TextInput />', () => {
  it('should have a value of searchValue', () => {
    const searchFn = jest.fn();

    render(<TextInput handleChange={searchFn} searchValue="" />);

    const input = screen.getByPlaceholderText(/Search/i);

    expect(input).toBeInTheDocument();
    expect(input.value).toBe('');
  });

  it('should call handleChange function on earch key pressed', () => {
    const searchFn = jest.fn();

    render(<TextInput handleChange={searchFn} />);

    const input = screen.getByPlaceholderText(/Search/i);

    const value = 'content';

    userEvent.type(input, value);

    expect(input.value).toBe(value);
    expect(searchFn).toBeCalledTimes(value.length);

    input.setSelectionRange(0, value.length);
    userEvent.type(input, `{backspace}`);
    expect(input.value).toBe('');
    expect(searchFn).toBeCalledTimes(value.length + 1);
  });

  it('should match snapshot', () => {
    const searchFn = jest.fn();

    const { container } = render(<TextInput handleChange={searchFn} searchValue="" />);

    expect(container).toMatchSnapshot();
  });
});
