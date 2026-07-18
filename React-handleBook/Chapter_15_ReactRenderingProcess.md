# 📘 Chapter 15 - React Rendering Process (How React Updates the UI)

---

# Introduction

Every React application follows the same cycle.

When something changes—such as state or props—React decides what needs to be updated on the screen.

Instead of rebuilding the entire webpage, React updates **only the parts that changed**.

This process is what makes React fast.

Understanding this process will help you:

- Write better React code
- Avoid unnecessary re-renders
- Understand performance optimization
- Understand `React.memo`, `useMemo`, and `useCallback`
- Debug rendering issues

---

# The Complete Rendering Pipeline

Every update in React follows this pipeline.

```
User Action

↓

Event Handler

↓

State Changes

↓

React Re-renders Component

↓

New Virtual DOM

↓

Compare With Old Virtual DOM

↓

Find Differences (Diffing)

↓

Update Real DOM

↓

Browser Paints Screen
```

Everything you've learned so far fits into this pipeline.

---

# Step 1 - User Interaction

Everything usually begins with an event.

Examples

```
Button Click

Typing

Mouse Movement

API Response

Timer

Window Resize
```

Example

```jsx
<button onClick={increment}>
```

User clicks the button.

---

# Step 2 - State Changes

Inside the event

```jsx
setCount(count + 1);
```

React now knows

```
Something Changed
```

Notice

React **does not immediately update the screen**.

Instead,

it schedules an update.

---

# Step 3 - React Re-renders the Component

React calls the component function again.

Example

```jsx
function Counter(){

    ...

}
```

React executes

```jsx
Counter()
```

again.

Everything inside the component runs again.

This surprises many beginners.

---

# Does React Recreate Everything?

Yes.

Every render creates

- New variables
- New JSX
- New function calls

Example

```jsx
function Counter(){

    const name="John";

}
```

Every render

↓

Creates

```
name
```

again.

The exception?

Hooks like

```
useState()

useRef()

useContext()
```

preserve their values.

---

# Step 4 - New Virtual DOM

After rendering,

React creates a **new Virtual DOM**.

Think of it as a JavaScript representation of the UI.

Example

```
Old

<div>

<h1>0</h1>

</div>
```

After clicking

```
New

<div>

<h1>1</h1>

</div>
```

React now has

```
Old Version

New Version
```

---

# What is the Virtual DOM?

The Virtual DOM is **not** the actual webpage.

It is a lightweight JavaScript object describing what the UI should look like.

```
Real DOM

↓

Browser

↓

Actual HTML Elements
```

```
Virtual DOM

↓

JavaScript Objects

↓

Memory
```

Updating JavaScript objects is much faster than updating the browser.

---

# Step 5 - Diffing

React compares

```
Old Virtual DOM

↓

New Virtual DOM
```

This comparison is called

## Diffing

React asks

```
What Changed?
```

Example

Old

```
<h1>0</h1>
```

New

```
<h1>1</h1>
```

Only the text changed.

Everything else stayed the same.

---

# Step 6 - Reconciliation

After finding the differences,

React decides

```
How should the UI be updated?
```

This process is called

## Reconciliation

React builds a list of changes.

Example

```
Update

↓

Text

↓

0

↓

1
```

Instead of rebuilding everything.

---

# Step 7 - Updating the Real DOM

Finally,

React updates only the changed elements.

Instead of

```
Delete Entire Page

↓

Create Everything Again
```

React performs

```
Update Text

Done.
```

Much faster.

---

# Browser Paint

After the DOM changes,

the browser redraws the page.

This is called

## Paint

Users finally see the updated UI.

---

# Example - Counter Component

Suppose

```jsx
const [count,setCount]=useState(0);
```

Current UI

```
0
```

User clicks

```
Increment
```

Pipeline

```
Click

↓

setCount()

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

↓

Browser Paint

↓

1
```

---

# Example - Todo List

Suppose we add

```
Study React
```

Old list

```
Breakfast

Gym
```

New list

```
Breakfast

Gym

Study React
```

React compares both lists.

Only

```
Study React
```

needs to be added.

Everything else stays the same.

---

# Why Keys Matter

Remember

```jsx
key={task.id}
```

During Diffing,

React uses keys to identify elements.

Without keys

```
Task A

Task B

Task C
```

After deleting Task B

React becomes confused.

With keys

```
ID 1

ID 2

ID 3
```

React immediately knows

```
ID 2 disappeared.
```

---

# Why React is Fast

Many beginners think

```
Virtual DOM

↓

Magic

↓

Fast
```

Not exactly.

React is fast because

- It minimizes Real DOM updates.
- It batches multiple state updates.
- It efficiently compares trees.
- It avoids unnecessary work.

The Real DOM is expensive.

JavaScript objects are cheap.

---

# Render vs Re-render

## First Render

```
Component Appears

↓

Render
```

---

## Re-render

```
State Changes

↓

Render Again
```

Every state update causes a re-render of that component.

---

# What Causes a Re-render?

A component re-renders when:

✅ State changes

```jsx
setState(...)
```

---

✅ Props change

```jsx
<Component value={x}/>
```

---

✅ Context changes

```jsx
useContext(...)
```

---

✅ Parent re-renders

Unless optimization prevents it.

---

# What Does NOT Cause a Re-render?

Changing

```jsx
ref.current
```

does not.

Example

```jsx
countRef.current++;
```

UI stays exactly the same.

That's why `useRef()` exists.

---

# React Doesn't Re-render the Whole Website

Suppose

```
App

├── Navbar

├── Sidebar

├── Counter

└── Footer
```

If only Counter changes,

React tries to update only what is necessary.

Component boundaries help React limit the work.

---

# React Rendering Flow

```
State

↓

Render

↓

Virtual DOM

↓

Diffing

↓

Reconciliation

↓

Real DOM

↓

Paint
```

Remember this sequence.

It appears frequently in interviews.

---

# Common Beginner Misconceptions

❌ React updates the browser immediately.

No.

It first updates the Virtual DOM.

---

❌ React rebuilds the whole page.

No.

It updates only what changed.

---

❌ Rendering means changing the DOM.

No.

Rendering creates JSX and Virtual DOM.

DOM updates happen later.

---

❌ Virtual DOM replaces the browser.

No.

The browser still renders everything.

Virtual DOM simply helps React decide what to update.

---

# Best Practices

✅ Keep components small.

✅ Use stable keys.

✅ Avoid unnecessary state.

✅ Avoid expensive calculations during rendering.

✅ Understand what triggers re-renders.

---

# Interview Questions

### Q1. What is the Virtual DOM?

### Q2. Explain React's rendering process.

### Q3. What is Diffing?

### Q4. What is Reconciliation?

### Q5. Why is React faster than direct DOM manipulation?

### Q6. What causes a component to re-render?

### Q7. Does changing a ref trigger a render?

### Q8. Why are keys important?

---

# Quick Revision

- State changes schedule a render.
- React executes the component again.
- A new Virtual DOM is created.
- React compares old and new Virtual DOMs.
- Diffing finds differences.
- Reconciliation decides updates.
- Only necessary DOM changes are made.
- The browser paints the updated UI.

---

# Practical Exercise

1. Add `console.log("Rendered")` to one of your components and observe when it runs.
2. Build a counter and track how many renders occur.
3. Remove the `key` prop from a list and observe React's warning.
4. Create a parent and child component to observe how parent renders affect children.
5. Compare updating state with updating a ref.

---

# Senior Developer Tip

Performance optimization starts with understanding the render cycle. Don't try to stop every re-render—most are inexpensive and expected. Instead, focus on avoiding **unnecessary** re-renders caused by unstable props, excessive state, or expensive computations. Measure performance first, then optimize only where it matters.

---

# Memory Tricks

👆 User Action = Start

📦 State = Changed Data

⚛️ Render = React Runs the Component Again

🪞 Virtual DOM = Blueprint

🔍 Diffing = Find Differences

🧩 Reconciliation = Decide Updates

🌐 Real DOM = Actual Webpage

🎨 Paint = Browser Displays Changes

**Remember the sequence:**

```
State

↓

Render

↓

Virtual DOM

↓

Diff

↓

Reconciliation

↓

Real DOM

↓

Paint
```

---

> **"React doesn't update the screen when state changes. It re-renders the component, compares the old and new UI, and updates only what is necessary."**