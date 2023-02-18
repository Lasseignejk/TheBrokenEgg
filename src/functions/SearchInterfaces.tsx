export interface JSON {
	results: [
		{
			id: number;
			title: string;
			image: string;
			imageType: string;
		}
	];
}

export interface RecipeProps {
	id?: number;
	title?: string;
	image?: string;
	imageType?: string;
}

export interface OptionsProps {
	title: string;
	values: string[];
}
