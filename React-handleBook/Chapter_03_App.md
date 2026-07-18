# 📘 Chapter 3 - App.jsx (The Root Component)

---

# What is App.jsx?

`App.jsx` is the **Root Component** of a React application.

Every React application has one root component from which all other components are rendered.

When React starts, it first renders `main.jsx`, and `main.jsx` renders `<App />`.

Flow:

```
Browser

↓

index.html

↓

main.jsx

↓

<App />

↓

Everything else
```

Think of `App.jsx` as the **manager** of your application.

It doesn't usually contain all the logic itself.

Instead, it organizes different components and tells React what should appear on the screen.

---

# Our App.jsx

In this project our App component imports many components.

```jsx
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import Card from "./Card.jsx";
...
```

Each component represents a small reusable piece of UI.

Instead of writing one huge file, we split our application into smaller files.

Advantages

✅ Easier to read

✅ Easier to maintain

✅ Easier to reuse

---

# Component Hierarchy

Our project currently looks something like this.

```
<App />

│

├── Card

├── Button

├── Header

├── Food

├── Footer

├── Student

├── UserGreeting

├── List

├── ClickButton

├── ProfilePicture

├── MyComponent

├── Counter

├── ColorPicker

├── ToDoList

├── WindowResize

├── DigitalClock

├── ComponentA

├── MyComponent3

└── StopWatch
```

Notice that every component is rendered from App.

---

# Functional Component

Our App is written as

```jsx
function App() {

}
```

A React Component is simply a JavaScript function that returns JSX.

Normal JavaScript

```javascript
function greet(){

}
```

React

```jsx
function Header(){

    return <h1>Hello</h1>;

}
```

Difference

A normal function returns values.

A React Component returns **User Interface (JSX).**

---

# Local Variables

Inside App we created

```jsx
const fruits = [

];

const vegetables = [

];
```

These are normal JavaScript arrays.

For learning purposes we manually created the data.

In real applications this data usually comes from

- Database
- REST API
- GraphQL
- Firebase
- Backend Server

Example

```
Backend

↓

JSON

↓

React

↓

Display List
```

---

# Array of Objects

Our fruits array

```jsx
[
    {
        id:1,
        name:"Apple",
        calories:52
    }
]
```

This is one of the most common data structures in React.

Almost every API returns arrays of objects.

Examples

Users

Products

Orders

Posts

Comments

Movies

Books

Everything follows this structure.

---

# Why do we use id?

Each fruit has

```jsx
id
```

This id will later become the React Key.

Example

```jsx
<li key={fruit.id}>
```

Keys help React identify which item has changed.

Never use duplicate ids.

---

# Rendering Components

Inside return()

```jsx
<Card/>

<Button/>

<Student/>
```

These are **custom React components.**

When React sees

```jsx
<Card/>
```

it executes

```jsx
Card()
```

Whatever JSX Card returns becomes part of the page.

Flow

```
<App />

↓

<Card />

↓

Card()

↓

Returns JSX

↓

Browser displays it
```

---

# Props (Introduction)

Example

```jsx
<Student

name="SOLO"

age={30}

isStudent={true}

/>
```

Props allow a parent component to send data to a child component.

Think of them as **function arguments**.

Example

JavaScript

```javascript
greet("Solo");
```

React

```jsx
<Student name="Solo"/>
```

We'll study Props in detail in Chapter 5.

---

# Conditional Rendering (Introduction)

Inside App we wrote

```jsx
{
fruits.length > 0 &&
<List ... />
}
```

Meaning

"If fruits exist, show the List component."

Otherwise

Show nothing.

We'll study this completely in a dedicated chapter.

---

# Passing Arrays as Props

Example

```jsx
<List

items={fruits}

category="Fruits"

/>
```

Here the entire fruits array is passed to another component.

The List component will later display each fruit using `map()`.

---

# JSX Fragment

Notice

```jsx
<>
```

This is called a **Fragment**.

Fragments allow multiple elements to be returned without creating an extra `<div>`.

Without Fragment

```jsx
<div>

<Card/>

<Button/>

</div>
```

Extra div appears.

With Fragment

```jsx
<>

<Card/>

<Button/>

</>
```

No unnecessary HTML is created.

---

# Export

At the bottom

```jsx
export default App;
```

This allows `main.jsx` to import App.

Flow

```
App.jsx

↓

export default App

↓

main.jsx

↓

import App

↓

render(<App/>)
```

---

# How React Executes Our App

```
main.jsx

↓

<App/>

↓

App()

↓

Reads imports

↓

Creates JSX

↓

Renders

Card

↓

Button

↓

Header

↓

Student

↓

List

↓

Counter

↓

StopWatch

↓

Virtual DOM

↓

Browser Screen
```

---

# Best Practices

As applications become larger, App.jsx should stay simple.

Usually App.jsx contains only

- Routing
- Layout
- Context Providers
- Global Components

Business logic should be moved into separate components.

---

# Common Beginner Mistakes

❌ Putting all code inside App.jsx.

Instead

Create reusable components.

---

❌ Forgetting to export App.

---

❌ Forgetting imports.

---

❌ Declaring variables inside return().

---

❌ Using lowercase component names.

---

# Interview Questions

### Q1. What is the Root Component?

### Q2. Why is App.jsx important?

### Q3. Why are components reusable?

### Q4. What are Props?

### Q5. Why do we split applications into components?

### Q6. Why is Fragment used?

### Q7. What happens when React encounters `<Card />`?

### Q8. Why do lists need unique keys?

---

# Chapter Summary

After reading this chapter you should understand

✅ What App.jsx is

✅ Why App.jsx is called the Root Component

✅ Component hierarchy

✅ Why applications are divided into components

✅ Local variables inside components

✅ Arrays of Objects

✅ Rendering Components

✅ Introduction to Props

✅ Introduction to Conditional Rendering

✅ Fragment

✅ Export

---

# Memory Tricks

🏠 App.jsx = House

Every component lives inside it.

🧩 Component = LEGO Block

Small reusable building blocks.

📦 Props = Parcel

Parent sends data to Child.

📋 Array of Objects = Database Table

Each object represents one record.

🪞 Fragment = Invisible Wrapper

Groups JSX without creating HTML.

---

> **"App.jsx is not responsible for doing everything. Its job is to organize the application by bringing together smaller, reusable components into one complete user interface."**