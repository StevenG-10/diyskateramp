# Project Plan: diyskateramp

## 1. Introduction: What We're Building

Welcome to the project plan for **diyskateramp**! The goal is to build a cool, retro-style website to show off your awesome web apps. Think of this website as a virtual art gallery or arcade for your creations.

The style will be black and white, inspired by 1980s video games like "Skate or Die!" and classic skateboard art. This plan will guide you step-by-step through the whole process, explaining everything from the ground up.

## 2. The File Cabinet: Our Project's Folder Structure

Every project needs to be organized. We'll create a main folder called `diyskateramp`. Inside this folder, we'll have a few key files and folders to keep things tidy:

```
diyskateramp/
|
|-- index.html
|-- style.css
|-- script.js
|
|-- images/
|
`-- apps/
```

*   **`index.html`**: This is the most important file. It's the skeleton of our website.
*   **`style.css`**: This file tells the browser how to make our website look good (the "style").
*   **`script.js`**: This file will handle the interactive parts, like the scrolling photo banner.
*   **`images/`**: A dedicated folder for all the pictures we'll use.
*   **`apps/`**: A folder to neatly store each of your web apps. Each app should be in its own subfolder (e.g., `apps/ramp-hacker/index.html`).

## 3. The Blueprint: `index.html`

The `index.html` file will contain all the content of our website. We'll use "semantic HTML," which means using tags that describe the content inside them.

Here's a simplified breakdown of the `index.html` file's structure:

```html
<!DOCTYPE html>
<html>
<head>
    <title>diyskateramp</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>

    <!-- Header and Navigation Bar -->
    <header>
        <!-- Logo will go here -->
        <nav>
            <!-- Links to different sections will be placed here -->
        </nav>
    </header>

    <!-- Main Content Area -->
    <main>
        <!-- Home Section -->
        <section id="home">
            <!-- YouTube Link -->
            <!-- Scrolling Photo Banner -->
            <!-- Paragraph of Text -->
        </section>

        <!-- App Sections (one for each app) -->
        <section id="pipe-dreams">
            <!-- Title, YouTube Link, Photo Rotator, Description -->
            <!-- Embedded Web App using an <iframe> -->
        </section>
        
        <!-- More app sections will be added here in the same way -->

        <!-- Gallery Section -->
        <section id="gallery">
            <!-- Gallery content will go here -->
        </section>

        <!-- Shop Section -->
        <section id="shop">
            <!-- Shop content will go here -->
        </section>
    </main>

    <!-- Footer with Contact Form -->
    <footer>
        <!-- Contact Me Box -->
    </footer>

    <script src="script.js"></script>
</body>
</html>
```

*   **`<header>`**: The top part of the page with the logo and navigation links.
*   **`<main>`**: The main content of the page, divided into `<section>`s.
*   **`<section>`**: Each part of your page (Home, PIPE DREAMS, etc.) will be a `<section>`.
*   **`<footer>`**: The bottom part of the page with the contact form.
*   **`<iframe>`**: This is a special HTML tag that lets us embed one HTML page inside another. We'll use this to display your web apps.

## 4. The Paint and Decorations: `style.css`

The `style.css` file is where we'll write the rules to make our website look like an 8-bit dream.

*   **Fonts:** We'll find a free pixelated font (like from Google Fonts) for the headings to get that retro video game feel.
*   **Colors:** The background will be black, and the text will be white. We can add some bright, neon accent colors for links and buttons.
*   **Layout:** We'll use CSS Flexbox or Grid to arrange things on the page. This will also help make the site look good on mobile phones. For example, on a phone, we might stack things vertically instead of side-by-side.

## 5. The Magic: `script.js`

The `script.js` file will bring our page to life. We'll write JavaScript code to handle:

*   **Scrolling Photo Banner (Home Page):**
    1.  The code will automatically switch to the next picture every few seconds.
    2.  When a user clicks on one of the dots, the code will show the corresponding picture.
*   **Photo Rotators (App Pages):** This will be a smaller, simpler version of the main banner.
*   **Gallery and Shop Pop-ups:**
    1.  When a user clicks on an image or icon, the code will show a pop-up window (a "modal").
    2.  This pop-up will have its own set of images that the user can click through.

## 6. Let's Get Building!

Now that we have a solid plan, the next step is to start creating these files and filling them with code. We'll start with the `index.html` file to build the structure, then move on to the `style.css` for the looks, and finally the `script.js` for the interactive parts.

This plan is now saved in `diyskateramp/project-plan.md`.

The design phase is complete. To start building the website, we should switch to a mode that is better suited for writing code.