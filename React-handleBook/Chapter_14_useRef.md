# 📘 Chapter 14 - useRef()

---

# Introduction

So far we've learned two important React Hooks:

- `useState()` → Stores data that changes the UI.
- `useEffect()` → Performs side effects after rendering.

Now we'll learn another powerful Hook:

```jsx
useRef()
```

Unlike `useState`, changing a ref **does not re-render** the component.

Instead, refs are mainly used for:

- Accessing DOM elements
- Storing mutable values
- Persisting data between renders
- Managing timers and intervals
- Remembering previous values

---

# What is a Ref?

A **Ref (Reference)** is an object that React keeps alive for the entire lifetime of a component.

Creating one:

```jsx
const inputRef = useRef(null);
```

React returns:

```jsx
{
    current: null
}
```

The important property is

```jsx
.current
```

React updates this property automatically when the ref is attached to a DOM element.

---

# useRef vs useState

| useState | useRef |
|-----------|---------|
| Causes re-render | Does not re-render |
| Stores UI state | Stores mutable values |
| Used for visible data | Used for references and internal values |
| React watches changes | React ignores changes |

Think of it this way:

```
useState

↓

React notices changes

↓

Re-render
```

```
useRef

↓

Value changes

↓

No re-render
```

---

# Example 1 - Referencing DOM Elements

Your component creates three refs.

```jsx
const inputRef1 = useRef(null);
const inputRef2 = useRef(null);
const inputRef3 = useRef(null);
```

Initially

```
inputRef1

↓

current

↓

null
```

After rendering

```
inputRef1

↓

current

↓

<input>
```

React automatically assigns the DOM element.

---

# Connecting a Ref

Your code

```jsx
<input ref={inputRef1} />
```

This tells React:

```
When this input is created,

store its DOM element inside

inputRef1.current
```

---

# Focusing an Input

Your function

```jsx
inputRef1.current.focus();
```

Normally, JavaScript finds an element using:

```javascript
document.getElementById(...)
```

React avoids this.

Instead,

```
Ref

↓

DOM Element

↓

focus()
```

Cleaner and safer.

---

# Manipulating the DOM

Your code also changes the background color.

```jsx
inputRef1.current.style.backgroundColor = "yellow";
```

This works because

```
.current
```

is the actual HTML input element.

---

# Why Doesn't React Recommend Frequent DOM Manipulation?

React prefers updating the UI through state.

Instead of

```jsx
element.style.color = ...
```

React usually recommends

```jsx
setColor(...)
```

and letting JSX decide the appearance.

Refs should mainly be used when direct DOM access is necessary, such as focusing an input or integrating with third-party libraries.

---

# Example 2 - Stopwatch

Your stopwatch demonstrates another purpose of refs.

```jsx
const intervalIdRef = useRef(null);
const startTimeRef = useRef(0);
```

Notice

These values are **not displayed**.

They're internal information.

Perfect candidates for refs.

---

# Why Not useState?

Suppose we stored

```jsx
intervalId
```

inside state.

Every time it changed

```
State Updates

↓

Component Re-renders
```

But the UI never displays the interval ID.

Re-rendering would be unnecessary.

Refs avoid this.

---

# Storing an Interval ID

Your effect

```jsx
intervalIdRef.current =
setInterval(...);
```

stores the timer ID.

Later,

```jsx
clearInterval(intervalIdRef.current);
```

stops it.

The UI never changes,

so state isn't needed.

---

# Storing the Start Time

```jsx
startTimeRef.current =
Date.now() - elapsedTime;
```

This remembers when the stopwatch started.

Every interval calculates

```
Current Time

-

Start Time

=

Elapsed Time
```

The ref preserves the original start time between renders.

---

# How the Stopwatch Works

```
Click Start

↓

Store Start Time

↓

Start Interval

↓

Every 10 ms

↓

Calculate Elapsed Time

↓

Update State

↓

React Re-renders

↓

Display Updates
```

Notice

Only

```
elapsedTime
```

uses state because it's displayed.

Everything else uses refs.

---

# Why useRef Persists

Suppose React re-renders.

Local variables

```jsx
let x = 5;
```

are recreated.

But refs survive.

```
Render

↓

Ref Exists

↓

Render Again

↓

Same Ref

↓

Render Again

↓

Still Same Ref
```

That's why timers and DOM references work correctly.

---

# useRef Lifecycle

```
Component Mounts

↓

Create Ref

↓

.current Persists

↓

Multiple Re-renders

↓

Still Same Ref

↓

Component Unmounts

↓

Ref Destroyed
```

---

# Common useRef Use Cases

- Focus an input
- Scroll to an element
- Store interval IDs
- Store timeout IDs
- Store previous values
- Integrate with third-party libraries
- Canvas manipulation
- Video or audio players

---

# useRef vs Local Variables

Local variable

```jsx
let count = 0;
```

Every render

↓

Reset to 0

---

Ref

```jsx
const countRef = useRef(0);
```

Every render

↓

Keeps previous value

---

# Common Beginner Mistakes

❌ Using refs instead of state for displayed data.

---

❌ Forgetting `.current`.

Wrong

```jsx
inputRef.focus();
```

Correct

```jsx
inputRef.current.focus();
```

---

❌ Overusing refs for styling instead of state.

---

❌ Expecting ref changes to trigger re-renders.

They do not.

---

# Best Practices

✅ Use state for UI.

✅ Use refs for DOM elements.

✅ Use refs for timers and mutable values.

✅ Avoid direct DOM manipulation unless necessary.

---

# Interview Questions

### Q1. What is `useRef()`?

### Q2. Difference between `useRef()` and `useState()`?

### Q3. Why doesn't updating a ref cause a re-render?

### Q4. What does `.current` represent?

### Q5. Why is `useRef()` useful for timers?

### Q6. When should refs be avoided?

### Q7. Can refs store any JavaScript value?

### Q8. Why is `useRef()` preferred over `document.getElementById()` in React?

---

# Quick Revision

- `useRef()` creates a persistent object.
- `.current` stores the value.
- Updating refs does not trigger re-renders.
- Refs are ideal for DOM access.
- Refs are perfect for timers and mutable values.

---

# Practical Exercise

1. Automatically focus an input when the component mounts.
2. Build a stopwatch with Pause and Resume.
3. Store the previous counter value using a ref.
4. Create a button that scrolls to a specific section of the page.
5. Build a countdown timer using `useRef` and `useEffect`.

---

# Senior Developer Tip

A useful rule of thumb is:

> **If changing a value should update what the user sees, use `useState`. If changing a value should not affect the UI but must persist across renders, use `useRef`.**

Following this distinction keeps components predictable and avoids unnecessary re-renders.

---

# Memory Tricks

📌 Ref = Reference

🏷️ `.current` = Current Value

🖱️ Ref → DOM Element

⏱️ Ref → Timer Storage

🔄 State = Re-render

📦 Ref = Persistent Box

🧠 **Question:** "Should the UI change?"

→ **Yes** → `useState`

→ **No** → `useRef`

---

> **"State is for data the user sees. Refs are for data the component needs."**