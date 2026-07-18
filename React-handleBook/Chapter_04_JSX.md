# 📘 Chapter 4 - JSX (JavaScript XML)

---

# What is JSX?

JSX stands for **JavaScript XML**.

It is a syntax extension for JavaScript that allows us to write HTML-like code inside JavaScript.

Example:

```jsx
const element = <h1>Hello React!</h1>;
```

Although this looks like HTML, it is **not** HTML.

It is JSX.

Before the browser sees it, JSX is converted into normal JavaScript.

---

# Why was JSX Created?

Imagine creating UI without JSX.

```javascript
const element = React.createElement(
    "h1",
    null,
    "Hello React!"
);
```

Now compare it with JSX.

```jsx
const element = <h1>Hello React!</h1>;
```

Both produce exactly the same result.

JSX simply makes React code much easier to read and write.

---

# JSX is NOT HTML

Many beginners think

```
JSX = HTML
```

This is incorrect.

The actual flow is

```
JSX

↓

Babel

↓

JavaScript

↓

React.createElement()

↓

Virtual DOM

↓

Real DOM
```

The browser never understands JSX directly.

---

# What is Babel?

Babel is a JavaScript compiler.

Its job is to convert modern JavaScript (including JSX) into JavaScript that browsers understand.

Example

You write

```jsx
<h1>Hello</h1>
```

Babel converts it roughly into

```javascript
React.createElement(
    "h1",
    null,
    "Hello"
);
```

You normally never write this yourself.

Vite automatically runs Babel (or an equivalent JSX transform) during development and build.

---

# JSX vs HTML

Although JSX looks like HTML, there are important differences.

| HTML | JSX |
|------|------|
| class | className |
| for | htmlFor |
| onclick | onClick |
| tabindex | tabIndex |

Example

HTML

```html
<label for="name">
```

JSX

```jsx
<label htmlFor="name">
```

---

# Why className instead of class?

Because `class` is already a reserved keyword in JavaScript.

React uses

```jsx
className
```

instead.

Example

```jsx
<div className="container">
```

---

# Why htmlFor?

Similarly,

```html
for
```

already has a meaning in JavaScript.

React replaces it with

```jsx
htmlFor
```

---

# JSX Must Return One Parent Element

Wrong

```jsx
return(
<h1>Hello</h1>
<p>World</p>
);
```

Correct

```jsx
return(
<>
    <h1>Hello</h1>
    <p>World</p>
</>
);
```

React components must return **one root element**.

That root can be

- A `<div>`
- A Fragment (`<>...</>`)
- Any single parent element

---

# Expressions in JSX

Inside JSX we can write JavaScript expressions using curly braces.

Example

```jsx
const name = "Solo";

return(
<h1>Hello {name}</h1>
);
```

Output

```
Hello Solo
```

---

# What Can Go Inside Curly Braces?

Anything that evaluates to a value.

Examples

Variables

```jsx
{name}
```

Math

```jsx
{5 + 10}
```

Function Calls

```jsx
{getUser()}
```

Ternary Operators

```jsx
{isLoggedIn ? "Welcome" : "Login"}
```

Array Length

```jsx
{fruits.length}
```

---

# What Cannot Go Inside JSX?

Statements.

Wrong

```jsx
{
if(age > 18){

}
}
```

`if` is a statement.

Instead use

```jsx
{
age > 18 ? "Adult" : "Minor"
}
```

---

# Comments in JSX

Wrong

```jsx
<!-- Comment -->
```

Correct

```jsx
{/* Comment */}
```

Example

```jsx
return(

<>
    {/* Header Section */}

    <Header/>

</>
);
```

---

# Self Closing Tags

HTML

```html
<img>
```

JSX

```jsx
<img />
```

Similarly

```jsx
<input />

<hr />

<br />
```

must all be self-closing.

---

# Fragments

Instead of

```jsx
<div>

</div>
```

React provides

```jsx
<>

</>
```

Fragments group multiple elements together without adding extra HTML.

---

# Embedding Components

Components behave like HTML tags.

Example

```jsx
<Header/>

<Card/>

<Button/>
```

React knows these are custom components because their names start with a capital letter.

---

# Dynamic UI

The biggest advantage of JSX is that it allows JavaScript and UI to work together.

Example

```jsx
const score = 90;

return(

<h1>Score : {score}</h1>

);
```

Whenever `score` changes, React updates the UI.

---

# Behind the Scenes

Suppose we write

```jsx
<Card />
```

React roughly converts it into

```javascript
React.createElement(Card);
```

That component executes

```
Card()

↓

Returns JSX

↓

Virtual DOM

↓

Browser
```

---

# Common JSX Mistakes

❌ Using `class` instead of `className`

---

❌ Returning multiple root elements

---

❌ Forgetting to close tags

Wrong

```jsx
<input>
```

Correct

```jsx
<input />
```

---

❌ Writing comments using HTML syntax

Wrong

```html
<!-- -->
```

---

❌ Writing statements inside JSX

Wrong

```jsx
{
for(...){

}
}
```

---

# Best Practices

✅ Keep JSX readable.

---

✅ Move large JSX into separate components.

---

✅ Avoid deeply nested JSX.

---

✅ Use meaningful component names.

---

# Interview Questions

### Q1. What is JSX?

### Q2. Is JSX HTML?

### Q3. Why do we use Babel?

### Q4. Why is className used instead of class?

### Q5. Why must React components return one parent element?

### Q6. What are Fragments?

### Q7. Can JavaScript be written inside JSX?

### Q8. What is the difference between expressions and statements in JSX?

---

# Quick Revision

- JSX is a syntax extension for JavaScript.
- JSX is transformed into JavaScript before execution.
- JSX is not HTML.
- Curly braces allow JavaScript expressions inside JSX.
- Components return one parent element.
- Fragments avoid unnecessary `<div>` elements.
- React uses `className` and `htmlFor` instead of `class` and `for`.

---

# Practical Exercise

1. Create a component that displays your name, age, and college using JSX.
2. Use curly braces to calculate `5 * 10`.
3. Add an image using a self-closing `<img />` tag.
4. Display "Pass" if marks are greater than 40, otherwise "Fail" using a ternary operator.
5. Wrap multiple elements inside a Fragment instead of a `<div>`.

---

# Senior Developer Tip

JSX is intentionally close to HTML because it makes UI easier to visualize, but remember that every JSX element is ultimately translated into JavaScript objects before React renders them. Once you understand this, concepts like components, props, conditional rendering, and hooks become much easier to reason about.

---

# Memory Tricks

📝 JSX = HTML-like syntax for JavaScript

🔄 Babel = Translator

📦 `{}` = JavaScript Playground

📄 Fragment = Invisible Wrapper

⚛️ JSX → JavaScript → Virtual DOM → Browser

---

> **"JSX isn't HTML inside JavaScript. It's JavaScript with a cleaner syntax for describing user interfaces."**