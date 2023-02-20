// Search.tsx
export interface JSONSearch {
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

// RecipeCard.tsx

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
	sourceURL: string;
	spoonacularScore: number;
	extendedIngredients: [
		{
			name: string;
			original: string;
		}
	];
}

// InstructionsContainer.tsx

export interface InstructionProps {
	number?: number;
	step?: string[];
}
