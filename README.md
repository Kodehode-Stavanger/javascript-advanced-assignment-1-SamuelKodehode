[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/sEVQy64b)
# Creating a Movable Element

_Greetings JavaScript enthusiasts,_

In this assignment, let's dive into the practical side of JavaScript by crafting a movable HTML element. Your task is to enable the element to smoothly navigate the browser canvas. The specifications are straightforward:

### Functionality:

Arrow Key Navigation: Implement the ability to move the element in four directions – up, down, left, and right – using the arrow keys.

Click-to-Position: Allow the user to relocate the element instantly by clicking anywhere on the page.

### Implementation Tips:

Utilize `addEventListener()` to capture arrow key and click events.
Apply `position: absolute` to grant the element full freedom of movement.

### Optional Challenges:

Feel free to enhance your implementation with optional features:

- Ensure the element stays within the visible screen area.
- Implement collision detection or introduce obstacles for added complexity.

### Styling:

While the primary focus is on functionality, you have the liberty to style the element according to your preferences. A simple black square suffices, but feel free to inject your creativity into the design.

### Task Overview:

Set up event listeners for arrow keys and mouse clicks.
Implement logic to update the element's position based on the events.
Optionally add extra features or constraints to elevate the challenge.
Remember, this exercise aims to reinforce your understanding of event handling and manipulation of HTML elements using JavaScript. Keep your code organized, and have a smooth coding journey! If you find yourself in need of a loop, use the opportunity to practice the high level array methods we looked at during the last lecture.

**Remember to enable GitHub Pages on your submission**

Best of luck on your coding adventure!
# TypeScript Project Template Readme

## Overview

This TypeScript project template is designed to kickstart your TypeScript development with proper configuration for the TypeScript Compiler (`tsc`) and Prettier. Below, you'll find a brief explanation of the key configuration files and their purpose.

## Files

### `tsconfig.json`

The `tsconfig.json` file contains the configuration settings for the TypeScript Compiler (`tsc`). Here's a breakdown of the key options:

- **target:** Specifies the ECMAScript target version (ESNext in this case).
- **lib:** Defines the libraries to include during compilation (ESNext and DOM).
- **outDir:** Specifies the output directory for compiled files.
- **rootDir:** Indicates the root directory of TypeScript source files.
- **strict:** Enables strict type-checking options.
- **esModuleInterop:** Allows default imports from CommonJS modules.
- **module:** Specifies the module system (ESNext in this case).
- **removeComments:** Removes comments from the generated output.
- **sourceMap:** Generates source map files for better debugging.

### `.prettierrc`

The `.prettierrc` file configures Prettier, a code formatter for maintaining consistent code style. Here's an overview of the configuration options:

- **arrowParens:** Enforces parentheses around a sole arrow function parameter.
- **bracketSameLine:** Ensures multiline object literals have the opening bracket on the same line.
- **bracketSpacing:** Adds spaces between brackets in object literals.
- **endOfLine:** Defines the line ending style (LF).
- **jsxSingleQuote:** Uses single quotes for JSX attributes.
- **printWidth:** Specifies the maximum line length before wrapping.
- **semi:** Omits semicolons at the end of statements.
- **useTabs:** Indents with tabs instead of spaces.
- **trailingComma:** Controls trailing commas in object literals and arrays.
- **tabWidth:** Sets the number of spaces per tab.
- **singleQuote:** Uses single quotes instead of double quotes for strings.
- **htmlWhitespaceSensitivity:** Defines sensitivity to HTML whitespace (strict).

## Installation

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/your-project.git
   ```

2. **Navigate to Project Directory:**
   ```bash
   cd your-project
   ```

3. **Install Dependencies:**
   ```bash
   npm install
   ```

4. **Install Prettier:**
   ```bash
   npm install --save-dev prettier
   ```

## Usage

1. **Run TypeScript Compiler (tsc):**
    - To compile TypeScript files, run:
      ```bash
      npx tsc
      ```

2. **Watch Mode:**
    - To run TypeScript Compiler in watch mode, use:
      ```bash
      npx tsc --watch
      ```

3. **Format Code with Prettier:**
    - To format your code using Prettier, run:
      ```bash
      npm run format
      ```

## Additional Notes

- Customize the `tsconfig.json` and `.prettierrc` files based on your project requirements.
- Refer to the official [TypeScript Compiler Options documentation](https://www.typescriptlang.org/tsconfig) and [Prettier Configuration documentation](https://prettier.io/docs/en/configuration.html) for more details.

Now your TypeScript project is ready for development with proper TypeScript and Prettier configurations. Happy coding!
```
