export interface RecipeProps {
	id?: number;
	title?: string;
	image?: string;
	imageType?: string;
}

export interface JSONInstructions {
	name: string;
	steps: [
		{
			ingredients: [
				{
					image: string;
					name: string;
				}
			];
			number: number;
			step: string;
		}
	];
}

export interface JSONInformation {
	id: number;
	title: string;
	image: string;
	servings: number;
	readyInMinutes: number;
	sourceName: string;
	sourceURL: string;
	spoonacularScore: number;
	extendedIngredients: [
		{
			name: string;
			original: string;
		}
	];
}
