import { fireEvent, render, screen } from '@testing-library/react'
import AllTheBooks from './AllTheBooks';

describe('testing the BookList lenght', () => {
  it('testing the number of card', () => {
    render(<AllTheBooks books={books} />);

    const cards = screen.queryAllByTestId('image')
    expect(cards).toBeGreaterThan(0)
  });
});
