interface FeaturedRecipe {
	id: number;
	title: string;
	image: string;
	servings: number;
	readyInMinutes: number;
	sourceName: string;
	cuisines: string[];
	dishTypes: string[];
}
export const featuredRecipe: FeaturedRecipe = {
	sourceName: "Foodista",

	id: 663669,
	title: "Tonkatsu",
	readyInMinutes: 45,
	servings: 8,

	image: "https://spoonacular.com/recipeImages/663669-556x370.jpg",

	cuisines: ["Japanese", "Asian"],
	dishTypes: ["lunch", "main course", "main dish", "dinner"],
};
