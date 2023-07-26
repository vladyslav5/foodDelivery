import {classNames} from './classNames'


describe('classNames', () => {
	test('with one param', () => {
		expect(classNames('someClass',{},[])).toBe('someClass')
	})
	test('with additional classes', () => {
		const expected  = 'someClass someClass1 someClass2'
		expect(classNames('someClass',{},['someClass1','someClass2'])).toBe(expected)
	})
	test('with mods', () => {
		const expected  = 'someClass hovered scrollable someClass1 someClass2'
		expect(classNames('someClass',{hovered:true,scrollable:true},['someClass1','someClass2'])).toBe(expected)
	})
	test('with mods false', () => {
		const expected  = 'someClass  scrollable someClass1 someClass2'
		expect(classNames('someClass',{hovered:false,scrollable:true},['someClass1','someClass2'])).toBe(expected)
	})

})
