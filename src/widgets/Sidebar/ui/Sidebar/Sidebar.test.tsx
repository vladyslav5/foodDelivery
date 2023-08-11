import {fireEvent, screen} from '@testing-library/react'
import {Sidebar} from './Sidebar'
import {componentRender} from 'shared/config/test/componentRender'




describe('Sidebar', () => {
	test('in document', () => {
		componentRender(<Sidebar/>)
		expect(screen.getByTestId('sidebar')).toBeInTheDocument()
	})
	test('button', () => {
		componentRender(<Sidebar/>)
		const toggleBtn = screen.getByTestId('toggle')
		const sidebar = screen.getByTestId('sidebar')
		expect(sidebar).toBeInTheDocument()
		expect(sidebar).toHaveClass('collapsed')
		fireEvent.click(toggleBtn)
		expect(sidebar).not.toHaveClass('collapsed')
	})


})
