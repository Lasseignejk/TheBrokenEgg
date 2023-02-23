interface OptionsProps {
	values: string[];
}
export const cuisineOptions: OptionsProps = {
	values: [
		"---",
		"African",
		"American",
		"British",
		"Cajun",
		"Caribbean",
		"Chinese",
		"Eastern European",
		"European",
		"French",
		"German",
		"Greek",
		"Indian",
		"Irish",
		"Italian",
		"Japanese",
		"Jewish",
		"Korean",
		"Latin American",
		"Mediterranean",
		"Mexican",
		"Middle Eastern",
		"Nordic",
		"Southern",
		"Spanish",
		"Thai",
		"Vietnamese",
	],
};

export const dietOptions: OptionsProps = {
	values: [
		"---",
		"Gluten Free",
		"Ketogenic",
		"Vegetarian",
		"Lacto-Vegetarian",
		"Ovo-Vegetarian",
		"Vegan",
		"Pescetarian",
		"Paleo",
		"Primal",
		"Low FODMAP",
		"Whole30",
	],
};

export const intoleranceOptions: OptionsProps = {
	values: [
		"---",
		"Dairy",
		"Egg",
		"Gluten",
		"Grain",
		"Peanut",
		"Seafood",
		"Sesame",
		"Shellfish",
		"Soy",
		"Sulfite",
		"Tree Nut",
		"Wheat",
	],
};

export const typeOptions: OptionsProps = {
	values: [
		"---",
		"Appetizer",
		"Beverage",
		"Bread",
		"Breakfast",
		"Dessert",
		"Drink",
		"Fingerfood",
		"Main Course",
		"Marinade",
		"Salad",
		"Sauce",
		"Side Dish",
		"Snack",
		"Soup",
	],
};

export default cuisineOptions;
