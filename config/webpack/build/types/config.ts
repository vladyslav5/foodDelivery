
export type BuildMode = 'production' | 'development';

export type BuildPaths = {
	entry: string;
	html: string;
	build: string;
	src: string;
};
export type BuildEnv = {
	mode: BuildMode;
	port: number;
	apiURL:string

};
export type BuildOptions = {
	mode: BuildMode;
	paths: BuildPaths;
	isDev: boolean;
	port: number;
	apiURL:string
	project:'storybook' | 'frontend' | 'jest'

};
