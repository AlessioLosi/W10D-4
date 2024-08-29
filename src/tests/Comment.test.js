import { fireEvent, render, screen } from '@testing-library/react'
import CommentArea from '../components/CommentArea'


describe('checking that commentarea work', () => {
  it('render input field at launch', () => {
    // 1)
    render(<CommentArea />)
    const searchInput = screen.getByRole('textbox')
    expect(searchInput).toBeInTheDocument()
  })

})