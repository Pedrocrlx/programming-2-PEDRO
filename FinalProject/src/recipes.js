import axios from "axios";

/**
 * Fetches recipes based on the provided query.
 * @param {string} query - The ingredient or recipe query to search for.
 * @returns {Promise<Object|null>} - A promise that resolves to the recipes data or null if an error occurs.
 */
export const fetchRecipes = async (query) => {
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
