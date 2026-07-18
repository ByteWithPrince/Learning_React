# 📘 Chapter 12 - useEffect() and Side Effects

---

# Introduction

So far we've learned how to create components and manage state using `useState()`.

But what if we want to:

- Listen for window resize events?
- Fetch data from an API?
- Update the browser title?
- Start a timer?
- Connect to a WebSocket?
- Set an interval?

These actions interact with the world **outside** React.

React calls these **Side Effects**.

To manage them, React provides the **useEffect() Hook**.

---

# What is a Side Effect?

A side effect is anything that happens outside of rendering JSX.

Examples include:

- HTTP requests
- Timers
- Event listeners
- Local Storage
- Cookies
- Browser title changes
- WebSocket connections

These actions affect something outside the component itself.

---

# Why Can't We Do This Directly?

Imagine writing

```jsx
window.addEventListener("resize", handleResize);
```

directly inside the component.

Every time React re-renders,

it executes the component again.

```
Render

↓

Add Listener

↓

Render

↓

Add Another Listener

↓

Render

↓

Add Another Listener
```

Eventually,

hundreds of listeners are attached.

This causes memory leaks and unexpected behavior.

---

# React's Solution

React provides

```jsx
useEffect()
```

Syntax

```jsx
useEffect(() => {

}, []);
```

React executes this function **after rendering**.

---

# Basic Syntax

```jsx
useEffect(() => {

    // Side Effect

});
```

The first argument is called the **Effect Function**.

It contains the code that React should execute.

---

# Dependency Array

The second argument is called the **Dependency Array**.

```jsx
useEffect(() => {

}, []);
```

It tells React **when** the effect should run.

---

# Three Ways to Use useEffect()

### 1. No Dependency Array

```jsx
useEffect(() => {

});
```

Runs

```
Every Render
```

---

### 2. Empty Dependency Array

```jsx
useEffect(() => {

}, []);
```

Runs

```
Only Once

↓

After First Render
```

Equivalent to "component mounted."

---

### 3. Dependency Array

```jsx
useEffect(() => {

}, [width, height]);
```

Runs

```
First Render

+

Whenever width changes

+

Whenever height changes
```

---

# Our WindowResize Component

```jsx
const [width, setWidth] = useState(window.innerWidth);

const [height, setHeight] = useState(window.innerHeight);
```

Initially,

React stores the current browser dimensions.

---

# Adding an Event Listener

Your code

```jsx
useEffect(() => {

window.addEventListener(

"resize",

handleResize

);

}, []);
```

Notice

```
[]
```

This means

```
Run Once

↓

Attach Listener
```

Exactly what we want.

---

# Cleanup Function

Inside your effect

```jsx
return () => {

window.removeEventListener(

"resize",

handleResize

);

};
```

This is called the **Cleanup Function**.

React executes it

```
Before Component Unmounts
```

or

```
Before Re-running the Effect
```

(if dependencies changed).

---

# Why Cleanup is Important

Imagine opening and closing this component many times.

Without cleanup

```
Open

↓

Add Listener

↓

Close

↓

Listener Still Exists

↓

Open Again

↓

Another Listener

↓

Another

↓

Another
```

Eventually,

many listeners remain in memory.

This is called a **memory leak**.

Cleanup prevents this.

---

# Updating the Browser Title

Your second effect

```jsx
useEffect(() => {

document.title =

`Width: ${width} Height: ${height}`;

}, [width, height]);
```

Whenever

```
width

or

height
```

changes,

React updates the browser tab title.

Flow

```
Window Resize

↓

State Updates

↓

Effect Runs

↓

Browser Title Updates
```

---

# Why Two useEffect Hooks?

Instead of writing one huge effect,

your code separates responsibilities.

### First Effect

```jsx
Add Event Listener
```

Runs once.

---

### Second Effect

```jsx
Update Title
```

Runs whenever width or height changes.

Each effect has one responsibility.

This makes the code easier to understand and maintain.

---

# Event Flow

```
User Resizes Window

↓

Browser Fires resize Event

↓

handleResize()

↓

setWidth()

↓

setHeight()

↓

State Updates

↓

React Re-renders

↓

useEffect Runs

↓

Browser Title Updates
```

---

# Component Lifecycle

Functional components don't have lifecycle methods like class components.

Instead,

`useEffect` lets us respond to lifecycle events.

```
Component Mounts

↓

Effect Runs

↓

State Changes

↓

Effect Runs Again

↓

Component Unmounts

↓

Cleanup Runs
```

---

# Common useEffect Examples

## API Calls

```jsx
useEffect(() => {

fetch(...);

}, []);
```

Runs once when the component loads.

---

## Timer

```jsx
useEffect(() => {

const id = setInterval(...);

return () => clearInterval(id);

}, []);
```

---

## Local Storage

```jsx
useEffect(() => {

localStorage.setItem(...);

}, [data]);
```

---

## Window Resize

Exactly like your component.

---

## Dark Mode

```jsx
useEffect(() => {

document.body.className = theme;

}, [theme]);
```

---

# Common Beginner Mistakes

❌ Forgetting the dependency array.

May cause unnecessary effect executions.

---

❌ Forgetting cleanup.

Creates memory leaks.

---

❌ Putting unrelated logic in one effect.

Use multiple effects instead.

---

❌ Updating state unnecessarily inside an effect.

Can create infinite loops.

Example

```jsx
useEffect(() => {

setCount(count + 1);

});
```

This continuously updates the state, causing the effect to run again.

---

# Best Practices

✅ Keep each effect focused on one responsibility.

✅ Always clean up event listeners, timers, and subscriptions.

✅ Include all values used inside the effect in the dependency array unless you intentionally want different behavior.

✅ Avoid placing heavy computations inside effects.

---

# Interview Questions

### Q1. What is useEffect()?

### Q2. What is a side effect?

### Q3. What does the dependency array do?

### Q4. What is the cleanup function?

### Q5. Why are cleanup functions important?

### Q6. Difference between `[]` and `[value]`?

### Q7. Why shouldn't event listeners be added during rendering?

### Q8. Can a component have multiple useEffect hooks?

---

# Quick Revision

- `useEffect()` handles side effects.
- Side effects happen after rendering.
- `[]` means "run once after the first render."
- `[dependencies]` means "run when these values change."
- Cleanup functions prevent memory leaks.
- Multiple `useEffect` hooks are encouraged when they manage different responsibilities.

---

# Practical Exercise

1. Log a message when the component mounts.
2. Update the page title with the current time every second.
3. Listen for keyboard presses and display the last key pressed.
4. Build a component that tracks whether the browser is online or offline.
5. Add and remove a scroll event listener using `useEffect`.

---

# Senior Developer Tip

Think of `useEffect` as a way to **synchronize your React component with external systems**. Those systems might be the browser (events, title, storage), a server (API requests), or timers. Whenever you create something outside React—such as an event listener or interval—you should also plan how to clean it up.

---

# Memory Tricks

🪝 Hook = Extra React Feature

⚡ useEffect = Side Effect Manager

🎯 `[]` = Run Once

🔄 `[deps]` = Run When Dependencies Change

🧹 Cleanup = Clean Before Leaving

🌍 Side Effect = Anything Outside React

---

> **"Rendering describes what the UI should look like. Effects synchronize that UI with the outside world."**


# 📘 Chapter 12 - useEffect() and Side Effects

---

# Introduction

Until now, we've learned how to create components and manage their state using `useState()`.

However, applications often need to interact with things **outside React**, such as:

- Fetching data from an API
- Listening for browser events
- Starting timers
- Updating the browser title
- Saving data to Local Storage
- Connecting to WebSockets

These operations are called **Side Effects**.

React provides the **useEffect() Hook** to perform and manage them safely.

---

# What is a Side Effect?

A **Side Effect** is any operation that affects something outside the component's rendering process.

Examples:

- Network requests
- Event listeners
- Timers
- Browser title updates
- Local Storage
- Cookies
- Audio or video playback

Rendering JSX is **not** a side effect.

Everything else usually is.

---

# Why Can't We Perform Side Effects During Rendering?

Consider this code:

```jsx
window.addEventListener("resize", handleResize);
```

If placed directly inside a component, it runs **every time the component renders**.

```
Render

↓

Add Listener

↓

Render Again

↓

Add Another Listener

↓

Render Again

↓

Another Listener
```

Eventually, hundreds of event listeners would exist.

This wastes memory and slows the application.

---

# Introducing useEffect()

`useEffect()` tells React:

> "Run this code after rendering."

Basic syntax:

```jsx
useEffect(() => {

    // Side Effect

});
```

The function passed to `useEffect` is called the **Effect Function**.

---

# The Dependency Array

`useEffect` accepts a second argument called the **Dependency Array**.

```jsx
useEffect(() => {

}, []);
```

This array controls **when** React runs the effect.

---

# Three Ways to Use useEffect()

## 1. No Dependency Array

```jsx
useEffect(() => {

});
```

Runs after **every render**.

```
Render

↓

Effect

↓

Render

↓

Effect

↓

Render

↓

Effect
```

Useful only in special situations.

---

## 2. Empty Dependency Array

```jsx
useEffect(() => {

}, []);
```

Runs **only once**, immediately after the component first appears.

```
Component Mounts

↓

Effect Runs

↓

Never Runs Again
```

This is commonly used for:

- API calls
- Event listeners
- Timers

---

## 3. Dependency Array

```jsx
useEffect(() => {

}, [width, height]);
```

Runs:

- After the first render
- Whenever `width` changes
- Whenever `height` changes

```
Render

↓

width Changes

↓

Effect Runs

↓

height Changes

↓

Effect Runs
```

---

# Example 1 - Window Resize

Your component begins with:

```jsx
const [width, setWidth] = useState(window.innerWidth);

const [height, setHeight] = useState(window.innerHeight);
```

Initially, the component stores the browser's width and height.

---

## Adding an Event Listener

```jsx
useEffect(() => {

    window.addEventListener("resize", handleResize);

}, []);
```

The empty dependency array means this listener is added **only once**.

Flow:

```
Component Mounts

↓

Effect Runs

↓

Event Listener Added
```

---

# Cleanup Functions

Your effect returns another function:

```jsx
return () => {

    window.removeEventListener(
        "resize",
        handleResize
    );

};
```

This is called the **Cleanup Function**.

React automatically calls it when:

- The component is removed (unmounted)
- Before the effect runs again (if dependencies changed)

---

# Why Cleanup Matters

Without cleanup:

```
Open Component

↓

Add Listener

↓

Close Component

↓

Listener Still Exists

↓

Open Again

↓

Another Listener

↓

Another

↓

Another
```

Eventually, dozens of listeners remain active.

This is called a **Memory Leak**.

Cleanup prevents this.

---

# Updating the Browser Title

Your second effect:

```jsx
useEffect(() => {

document.title =
`Width: ${width} Height: ${height}`;

}, [width, height]);
```

Whenever the window size changes:

```
Resize Window

↓

State Updates

↓

Component Re-renders

↓

Effect Runs

↓

Browser Title Updates
```

---

# Why Use Multiple useEffect Hooks?

Your component uses two separate effects.

### Effect 1

```jsx
Add Event Listener
```

Runs once.

---

### Effect 2

```jsx
Update Browser Title
```

Runs whenever width or height changes.

Each effect has a single responsibility.

This is considered good React practice.

---

# Example 2 - Digital Clock

Your `DigitalClock` component introduces another important side effect:

```jsx
const [time, setTime] = useState(new Date());
```

The state stores the current time.

---

# Creating a Timer

```jsx
useEffect(() => {

    const intervalId =
        setInterval(() => {

            setTime(new Date());

        }, 1000);

    return () => clearInterval(intervalId);

}, []);
```

Here, `setInterval()` runs every **1000 milliseconds (1 second)**.

Flow:

```
Component Mounts

↓

setInterval Starts

↓

Every Second

↓

setTime()

↓

State Updates

↓

Component Re-renders

↓

Clock Updates
```

---

# Why Store the Interval ID?

`setInterval()` returns an ID.

```jsx
const intervalId = setInterval(...);
```

React stores this ID so it can later stop the timer.

Stopping the timer:

```jsx
clearInterval(intervalId);
```

Without `clearInterval()`, the timer would continue running even after the component is removed.

---

# Formatting Time

Your component displays time in **12-hour format**.

```jsx
hours = hours % 12 || 12;
```

Examples:

| 24-Hour | 12-Hour |
|----------|----------|
| 00 | 12 AM |
| 09 | 9 AM |
| 12 | 12 PM |
| 15 | 3 PM |
| 21 | 9 PM |

---

# Padding Numbers

Your helper function:

```jsx
padZero(number)
```

converts

```
5

↓

05
```

instead of displaying

```
9:5:2
```

the clock displays

```
09:05:02
```

making it look like a real digital clock.

---

# Comparing Our Two Examples

| WindowResize | DigitalClock |
|--------------|--------------|
| Event Listener | Timer |
| `addEventListener()` | `setInterval()` |
| `removeEventListener()` | `clearInterval()` |
| Updates on resize | Updates every second |

Although they perform different tasks, both use the same `useEffect` lifecycle.

---

# Component Lifecycle with useEffect

```
Component Mounts

↓

Effect Runs

↓

User Interacts

↓

State Changes

↓

Component Re-renders

↓

Effect Runs Again (if dependencies changed)

↓

Component Unmounts

↓

Cleanup Runs
```

---

# Common useEffect Use Cases

- Fetching API data
- Timers
- Event listeners
- Local Storage synchronization
- Browser title updates
- Online/offline detection
- WebSocket connections

---

# Common Beginner Mistakes

❌ Forgetting the dependency array.

---

❌ Forgetting cleanup functions.

---

❌ Putting unrelated logic inside one large effect.

---

❌ Updating state endlessly inside an effect.

Example:

```jsx
useEffect(() => {

setCount(count + 1);

});
```

This creates an infinite render loop.

---

# Best Practices

✅ Keep each effect focused on one responsibility.

✅ Always clean up event listeners and timers.

✅ Include all required dependencies.

✅ Avoid unnecessary effects.

---

# Interview Questions

### Q1. What is a side effect?

### Q2. What does useEffect() do?

### Q3. What is the dependency array?

### Q4. Why are cleanup functions important?

### Q5. Difference between `[]` and `[value]`?

### Q6. Why should timers be cleared?

### Q7. Why can a component have multiple `useEffect` hooks?

### Q8. What causes an infinite effect loop?

---

# Quick Revision

- `useEffect()` manages side effects.
- Side effects happen after rendering.
- `[]` means "run once after the first render."
- `[dependencies]` means "run when these values change."
- Cleanup functions prevent memory leaks.
- Event listeners and timers should always be cleaned up.

---

# Practical Exercise

1. Build a stopwatch using `setInterval()`.
2. Track mouse position using an event listener.
3. Display whether the browser is online or offline.
4. Update the browser title with the current count from a counter.
5. Fetch data from a public API when the component mounts.

---

# Senior Developer Tip

Think of `useEffect` as a synchronization tool, not just a place to "run code." Its purpose is to keep your React component in sync with external systems such as the browser, servers, timers, or storage. Whenever you create something outside React—like an event listener, interval, or subscription—you should also clean it up when it's no longer needed.

---

# Memory Tricks

🪝 Hook = Extra React Feature

⚡ useEffect = Side Effect Manager

🌍 Side Effect = Anything Outside React

🎯 `[]` = Run Once

🔄 `[deps]` = Run When Dependencies Change

🧹 Cleanup = Remove Before Leaving

⏱️ `setInterval()` = Start Repeating

🛑 `clearInterval()` = Stop Repeating

---

> **"State tells React what the UI should look like. Effects keep that UI synchronized with everything outside React."**