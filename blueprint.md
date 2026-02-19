# Lotto Number Recommendation Site Blueprint

## Overview

This document outlines the design and implementation of a Lotto Number Recommendation site. The application will provide users with a set of randomly generated lottery numbers, presented in a clean, modern, and visually appealing interface.

## Design and Features

### Visual Design

*   **Aesthetics:** The site will have a modern and clean design, focusing on user experience.
*   **Color Palette:** A vibrant and energetic color palette will be used. A dark mode is available for user comfort.
*   **Typography:** Expressive and clear typography will be used to emphasize key information.
*   **Layout:** A centered, single-column layout for simplicity and mobile-friendliness.
*   **Components:**
    *   **Number Display:** Generated numbers are shown in individual "lifted" cards.
    *   **Buttons:** Clear call-to-action buttons for generating numbers and toggling the theme.
*   **Interactivity:** Interactive elements with visual feedback.

### Features

*   **Number Generation:** Generates 6 unique random numbers between 1 and 45.
*   **Display:** The generated numbers are clearly displayed.
*   **Responsive Design:** Fully responsive for desktop and mobile devices.
*   **Dark Mode:** Users can toggle between a light and dark theme to reduce eye strain.
*   **Theme Persistence:** The chosen theme (light/dark) is saved in the browser and remembered for the next visit.

## Current Plan

1.  **Add Dark Mode Feature:** Implement a dark mode to reduce eye strain.
    *   **Update `style.css`:** Refactor colors to use CSS variables and add a `.dark-mode` class with styles for the dark theme.
    *   **Update `index.html`:** Add a theme toggle button to the page.
    *   **Update `main.js`:** Add JavaScript to handle the theme toggle functionality and save the user's preference using `localStorage`.
