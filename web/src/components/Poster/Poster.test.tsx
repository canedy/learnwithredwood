import { render, screen } from '@redwoodjs/testing/web'

import { Poster } from './Poster'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Poster', () => {
  it('renders successfully', () => {
    // create const source image and alt text
    const src = './images/missing.jpg'
    const alt = 'missing'

    expect(() => {
      render(<Poster alt={alt} src={src} />)
    }).not.toThrow()
  })

  // test for image source with skip
  it('renders image source', () => {
    const src = './images/missing.jpg'
    const alt = 'missing'

    render(<Poster alt={alt} src={src} />)

    const component = screen.getByRole('img')

    expect(component).toHaveAttribute('src', src)
  })

  // write skip test for alt text

  it('renders alt text', () => {
    const src = './images/missing.jpg'
    const alt = 'missing'

    render(<Poster alt={alt} src={src} />)

    expect(screen.getByRole('img')).toHaveAttribute('alt', alt)
  })
})
