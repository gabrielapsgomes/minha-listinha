import { render, screen } from '@testing-library/react'
import Header from './Header'

describe('Header component', () => {
    it('should render the correct header', async () => {
        render(<Header />)

        const logoImage = await screen.findByAltText('logotipo minha listinha com imagem de avião')
        expect(logoImage).toBeInTheDocument()
    })
})