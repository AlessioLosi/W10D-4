import { render, screen, fireEvent } from '@testing-library/react'
import Welcome from '../components/Welcome'

describe('Just Welcome test', () => {
  it('works correctly', () => {
    render(<Welcome />)

    const fraseWelcome = screen.getByRole('alert')

    expect(fraseWelcome).toBeInTheDocument()
  })
})