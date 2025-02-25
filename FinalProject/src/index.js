import axios from "axios";
import process from "node:process";
import fs from "node:fs";

const fetchRecipes = async (query) => {
    const options = {
        method: "GET",
        url: "https://tasty.p.rapidapi.com/recipes/list?from=0&size=5&tags=under_30_minutes",
        params: { q: query },
        headers: {
            "X-RapidAPI-Key":
                "428a93181bmsh468fc09d1813ab5p1b7c07jsna4d9c64c0d6d",
            "X-RapidAPI-Host": "tasty.p.rapidapi.com",
        },
    };

    try {
        const response = await axios.request(options);
        return response.data;
    } catch (error) {
        console.error("Error fetching recipes:", error);
        return null;
    }
};

const main = async () => {
    const query = process.argv[2];
    const saveFlag = process.argv.includes("--save");

    if (!query) {
        console.log("Please provide an ingredient or recipe query.");
        return;
    }

    console.log(`Searching for recipes with: ${query}`);
    const recipesData = await fetchRecipes(query);
    if (recipesData) {
        recipesData.results.forEach((recipe, index) => {
            console.log(`\nRecipe: ${index + 1} 🍽️`);
            console.log(`Name: 💥${recipe.name}`);
            console.log(`Description: 📝${recipe.description}`);

            if (saveFlag) {
                const recipeMarkdown = `# Recipe ${
                    index + 1
                }\n\n**Name**: ${recipe.name}\n\n**Description**: ${recipe.description}\n`;
                fs.writeFileSync(
                    `savedRecipes/Recipe_${index + 1}.md`,
                    recipeMarkdown,
                );
                console.log(
                    `Recipe ${index + 1} saved to Recipe_${index + 1}.md`,
                );
            }
        });
    } else {
        console.log("Failed to find recipes");
    }
};
main();

//CONSOLE.TABLE TENHO QUE FAZER
