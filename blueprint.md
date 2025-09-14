# Blueprint: Modern Animated Landing Page

## Overview

This project is a modern, visually appealing, and animated landing page built with Next.js, Tailwind CSS, and GreenSock Animation Platform (GSAP). It is designed to be a showcase of modern web development techniques, with a focus on creating a dynamic and engaging user experience. The application is structured using the Next.js App Router and features a clean, component-based architecture.

## Project Outline & Features

### Core Technologies

*   **Next.js:** A React framework for building server-rendered and statically generated web applications.
*   **Tailwind CSS:** A utility-first CSS framework for rapid UI development.
*   **shadcn/ui:** A collection of accessible and reusable UI components.
*   **GSAP (GreenSock Animation Platform):** A powerful JavaScript library for creating high-performance animations.
*   **TypeScript:** A statically typed superset of JavaScript.
*   **ESLint:** For code linting and quality checks.

### Design and Styling

*   **Layout:** A single-page layout with vertical scrolling sections.
*   **Typography:** Clean and modern font choices for readability.
*   **Color Palette:** A simple and elegant color scheme with a primary blue accent.
*   **Animations:**
    *   **Page Load:** Components animate into view on initial page load.
    *   **Scroll-Triggered Animations:** Sections fade and slide in as the user scrolls down the page.
    *   **Hover Effects:** Interactive elements have subtle hover animations.
*   **Responsiveness:** The layout is fully responsive and adapts to different screen sizes.

### Implemented Features & Components

*   **`app/layout.tsx`**: The root layout for the application, including metadata and global styles.
*   **`app/page.tsx`**: The main entry point of the application, which orchestrates the different sections and initializes the scroll-triggered animations.
*   **`components/layout/Header.tsx`**: A fixed header component with a logo and navigation links. It animates in on page load.
*   **`components/layout/Footer.tsx`**: A footer component with social media links and copyright information.
*   **`components/sections/Hero.tsx`**: A full-screen hero section with a headline, tagline, and a call-to-action button. The text and button have a staggered animation on page load.
*   **`components/sections/Features.tsx`**: A section that displays key features in a card-based layout. Each card has a hover effect.
*   **`components/sections/About.tsx`**: A two-column section with text content and a placeholder image.
*   **`components/sections/Contact.tsx`**: A section with a contact form and contact information.

## Current Request: Initial Build

This is the initial build of the landing page. The goal was to create a complete, animated landing page from scratch based on the user's request.

### Plan & Steps Executed

1.  **Project Setup:** Initialized a new Next.js project.
2.  **Dependency Installation:** Installed and configured `tailwindcss`, `shadcn/ui`, and `gsap`.
3.  **Component Creation:** Developed the following components:
    *   `Header`
    *   `Hero`
    *   `Features`
    *   `About`
    *   `Contact`
    *   `Footer`
4.  **Styling:** Applied styles using Tailwind CSS and custom global CSS.
5.  **Animation:** Implemented animations using GSAP for page load and scroll triggers.
6.  **Linting & Cleanup:** Ran ESLint to identify and fix code quality issues.
7.  **Documentation:** Created this `blueprint.md` file to document the project.
