declare module '*.scss' {
	type IClassNames = Record<string, string>;

	const classNames: IClassNames
	export = classNames;
}

declare module '*.svg' {
	import type React from 'react'
	const SVG: React.VFC<React.SVGProps<SVGSVGElement>>
	export default SVG
}
type DeepPartial<T> = T extends object ?
	{
		[ P in keyof T ]?: DeepPartial<T[ P ]>;
	} : T;

declare const __IS_DEV__: boolean
declare const __API__: string
declare const __PROJECT__: 'storybook' | 'frontend' | 'jest'

declare module '*.jpg';