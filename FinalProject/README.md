# Tasty30m 🍳

**Tasty30m** is a CLI (Command Line Interface) tool that interacts with the
[Tasty API](https://tasty.co/api) to fetch and display recipes based on a given
ingredient. It’s a simple and practical solution for finding recipes quickly and
saving them for later use.

---

## Reason

I choose the Tasty API due to its vast collection of detailed and diverse
recipes. This offers an excellent opportunity to create a practical and useful
tool that can help users find quick and easy recipes, especially for those
interested in cooking but with limited time. Additionally, using a
well-structured and documented API facilitates development and integration,
allowing the project to be completed.

---

## Features ✨

- **Search for Recipes:** Enter an ingredient, and the tool will fetch and
  display 5 recipes that include it.
- **Save Recipes:** Use the `--save` flag to save the recipes as markdown files
  in a folder named after the ingredient.
- **User-Friendly:** Displays the recipes in a clean table format in the
  terminal.

---

## How It Works 🛠️

1. The user provides an ingredient as a command-line argument.
2. The tool fetches 5 recipes from the Tasty API that include the ingredient.
3. The recipes are displayed in a table format in the terminal.
4. If the `--save` flag is provided, the recipes are saved as markdown files in
   a folder named `savedRecipes/{ingredient}`.
5. If the `--help` flag is provided, will show you how to use.

---

## Installation

1. Make sure you have Node.js installed on your system.
2. Clone the repository to your local directory.
3. Navigate to the project directory in the terminal.
4. Install the necessary dependencies by running:
   ```bash
   npm install
   ```

## Usage 🚀

Run the tool using the following command:
`bash
    node src/index.js <ingredient> [--save]`

Examples:

1. Search for recipes with **chicken**:

   ```bash
   node src/index.js chicken
   ```

2. Search for recipes with **chocolate** and **save them**:
   ```bash
   node src/index.js chocolate --save
   ```

3. How to use:
   ```bash
   node src/index.js --help
   ```

Output:

- If the --save flag **is not** provided, the recipes **will be displayed** in a
  table format in the terminal.

- If the --save flag **is provided**, the recipes **will be saved** as markdown
  files in the savedRecipes/{ingredient} folder.

## Contributing 🤝

Contributions are welcome! If you have any suggestions, improvements, or bug
fixes, feel free to open an issue or submit a pull request.

## License 📜

This project is licensed under the MIT License. See the LICENSE file for
details.

## Acknowledgments 🙏

- Thanks to Tasty API for providing the public API used in this project.

- Inspired by the goal of solving real-world problems with CLI tools.
