# 📘 Chapter 2 - Project Setup & main.jsx

---

# Project Structure

When you create a React project using Vite, the folder structure looks something like this.

```
my-react-app
│
├── node_modules/
├── public/
├── src/
│   ├── assets/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── package-lock.json
├── vite.config.js
├── index.html
└── README.md
```

Each file has a specific purpose.

---

# Important Files

## node_modules/

Contains all third-party packages installed through npm.

Examples

- React
- ReactDOM
- Vite
- ESLint

⚠ Never edit this folder manually.

If deleted, simply run

```bash
npm install
```

---

## public/

Stores static files.

Examples

```
logo.png
robots.txt
favicon.ico
```

Anything inside this folder is served directly.

---

## src/

This is where we spend almost all of our time writing code.

Everything related to our application lives here.

```
src
│
├── App.jsx
├── main.jsx
├── index.css
├── assets/
└── components/
```

---

## package.json

Think of this as the identity card of your project.

It contains

- Project name
- Version
- Dependencies
- Scripts

Example

```json
{
    "name": "react-app",
    "version": "1.0.0"
}
```

---

## vite.config.js

Configuration file for Vite.

Used for

- Plugins
- Aliases
- Build settings
- Development server configuration

Most beginners rarely modify this.

---

## index.html

Unlike traditional websites, React only needs **one HTML page**.

Inside you'll find

```html
<div id="root"></div>
```

This is the place where React injects the entire application.

Think of it as an empty container waiting for React.

---

# main.jsx

This is the **entry point** of the React application.

Every React application starts here.

Flow

```
Browser

↓

index.html

↓

main.jsx

↓

App.jsx

↓

Other Components
```

---

# Typical main.jsx

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
```

Let's understand every line.

---

## Import React

```jsx
import React from "react";
```

Older versions of React required importing React whenever JSX was used.

Modern React (17+) usually doesn't require this import in every file because of the new JSX Transform.

However, you'll still see it in older projects.

---

## Import ReactDOM

```jsx
import ReactDOM from "react-dom/client";
```

React builds the UI.

ReactDOM displays that UI inside the browser.

Think of it like this.

```
React

Creates UI

↓

ReactDOM

Shows UI inside browser
```

---

## Import App

```jsx
import App from "./App.jsx";
```

App is our root component.

Everything inside our application eventually comes from App.

---

## Import CSS

```jsx
import "./index.css";
```

Unlike normal HTML, React imports CSS into JavaScript.

This allows styles to become part of the module system.

---

# createRoot()

```jsx
ReactDOM.createRoot(...)
```

React 18 introduced a new rendering API called **createRoot()**.

Older React versions used

```jsx
ReactDOM.render(...)
```

React 18 uses

```jsx
ReactDOM.createRoot(...).render(...)
```

This enables newer React features and improves rendering performance.

---

# document.getElementById("root")

React looks for

```html
<div id="root"></div>
```

inside index.html.

It tells React

> "Render the application inside this div."

Think of it as selecting an empty room before placing furniture inside it.

---

# render()

```jsx
.render(<App />)
```

This tells React

```
Display App on the screen.
```

App becomes the parent of every other component.

```
<App />

↓

Header

↓

Footer

↓

Counter

↓

StopWatch

↓

Everything else
```

---

# React.StrictMode

```jsx
<React.StrictMode>

<App />

</React.StrictMode>
```

StrictMode is a development tool.

It helps developers find bugs.

Examples

- Deprecated APIs
- Side effect issues
- Incorrect Hook usage

Important

StrictMode **does NOT appear in production**.

---

# Complete Flow

```
User opens website

        │

        ▼

Browser loads index.html

        │

        ▼

<div id="root"></div>

        │

        ▼

main.jsx executes

        │

        ▼

createRoot()

        │

        ▼

<App />

        │

        ▼

Header

Footer

Student

Counter

Digital Clock

StopWatch

        │

        ▼

Browser displays everything
```

---

# Visual Representation

```
                 Browser

                    │

                    ▼

              index.html

                    │

                    ▼

          <div id="root">

                    │

                    ▼

              ReactDOM

                    │

                    ▼

               main.jsx

                    │

                    ▼

                 <App />

                    │

      ┌─────────────┼─────────────┐

      ▼             ▼             ▼

   Header         Student      Counter

```

---

# Why Do We Need main.jsx?

Imagine React didn't have main.jsx.

How would the browser know

- which component to load?
- where to render it?
- which CSS to load?

main.jsx answers all these questions.

It is the bridge between the browser and React.

---

# Difference Between main.jsx and App.jsx

| main.jsx | App.jsx |
|----------|----------|
| Entry point | Root component |
| Starts React | Builds UI |
| Creates Root | Contains components |
| Connects to HTML | Displays application |

---

# Common Beginner Mistakes

❌ Forgetting to import App.

---

❌ Wrong import path.

```jsx
import App from "./app.jsx";
```

instead of

```jsx
import App from "./App.jsx";
```

Linux systems are case-sensitive.

---

❌ Forgetting to import CSS.

---

❌ Deleting

```html
<div id="root"></div>
```

from index.html.

React will have nowhere to render.

---

# Interview Questions

### Q1. What is the entry point of a React application?

Answer

main.jsx

---

### Q2. What is ReactDOM?

---

### Q3. What does createRoot() do?

---

### Q4. Why do we use StrictMode?

---

### Q5. What is the purpose of index.html?

---

### Q6. What is the difference between App.jsx and main.jsx?

---

# Chapter Summary

After reading this chapter, you should know

✅ Project structure

✅ Purpose of each important file

✅ How React starts

✅ Role of main.jsx

✅ Role of ReactDOM

✅ Purpose of createRoot()

✅ Purpose of render()

✅ Why React needs index.html

✅ Difference between App.jsx and main.jsx

---

# Memory Tricks

📌 **main.jsx** = Ignition Key 🚗

Starts the entire application.

📌 **App.jsx** = House 🏠

Contains all rooms (components).

📌 **ReactDOM** = Builder 👷

Places your React application inside the browser.

📌 **index.html** = Empty Plot of Land 🏞️

React builds the house on this land.

📌 **createRoot()** = Foundation 🧱

Creates the place where React will live.

---

> **"Every React application begins with main.jsx, but every user experience begins with App.jsx."**