# 📘 Chapter 16 - Component Lifecycle in Functional Components

---

# Introduction

Every React component has a lifecycle.

Just like a human life,

```
Birth

↓

Life

↓

Death
```

every React component goes through three major phases.

```
Mount

↓

Update

↓

Unmount
```

Understanding these phases helps you know:

- When components appear
- When they update
- When they disappear
- When effects run
- When cleanup functions execute

This knowledge is essential for writing efficient React applications.

---

# What is a Lifecycle?

A lifecycle describes the different stages a component experiences from creation until removal.

Think of a React component like an employee.

```
Company

↓

Employee Joins

↓

Works

↓

Leaves Company
```

React components behave similarly.

```
Component Created

↓

Component Works

↓

Component Removed
```

---

# The Three Lifecycle Phases

```
Mount

↓

Update

↓

Unmount
```

Let's understand each one.

---

# Phase 1 - Mounting

Mounting means

> A component is created and added to the webpage for the first time.

Example

```jsx
<App />

↓

<Counter />
```

React executes

```jsx
Counter();
```

for the first time.

The UI appears on the screen.

```
Component

↓

Render

↓

Virtual DOM

↓

Real DOM

↓

Visible
```

---

# During Mounting

React performs several steps.

```
Create Component

↓

Initialize Hooks

↓

Render JSX

↓

Create Virtual DOM

↓

Update Real DOM

↓

Run useEffect()
```

Notice

`useEffect()` runs **after** React finishes rendering.

---

# Example

```jsx
useEffect(() => {

    console.log("Mounted");

}, []);
```

Output

```
Mounted
```

only once.

Why?

Because

```
[]
```

means

```
Run After First Render
```

---

# Phase 2 - Updating

After mounting,

components may update many times.

Updates happen whenever something important changes.

Examples

```
State

Props

Context
```

---

# State Update Example

```jsx
setCount(count + 1);
```

Flow

```
State Changes

↓

Render Again

↓

Virtual DOM

↓

Diffing

↓

Reconciliation

↓

DOM Updates

↓

Effects Run
```

---

# Props Update Example

Parent

```jsx
<Student age={20}/>
```

Later

```jsx
<Student age={21}/>
```

The child component updates because its props changed.

---

# Context Update Example

Suppose

```jsx
<UserContext.Provider value={user}>
```

changes from

```
Solo
```

to

```
Alex
```

Every component using

```jsx
useContext(UserContext)
```

updates automatically.

---

# useEffect During Updates

Suppose

```jsx
useEffect(() => {

    console.log("Updated");

}, [count]);
```

Every time

```
count
```

changes,

React runs the effect again.

```
State

↓

Render

↓

Effect
```

---

# Cleanup Before Updating

Many beginners believe cleanup only happens when a component is removed.

That's not true.

Suppose

```jsx
useEffect(() => {

    return () => {

        console.log("Cleanup");

    };

}, [count]);
```

When

```
count
```

changes,

React performs

```
Cleanup Previous Effect

↓

Render

↓

Run New Effect
```

This prevents duplicate event listeners, timers, and subscriptions.

---

# Phase 3 - Unmounting

Unmounting means

> React removes a component from the UI.

Example

```
Home Page

↓

Navigate

↓

About Page

↓

Home Component Removed
```

The component no longer exists.

---

# Cleanup During Unmount

Your `WindowResize` example

```jsx
return () => {

window.removeEventListener(...);

}
```

runs here.

Flow

```
Unmount

↓

Cleanup

↓

Component Destroyed
```

---

# Stopwatch Example

Your stopwatch starts an interval.

```jsx
setInterval(...)
```

When the component disappears,

cleanup runs

```jsx
clearInterval(...)
```

Without cleanup,

the timer would continue running in memory.

---

# Complete Lifecycle Diagram

```
Component Mounts

↓

Render

↓

useEffect()

↓

User Interacts

↓

State Changes

↓

Cleanup

↓

Render Again

↓

useEffect()

↓

Component Unmounts

↓

Final Cleanup
```

---

# Functional Components vs Class Components

Older React used class lifecycle methods.

| Class Component | Functional Component |
|-----------------|---------------------|
| componentDidMount() | useEffect(..., []) |
| componentDidUpdate() | useEffect(..., [deps]) |
| componentWillUnmount() | Cleanup Function |

Hooks replaced lifecycle methods with a simpler and more flexible API.

---

# Lifecycle Example

Imagine your Digital Clock.

```
Clock Appears

↓

Interval Starts

↓

Every Second

↓

Time Updates

↓

Clock Re-renders

↓

User Leaves Page

↓

Interval Stops
```

Every lifecycle phase appears in one component.

---

# Lifecycle Timeline

```
Mount

↓

Render

↓

Effect Runs

↓

Update

↓

Cleanup

↓

Render

↓

Effect Runs

↓

Update

↓

Cleanup

↓

Render

↓

Effect Runs

↓

Unmount

↓

Final Cleanup
```

---

# What Triggers an Update?

A component updates when:

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

(unless optimization prevents it)

---

# What Does NOT Trigger an Update?

Changing a ref.

```jsx
countRef.current++;
```

does not trigger rendering.

This is why refs are perfect for interval IDs.

---

# Common Beginner Mistakes

❌ Thinking `useEffect([])` runs before rendering.

It runs **after** rendering.

---

❌ Forgetting cleanup.

---

❌ Assuming cleanup only happens on unmount.

It also happens before re-running an effect with changed dependencies.

---

❌ Confusing rendering with mounting.

Rendering happens many times.

Mounting happens only once.

---

# Best Practices

✅ Separate effects by responsibility.

✅ Always clean up timers and listeners.

✅ Keep effects focused.

✅ Understand what triggers updates.

---

# Interview Questions

### Q1. What are the three lifecycle phases?

### Q2. What happens during mounting?

### Q3. What triggers updates?

### Q4. When does cleanup run?

### Q5. Difference between rendering and mounting?

### Q6. Which Hook replaces `componentDidMount()`?

### Q7. Which Hook replaces `componentWillUnmount()`?

### Q8. Can cleanup run before an update?

---

# Quick Revision

- Mount = Component appears.
- Update = State, props, or context change.
- Unmount = Component is removed.
- `useEffect([])` runs after mounting.
- Cleanup runs before re-running an effect and during unmounting.
- Rendering can happen many times, but mounting happens only once.

---

# Practical Exercise

1. Add a `console.log("Mounted")` using `useEffect([])`.
2. Log every update when a counter changes.
3. Add a cleanup function that logs `"Cleaning Up"`.
4. Mount and unmount a component using conditional rendering.
5. Observe the order of lifecycle events in the console.

---

# Senior Developer Tip

A common source of bugs is forgetting that effects can run multiple times during a component's life. Whenever an effect creates something—such as an event listener, timer, or subscription—think about **how and when it should be cleaned up**. This habit will prevent memory leaks and stale data issues in larger applications.

---

# Memory Tricks

👶 Mount = Birth

🏃 Update = Growing

👋 Unmount = Goodbye

🪝 `useEffect([])` = First Greeting

🧹 Cleanup = Cleaning Before Leaving

🔄 Render ≠ Mount

Mount happens once.

Render can happen many times.

---

## Lifecycle Summary

```
Mount

↓

Render

↓

useEffect()

↓

Update

↓

Cleanup

↓

Render

↓

useEffect()

↓

Unmount

↓

Final Cleanup
```

---

> **"Every React component has a life: it appears, changes over time, and eventually disappears. Understanding that lifecycle helps you know exactly when your code should run."**