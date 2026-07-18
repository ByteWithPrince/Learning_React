# 📘 Chapter 17 - React Performance Optimization

---

# Introduction

React is already fast.

One of the biggest mistakes beginners make is trying to optimize everything before understanding how React works.

Remember Chapter 15.

Whenever state changes,

```
State Changes

↓

React Re-renders

↓

Virtual DOM

↓

Diffing

↓

Reconciliation

↓

Real DOM Updates
```

This process is already highly optimized.

Most React applications don't have performance problems.

Optimization becomes important only when:

- Rendering thousands of items
- Performing expensive calculations
- Building large dashboards
- Working with animations
- Displaying large datasets
- Frequently re-rendering components

The goal is **not to eliminate renders**.

The goal is to eliminate **unnecessary renders**.

---

# What is a Re-render?

Whenever React executes a component function again,

that component re-renders.

Example

```jsx
function Counter(){

    console.log("Rendered");

    return <h1>Hello</h1>;

}
```

Every state update prints

```
Rendered
```

A render is simply React calculating what the UI should look like.

Rendering is **not** the same as updating the DOM.

---

# Are Re-renders Bad?

No.

Many beginners believe

```
Re-render

↓

Bad
```

This is false.

React is designed to render often.

Example

Typing into an input

```
A

↓

Render

↓

B

↓

Render

↓

C

↓

Render
```

This is perfectly normal.

---

# When Do Re-renders Become Expensive?

Imagine

```
Dashboard

↓

500 Components

↓

Every Component Re-renders

↓

Every Button Click
```

Now React has much more work.

Or suppose

```
10,000 Products

↓

map()

↓

Re-render Every Keystroke
```

Now rendering becomes expensive.

---

# What Causes Re-renders?

A component re-renders when

✅ State changes

```jsx
setState(...)
```

---

✅ Props change

---

✅ Context changes

---

✅ Parent re-renders

unless optimization prevents it.

---

# Example

Suppose

```jsx
<App>

    <Navbar/>

    <Counter/>

    <Footer/>

</App>
```

Counter updates.

```
setCount(...)
```

React re-renders

```
App

↓

Counter

↓

Children
```

Sometimes

Navbar and Footer didn't actually need to render again.

Optimization helps avoid this.

---

# Measuring Performance First

Never optimize blindly.

Use tools like

- React DevTools Profiler
- Browser Performance Tools

Ask questions like

- Which component renders most often?
- Which component takes the longest to render?
- Is the render actually slow?

Only optimize after identifying a real bottleneck.

---

# React.memo()

`React.memo()` prevents a component from re-rendering when its props have not changed.

Example

```jsx
const Header = React.memo(function Header(){

    return <h1>Header</h1>;

});
```

Now

```
Parent Re-renders

↓

Header Props Same

↓

Header Skips Rendering
```

---

# How React.memo Works

Without React.memo

```
Parent

↓

Header

↓

Footer

↓

Counter
```

Everything renders.

With React.memo

```
Parent

↓

Header (Skipped)

↓

Footer (Skipped)

↓

Counter (Rendered)
```

React compares previous props with new props.

If nothing changed,

it reuses the previous result.

---

# When NOT to Use React.memo

Avoid wrapping every component.

Bad

```
Button

Label

Icon

Divider

Everything Memoized
```

React must compare props for every memoized component.

Sometimes those comparisons cost more than rendering.

Use `React.memo` only for components that:

- Render frequently
- Receive stable props
- Are expensive to render

---

# useMemo()

Sometimes rendering is fast,

but calculations are expensive.

Example

```jsx
const total = expensiveCalculation(products);
```

If the component renders ten times,

the calculation also runs ten times.

`useMemo()` stores the previous result.

```jsx
const total = useMemo(() => {

    return expensiveCalculation(products);

}, [products]);
```

Now

```
products Same

↓

Return Cached Value

↓

Skip Calculation
```

---

# Real Example

Suppose

```
100,000 Products

↓

Sorting

↓

Filtering

↓

Searching
```

Doing this every render is slow.

`useMemo()` avoids repeating the calculation unnecessarily.

---

# useCallback()

Functions are recreated every render.

Example

```jsx
function handleClick(){

}
```

Every render creates a new function.

Usually,

this is completely fine.

However,

when passing functions to memoized child components,

the child sees a new function reference and re-renders.

`useCallback()` remembers the function.

```jsx
const handleClick = useCallback(() => {

    console.log("Clicked");

}, []);
```

Now React reuses the same function until the dependencies change.

---

# React.lazy()

Large applications often contain many pages.

Without lazy loading

```
Home

About

Dashboard

Profile

Settings

Admin

↓

Download Everything
```

Even if the user only visits the Home page.

`React.lazy()` allows components to load only when needed.

```jsx
const Dashboard = React.lazy(() => import("./Dashboard"));
```

---

# Suspense

Lazy-loaded components need a fallback while they download.

```jsx
<Suspense fallback={<Loading />}>

    <Dashboard/>

</Suspense>
```

User sees

```
Loading...

↓

Dashboard Appears
```

---

# Code Splitting

Instead of

```
Entire App

↓

One Huge JavaScript File
```

React splits the application into smaller files.

```
Home.js

Dashboard.js

Settings.js
```

Only the required code is downloaded.

This improves loading speed.

---

# Optimization Checklist

Before optimizing, ask:

- Is the component actually slow?
- Does it render frequently?
- Is the calculation expensive?
- Did I measure performance?
- Will optimization make the code harder to understand?

If the answer is "No",

don't optimize.

---

# Common Beginner Mistakes

❌ Wrapping every component with `React.memo()`.

---

❌ Using `useMemo()` for simple calculations.

```jsx
const total = a + b;
```

This doesn't need memoization.

---

❌ Using `useCallback()` for every function.

Most event handlers don't need it.

---

❌ Optimizing before measuring.

---

❌ Confusing rendering with DOM updates.

---

# Best Practices

✅ Optimize only after profiling.

✅ Keep components small.

✅ Avoid unnecessary state.

✅ Memoize expensive calculations, not simple ones.

✅ Write readable code before optimized code.

---

# Interview Questions

### Q1. What causes unnecessary re-renders?

### Q2. What does `React.memo()` do?

### Q3. Difference between `useMemo()` and `useCallback()`?

### Q4. What is lazy loading?

### Q5. What is code splitting?

### Q6. Why shouldn't everything be memoized?

### Q7. How do you measure React performance?

### Q8. What problem does `Suspense` solve?

---

# Quick Revision

- Re-renders are normal.
- Unnecessary re-renders should be minimized.
- `React.memo()` memoizes components.
- `useMemo()` memoizes values.
- `useCallback()` memoizes functions.
- `React.lazy()` loads components only when needed.
- `Suspense` displays fallback content during loading.
- Always measure before optimizing.

---

# Practical Exercise

1. Add `console.log()` to several components and observe re-renders.
2. Wrap a child component with `React.memo()` and compare behavior.
3. Use `useMemo()` to cache a sorted list.
4. Pass a callback to a memoized child with and without `useCallback()`.
5. Lazy load a page using `React.lazy()` and `Suspense`.

---

# Senior Developer Tip

Performance optimization is often overused by beginners. Modern React is already highly optimized, and most applications perform well without memoization. Prioritize clean architecture, clear component boundaries, and accurate state management first. When performance issues arise, use the React Profiler to identify the real bottleneck before introducing optimization hooks.

---

# Memory Tricks

⚛️ Render ≠ Problem

🐢 Slow Calculation → `useMemo()`

🔁 Same Function → `useCallback()`

🧩 Same Component → `React.memo()`

📦 Load Later → `React.lazy()`

⏳ Waiting UI → `Suspense`

📊 Measure First → Optimize Second

---

## Choosing the Right Tool

```
Need to skip a component render?

↓

React.memo()


Need to cache a calculated value?

↓

useMemo()


Need to preserve a function reference?

↓

useCallback()


Need to load a component later?

↓

React.lazy()


Need a loading UI?

↓

Suspense
```

---

> **"The fastest code isn't the one with the most optimizations—it's the one that avoids unnecessary work while remaining simple to understand."**