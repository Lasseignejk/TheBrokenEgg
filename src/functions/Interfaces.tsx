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

// Recipe.tsx
export interface Ingredients {
	measures?: {
		metric?: {
			amount?: number;
			unitLong?: string;
			unitShort?: string;
		};
		us: {
			amount?: number;
			unitLong?: string;
			unitShort?: string;
		};
	};
	name?: string;
	original?: string;
	originalName?: string;
	unit?: string;
}

// InstructionsContainer.tsx

export interface InstructionProps {
	number?: number;
	step?: string[];
}
