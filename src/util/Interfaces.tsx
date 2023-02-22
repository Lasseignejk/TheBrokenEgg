export interface RecipeProps {
	id?: number;
	title?: string;
	image?: string;
	imageType?: string;
}

export interface JSONInstructions {
	name?: string;
	steps?: [
		{
			number?: number;
			step?: string[];
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
	sourceUrl: string;
	spoonacularScore: number;
	extendedIngredients: [
		{
			measures: {
				metric: {
					amount: number;
					unitLong: string;
					unitShort: string;
				};
				us: {
					amount: number;
					unitLong: string;
					unitShort: string;
				};
			};
			name: string;
			original: string;
			originalName: string;
			unit: string;
		}
	];
}

export interface InstructionProps {
	number?: number;
	step?: string[];
}
