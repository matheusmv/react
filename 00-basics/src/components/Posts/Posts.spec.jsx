import React from 'react';

import { render, screen } from '@testing-library/react';
import { Posts } from '.';
import { postsMock as props } from './mock';

describe('<Posts />', () => {
  it('should render posts', () => {
    render(<Posts {...props} />);

    expect(screen.getAllByRole('heading', /title/i)).toHaveLength(4);
    expect(screen.getAllByRole('img', /title/i)).toHaveLength(4);
    expect(screen.getAllByText(/body/i)).toHaveLength(4);

    expect(screen.getByRole('img', { name: /title 1/i })).toHaveAttribute('src', 'img/img-1.png');
  });

  it('should not render posts', () => {
    render(<Posts />);

    expect(screen.queryByRole('heading', /title/i)).not.toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<Posts {...props} />);

    expect(container).toMatchSnapshot();
  });
});
