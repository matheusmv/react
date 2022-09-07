import React from 'react';

import { render, screen } from '@testing-library/react';
import { PostCard } from '.';
import { postCardPropsMock as props } from './mock';

describe('<PostCard />', () => {
  it('should render PostCard correctly', () => {
    // const { debug } = render(<PostCard {...props} />);
    // debug();

    render(<PostCard {...props} />);

    expect(screen.getByRole('img', props.title)).toBeInTheDocument();
    expect(screen.getByRole('img', props.title)).toHaveAttribute('src', props.cover);
    expect(screen.getByRole('heading', `${props.id} ${props.title}`)).toBeInTheDocument();
    expect(screen.getByText(props.body)).toBeInTheDocument();
  });

  it('should match snapshot', () => {
    const { container } = render(<PostCard {...props} />);

    expect(container).toMatchSnapshot();
  });
});
