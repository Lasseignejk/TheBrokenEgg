interface OptionsProps {
	title: string;
	values: string[];
}
export const cuisineOptions: OptionsProps = {
	title: "cuisine",
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
	title: "diet",
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

export const intoleranceOptions: Object = {
	title: "intolerances",
	values: [
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

export const typeOptions: Object = {
	title: "type",
	values: [
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
