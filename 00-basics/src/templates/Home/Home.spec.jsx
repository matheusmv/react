import React from 'react';

import { rest } from 'msw';
import { setupServer } from 'msw/node';

import { render, screen, waitForElementToBeRemoved } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '.';

import { mockPhotos, mockPosts } from './mock';

const handlers = [
  rest.get('https://jsonplaceholder.typicode.com/posts', async (req, res, ctx) => {
    return res(ctx.json(mockPosts));
  }),
  rest.get('https://jsonplaceholder.typicode.com/photos', async (req, res, ctx) => {
    return res(ctx.json(mockPhotos));
  }),
];

const server = setupServer(...handlers);

describe('<Home />', () => {
  beforeAll(() => {
    server.listen();
  });

  afterEach(() => {
    server.resetHandlers();
  });

  afterAll(() => {
    server.close();
  });

  it('should render search, posts, back button and next button', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Not Found =(');

    expect.assertions(4);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/Search/i);
    expect(search).toBeInTheDocument();

    const images = screen.getAllByRole('img', { name: /title/i });
    expect(images).toHaveLength(12);

    const [back, next] = screen.getAllByRole('button', { name: /back|next/i });
    expect(back).toBeInTheDocument();
    expect(next).toBeInTheDocument();
  });

  it('should search for posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Not Found =(');

    expect.assertions(13);

    await waitForElementToBeRemoved(noMorePosts);

    const search = screen.getByPlaceholderText(/Search/i);
    expect(search).toBeInTheDocument();

    expect(screen.getByRole('heading', { name: '1 title 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '2 title 2' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '3 title 3' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: '13 title 13' })).not.toBeInTheDocument();

    userEvent.type(search, 'title 1');

    expect(screen.getByRole('heading', { name: '1 title 1' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: '2 title 2' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: '3 title 3' })).not.toBeInTheDocument();

    expect(screen.getByRole('heading', { name: 'Search value: title 1' })).toBeInTheDocument();

    search.setSelectionRange(0, 'title 1'.length);
    userEvent.type(search, `{backspace}`);

    expect(screen.getByRole('heading', { name: '1 title 1' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '2 title 2' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '3 title 3' })).toBeInTheDocument();

    userEvent.type(search, 'non-existent title');

    expect(screen.getByText('Not Found =(')).toBeInTheDocument();
  });

  it('should load more posts', async () => {
    render(<Home />);
    const noMorePosts = screen.getByText('Not Found =(');

    expect.assertions(7);

    await waitForElementToBeRemoved(noMorePosts);

    const [back, next] = screen.getAllByRole('button', { name: /back|next/i });
    expect(back).toBeInTheDocument();
    expect(next).toBeInTheDocument();

    expect(back).toBeDisabled();

    userEvent.click(next);
    expect(screen.queryByRole('heading', { name: '1 title 1' })).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '13 title 13' })).toBeInTheDocument();
    expect(back).toBeEnabled();
    expect(next).toBeDisabled();
  });
});
