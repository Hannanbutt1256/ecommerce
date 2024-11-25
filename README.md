# Day 4-5 Project

## Overview

This project is a React-based application built using Vite and TypeScript.

## Features

* Uses React Router for client-side routing
* Utilizes Redux Toolkit for state management(for counter on specific products)
* Includes React Icons for icon components
* Supports Tailwind CSS for styling
* Used Dummy.Json api for fetching data in Products page.

## Features different from previous task

* Added css to display the functionality of icon on hover in navbar.
* Added a Cart page 
* Added Cart functionality using Redux
## Issues faced

* Faces challenge while fetching data using thunk function from redux. 
* Still some challenges in understanding how Redux works.

## Issues Resolved from Previous Task
* Resolved Cart Layout issue from Day4

## Current Issues

* Issue with add to cart button on coming back to the page
* Count of products does not change back to zero on returning from cart or any other page.
* It can add on the basis of the count that does not change 
* Some layout problems in cart page.

## Scripts

* `dev`: Starts the development server using Vite
* `build`: Builds the application using TypeScript and Vite
* `lint`: Runs ESLint to check for code errors and warnings
* `preview`: Starts the preview server using Vite

## Dependencies

* `@reduxjs/toolkit`: ^2.3.0
* `axios`: ^1.7.7
* `react`: ^18.3.1
* `react-dom`: ^18.3.1
* `react-icons`: ^5.3.0
* `react-redux`: ^9.1.2
* `react-router-dom`: ^6.28.0

## Dev Dependencies

* `@eslint/js`: ^9.13.0
* `@types/react`: ^18.3.12
* `@types/react-dom`: ^18.3.1
* `@vitejs/plugin-react`: ^4.3.3
* `autoprefixer`: ^10.4.20
* `eslint`: ^9.13.0
* `eslint-plugin-react-hooks`: ^5.0.0
* `eslint-plugin-react-refresh`: ^0.4.14
* `globals`: ^15.11.0
* `postcss`: ^8.4.49
* `tailwindcss`: ^3.4.15
* `typescript`: ~5.6.2
* `typescript-eslint`: ^8.11.0
* `vite`: ^5.4.10

## Getting Started

To get started with this project, clone the repository and run `npm install` to install the dependencies. Then, run `npm run dev` to start the development server.