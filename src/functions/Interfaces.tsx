// Search.tsx
export interface RecipeParamsState {
	cuisine?: string;
	diet?: string;
	intolerances?: string;
	type?: string;
	includeIngredients?: string;
	excludeIngredients?: string;
	maxReadyTime?: string;
}

export const formatParams = (recipeParams: RecipeParamsState) => {
	const formattedParams: string[] = [];
	for (const param in recipeParams) {
		formattedParams.push(
			param + "=" + recipeParams[param as keyof typeof recipeParams]
		);
	}
	return formattedParams.join("&");
};

export interface Event {
	target: HTMLSelectElement | HTMLInputElement;
}

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

export const showAdvancedSearch = () => {
	const advancedSearchDiv = document.querySelector(
		".advanDiv"
	) as HTMLDivElement;
	advancedSearchDiv.classList.toggle("show");
	const advancedSearchTitle = document.querySelector(
		".advanTitle"
	) as HTMLDivElement;
	advancedSearchTitle.classList.toggle("changeRadius");
};

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
