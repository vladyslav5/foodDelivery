import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from 'widgets/Sidebar'
import {renderWithTranslation} from 'shared/lib/helpers/tests/renderWithTranslation/renderWithTranslation'




describe('Sidebar', () => {
	test('in document', () => {
		renderWithTranslation(<Sidebar/>)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('button', () => {
		renderWithTranslation(<Sidebar/>)


		const toggleBtn = screen.getByTestId('toggle')
		const sidebar = screen.getByTestId('sidebar')
		expect(sidebar).toBeInTheDocument()
		expect(sidebar).toHaveClass('collapsed')
		fireEvent.click(toggleBtn)
		expect(sidebar).not.toHaveClass('collapsed')
	})


})
