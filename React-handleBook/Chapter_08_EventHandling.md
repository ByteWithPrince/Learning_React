# 📘 Chapter 8 - Event Handling in React

---

# What are Events?

An **event** is any action performed by the user or the browser.

Examples include:

- Clicking a button
- Double-clicking
- Typing in an input
- Moving the mouse
- Pressing a keyboard key
- Submitting a form
- Hovering over an element

Without events, websites would be completely static.

Events allow users to interact with the application.

---

# What is an Event Handler?

An **event handler** is simply a function that runs when an event occurs.

Example:

```jsx
function handleClick() {
    console.log("Button Clicked!");
}

<button onClick={handleClick}>
    Click Me
</button>
```

Flow

```
User Clicks Button

↓

onClick Event

↓

handleClick()

↓

Function Executes
```

---

# Events in React vs HTML

HTML

```html
<button onclick="alert('Hello')">
```

React

```jsx
<button onClick={handleClick}>
```

Notice

HTML

```
onclick
```

React

```
onClick
```

React uses **camelCase**.

---

# Our ClickButton Component

```jsx
function ClickButton(){

    const handleClick = (e)=>

        e.target.textContent="Yushh";

    return(

        <button
            onDoubleClick={(e)=>handleClick(e)}
        >
            Click Me TWICE
        </button>

    );

}
```

This component changes the button text when the user double-clicks it.

---

# The Event Object

Your function receives

```jsx
(e)
```

This is called the **Event Object**.

React automatically creates this object whenever an event occurs.

Example

```jsx
const handleClick = (e)=>{

}
```

The event object contains useful information.

Examples

- Which element triggered the event
- Mouse position
- Keyboard key
- Input value
- Time of the event

---

# event.target

Your code

```jsx
e.target
```

means

> "The element that triggered this event."

Since the button was clicked,

```
e.target

↓

Button
```

---

# Changing Text

Your code

```jsx
e.target.textContent="Yushh";
```

changes

Before

```
Click Me TWICE
```

↓

After

```
Yushh
```

---

# onClick vs onDoubleClick

React provides many mouse events.

### onClick

Runs once.

```jsx
<button onClick={handleClick}>
```

---

### onDoubleClick

Runs only after two quick clicks.

```jsx
<button onDoubleClick={handleClick}>
```

---

### Other Mouse Events

```jsx
onMouseEnter

onMouseLeave

onMouseMove

onContextMenu

onMouseDown

onMouseUp
```

---

# Passing Functions

Correct

```jsx
<button onClick={handleClick}>
```

React stores the function reference.

The function executes only after clicking.

---

Wrong

```jsx
<button onClick={handleClick()}>
```

This immediately executes the function while rendering.

---

# Passing Arguments

Suppose we want to send data.

```jsx
<button

onClick={()=>handleClick("Solo")}

>
```

Arrow functions allow us to pass custom arguments.

Your commented example demonstrates this perfectly.

---

# The Commented Counter Example

Your code

```jsx
let count = 0;
```

and

```jsx
count++;
```

shows an important React concept.

Although the console displays increasing values,

the UI **does not update**.

Why?

Because

```
count

↓

Normal Variable
```

React does not track normal variables.

To update the UI,

React needs **State** (`useState`).

We'll learn this in the next chapter.

---

# ProfilePicture Component

Your second component

```jsx
const handleClick=(e)=>

e.target.style.display="none";
```

When the image is clicked,

its CSS becomes

```css
display:none;
```

Result

```
Image

↓

Click

↓

Hidden
```

---

# Direct DOM Manipulation

Here

```jsx
e.target.style.display="none";
```

directly changes the DOM.

Although this works,

React generally prefers updating the UI using **State** instead.

Instead of

```
DOM

↓

Manual Change
```

React prefers

```
State Changes

↓

React Re-renders

↓

DOM Updates Automatically
```

This keeps the UI predictable.

---

# Why Avoid Direct DOM Manipulation?

Direct DOM manipulation can cause inconsistencies.

Imagine React thinks

```
Image Visible
```

but JavaScript manually hides it.

Now React's Virtual DOM and the real DOM are out of sync.

State avoids this problem.

---

# Common React Events

Mouse

```jsx
onClick

onDoubleClick

onMouseEnter

onMouseLeave
```

Keyboard

```jsx
onKeyDown

onKeyUp
```

Forms

```jsx
onChange

onSubmit

onFocus

onBlur
```

---

# Event Flow

```
User Action

↓

React Event Listener

↓

Synthetic Event

↓

Your Function

↓

Update State / Perform Action

↓

React Updates UI
```

---

# What is a Synthetic Event?

React wraps browser events inside a **SyntheticEvent**.

This provides a consistent API across different browsers.

Example

```jsx
function handleClick(e){

}
```

Even though browsers implement events differently,

React gives us one unified event object.

Most of the time,

you can treat it just like a normal browser event.

---

# Best Practices

✅ Pass function references.

```jsx
onClick={handleClick}
```

---

✅ Use arrow functions only when arguments are needed.

---

✅ Keep event handlers short.

---

✅ Update State instead of manipulating the DOM whenever possible.

---

# Common Beginner Mistakes

❌ Calling the function immediately.

Wrong

```jsx
onClick={handleClick()}
```

---

❌ Modifying the DOM directly.

Prefer state.

---

❌ Forgetting the event parameter.

---

❌ Writing huge functions inside JSX.

---

# Interview Questions

### Q1. What is an Event in React?

### Q2. What is an Event Handler?

### Q3. What is the Event Object?

### Q4. What is `event.target`?

### Q5. Difference between `onClick` and `onDoubleClick`?

### Q6. Why shouldn't we manipulate the DOM directly?

### Q7. What is a Synthetic Event?

### Q8. Why is `onClick={handleClick}` different from `onClick={handleClick()}`?

---

# Quick Revision

- Events allow users to interact with the UI.
- Event handlers are functions that respond to events.
- React uses camelCase event names.
- `event.target` refers to the element that triggered the event.
- React wraps browser events in Synthetic Events.
- Prefer updating State over directly manipulating the DOM.

---

# Practical Exercise

1. Create a button that changes its background color when clicked.
2. Display an alert when the mouse enters an image.
3. Create an image that disappears on double-click.
4. Log the mouse position using `onMouseMove`.
5. Create a button that prints your name to the console.

---

# Senior Developer Tip

Treat event handlers as the **bridge between the user and your application's logic**. In production React applications, event handlers usually don't modify the DOM directly. Instead, they update state, trigger API calls, or dispatch actions. This keeps React in control of the UI and makes your application easier to maintain and debug.

---

# Memory Tricks

🖱️ Event = User Action

⚡ Event Handler = Response Function

🎯 `event.target` = Element That Triggered the Event

🧩 Synthetic Event = React's Cross-Browser Event Wrapper

🔄 Click → Handler → State → UI

---

> **"Events tell React *what happened*. State tells React *what changed*. Together they make applications interactive."**