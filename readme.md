# The Broken Egg

![The Broken Egg Homepage](/public/TheBrokenEggHome.png)

Welcome to <b>The Broken Egg</b>, a recipe-searching site! Users can browse a few select recipes on the home page, or they can search for something more specific.

<b>The Broken Egg</b> was built as my React/Redux project for my bootcamp with DigitalCrafts so there isn't a backend.

Click [here](https://medium.com/@jayelonlasseigne/the-broken-egg-react-redux-typescript-project-7358591fc9e3) to read the Medium article I wrote on this project.

<br>

## Languages / Technologies I Used

- React
- Redux
- Vite
- Redux Toolkit
- TypeScript
- [Toastify](https://www.npmjs.com/package/react-toastify)
- API from [Spoonacular](https://spoonacular.com/food-api)
- Tailwind CSS
- Figma

<br>

## Installation

Fork your own copy of the code, then run:

    npm i

Then, head to Spoonacular and sign up for an API key. You'll need to enter it into the following lines for the site to work. All of the lines should look something like this:

    const url: string = `https://api.spoonacular.com/recipes/${id}/information?apiKey=` + "YOUR_API_KEY"

    const url: string = `https://api.spoonacular.com/recipes/${id}/analyzedInstructions?apiKey=` + "YOUR_API_KEY"

| Page                        | Lines           |
| --------------------------- | --------------- |
| Carousel/CarouselItem.tsx   | 30 and 39       |
| Home/HomeFeaturedRecipe.tsx | 39 and 48       |
| Search/SearchPage.tsx       | line 71         |
| Search/SearchRecipeCard.tsx | lines 21 and 32 |

<br>

## What I Learned

The biggest challenge in this project was self-inflicted -- working in TypeScript. We'd only had a brief introduction to TypeScript on an extra day in my bootcamp, so I definitely had to hit the ground running with this project. Everyday, it was another error to research, another session of debugging with my instructor. I honestly think I spent more time figuring out TypeScript than anything else on this project! That being said, I think challenging myself to code in TypeScript helped me understand JavaScript and React better and I don't regret it.

<br>

## Looking Forward

There are plenty of things I would like to add in the future. Probably the first on the list is React Query. I had looked into it a little before the project started, but the learning curve on TypeScript proved to be too much to do both.

Also on the list is functionality for a shopping list. I think it would be cool if users could browse recipes, find one they like, then add it to their shopping list, kind of like a cart on an e-commerce site. They could then screenshot it or export it somewhere for them to reference later. If there was a backend in this project, it could also be stored there so the user could access it anywhere.

The rest of the things I'd like to add were things I didn't because of the API -- Spoonacular only allows for 150 quota points a day before you have to pay. That, plus the fact that some calls are worth more than 1 point, meant I had to scrap some functionality so they wouldn't all be used up in a couple of searches. On the list is nutrition information, more search results, and dynamically coding the home screen.

<br>

## Helpful Resources

I used [this]("https://www.youtube.com/watch?v=flItyHiDm7E&t=162s") tutorial to help me with the hamburger navbar on mobile sizes.

[This]("https://www.youtube.com/watch?v=gtZevjgUkcY") tutorial helped me understand and make the carousels on the home page.

I got all the cute artwork from [Irasutoya]("https://www.irasutoya.com/").

<br>

## Styling

### Colors

![Colors used on The Broken Egg](/public/TheBrokenEggColors.png)

| Hex Code | Used For   |
| -------- | ---------- |
| #ff9d00  | Main       |
| #fcfaf2  | Background |
| #523200  | Text       |
| #ffd600  | Accent 1   |
| #ffd982  | Accent 2   |

<br>

### Typefaces

![Typefaces used on The Broken Egg](/public/TheBrokenEggTypefaces.png)

| Name and Link to Google Fonts                                  | Used For  |
| -------------------------------------------------------------- | --------- |
| [Grandstander](https://fonts.google.com/specimen/Grandstander) | Headers   |
| [Nunito](https://fonts.google.com/specimen/Nunito)             | Body Text |
