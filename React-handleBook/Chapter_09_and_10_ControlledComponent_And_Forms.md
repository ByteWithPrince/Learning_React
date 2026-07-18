# 📘 Chapter 9 - React State & useState()

---

# What is State?

State is **data that belongs to a component and can change over time**.

Whenever state changes, React automatically updates the user interface.

Think of state as the **memory** of a component.

Example

```
Counter

Current Count

↓

0

↓

1

↓

2

↓

3
```

The component remembers the current count.

---

# Why Do We Need State?

Imagine this code.

```jsx
let count = 0;

function increment(){

    count++;

}
```

Clicking the button changes

```
count

↓

1

↓

2

↓

3
```

But the screen still shows

```
0
```

Why?

Because React does **not** track ordinary JavaScript variables.

Changing them does **not** cause a re-render.

---

# React's Solution

React provides

```jsx
useState()
```

Instead of

```javascript
let count = 0;
```

we write

```jsx
const [count, setCount] = useState(0);
```

Now React knows

```
State Changed

↓

Re-render Component

↓

Update UI
```

---

# What is useState()?

`useState()` is a **React Hook**.

It allows functional components to store and update state.

Syntax

```jsx
const [state, setState] = useState(initialValue);
```

Example

```jsx
const [name, setName] = useState("Guest");
```

Initially

```
name

↓

Guest
```

---

# Breaking Down useState()

```jsx
const [name, setName] = useState("Guest");
```

There are three parts.

### State Variable

```jsx
name
```

Stores the current value.

---

### Setter Function

```jsx
setName()
```

Updates the value.

Never write

```jsx
name = "Solo";
```

Instead

```jsx
setName("Solo");
```

---

### Initial Value

```jsx
useState("Guest")
```

This is the value used during the first render.

---

# Array Destructuring

This syntax

```jsx
const [name, setName]
```

uses JavaScript array destructuring.

Imagine

```javascript
const data = ["Guest", updateFunction];
```

Destructuring

```javascript
const [name, setName] = data;
```

React internally returns an array.

---

# Our Examples

### String State

```jsx
const [name, setName] = useState("Guest");
```

---

### Number State

```jsx
const [age, setAge] = useState(0);
```

---

### Boolean State

```jsx
const [isEmployed, setIsEmployed] = useState(false);
```

React state can store

- Strings
- Numbers
- Booleans
- Objects
- Arrays
- Even functions

---

# Updating State

Example

```jsx
setName("Joey");
```

Flow

```
Button Click

↓

setName()

↓

State Changes

↓

Component Re-renders

↓

UI Updates
```

---

# Why Doesn't React Update Immediately?

State updates are **scheduled**, not applied instantly.

Example

```jsx
setName("Solo");

console.log(name);
```

Console may still show

```
Guest
```

because React updates state before the next render.

---

# Functional Updates

Your Counter component uses

```jsx
setCount(c => c + 1);
```

instead of

```jsx
setCount(count + 1);
```

This is called a **functional update**.

React gives the callback the latest value.

```
Previous Count

↓

Callback

↓

New Count
```

---

# Why Functional Updates Matter

Your code

```jsx
setCount(c => c + 1);

setCount(c => c + 1);

setCount(c => c + 1);
```

Result

```
+3
```

If you wrote

```jsx
setCount(count + 1);

setCount(count + 1);

setCount(count + 1);
```

React would use the same old value for each update, and the count would only increase by **1**.

Functional updates ensure each update uses the latest state.

---

# React Batching

React groups multiple state updates together.

```
Click

↓

3 setState Calls

↓

One Re-render
```

This optimization is called **batching**.

It improves performance by avoiding unnecessary renders.

---

# Boolean State

Example

```jsx
setIsEmployed(!isEmployed);
```

The `!` operator flips the value.

```
true

↓

false

↓

true

↓

false
```

Useful for

- Toggle buttons
- Dark mode
- Menus
- Modals

---

# Object State

Your code

```jsx
const [car, setCar] = useState({

year:2024,

make:"Ford",

model:"Mustang"

});
```

Updating objects

```jsx
setCar(c=>({

...c,

year:event.target.value

}));
```

---

# Why Use the Spread Operator?

Objects should not be modified directly.

Wrong

```jsx
car.year = 2025;
```

Correct

```jsx
setCar({

...car,

year:2025

});
```

The spread operator copies existing properties, and then we overwrite only the property that changed.

This follows React's preference for **immutable updates**.

---

# Array State

Example

```jsx
const [foods, setFoods] = useState([
"Apple",
"Orange"
]);
```

Adding

```jsx
setFoods(f=>

[...f,newFood]

);
```

Removing

```jsx
setFoods(f=>

f.filter(...)

);
```

Again, notice that we create a **new array** instead of changing the old one.

---

# Immutability

React prefers creating new values rather than modifying existing ones.

Instead of

```
Old Array

↓

Modify
```

React prefers

```
Old Array

↓

Copy

↓

Modify Copy

↓

Replace State
```

This makes updates predictable and enables efficient rendering.

---

# Render Cycle

```
User Click

↓

Setter Function

↓

State Changes

↓

React Re-renders Component

↓

Virtual DOM Updates

↓

Browser Updates UI
```

This cycle happens every time state changes.

---

# Best Practices

✅ Always use setter functions.

✅ Treat state as immutable.

✅ Use functional updates when the next state depends on the previous state.

✅ Keep state as simple as possible.

---

# Common Beginner Mistakes

❌ Changing state directly.

```jsx
count++;
```

---

❌ Mutating arrays with `push()`.

---

❌ Mutating objects.

---

❌ Expecting state updates to happen immediately.

---

# Interview Questions

### Q1. What is State?

### Q2. Difference between Props and State?

### Q3. Why must we use setter functions?

### Q4. What is a functional update?

### Q5. What is batching?

### Q6. Why should state be immutable?

### Q7. Can state store objects and arrays?

### Q8. Why doesn't React update state immediately?

---

# Quick Revision

- State is component memory.
- `useState()` creates state.
- Setter functions trigger re-renders.
- React batches state updates.
- Functional updates use the latest state.
- State should be treated as immutable.
- Objects and arrays must be copied before updating.

---

# Practical Exercise

1. Create a counter with increment, decrement, and reset.
2. Build a toggle button for dark/light mode.
3. Store a user object in state and update only the email.
4. Add and remove items from an array stored in state.
5. Experiment with `setCount(count + 1)` vs `setCount(c => c + 1)` and observe the difference.

---

# Senior Developer Tip

State should represent the **minimum amount of data** your component needs. Avoid storing values that can be calculated from other state. This keeps components simpler and reduces bugs.

Example:

Instead of storing

```jsx
const [fullName, setFullName] = useState("");
```

store

```jsx
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
```

and compute

```jsx
const fullName = `${firstName} ${lastName}`;
```

when rendering.

---

# Memory Tricks

🧠 State = Component Memory

📦 `useState()` = Memory Box

✏️ Setter = Update Button

🔄 State Change → Re-render

📋 Arrays & Objects = Copy First, Then Update

⚛️ React = "Don't mutate, replace."

---

> **"Props allow components to receive data. State allows components to remember and change data. Together, they form the foundation of interactive React applications."**


# 📘 Chapter 10 - Controlled Components & Forms

---

# Introduction

Modern web applications constantly collect information from users.

Examples include:

- Login forms
- Registration pages
- Search bars
- Shopping carts
- Payment forms
- Contact forms
- Settings pages

React provides a powerful way to manage these inputs using **Controlled Components**.

---

# What is a Controlled Component?

A **Controlled Component** is a form element whose value is completely controlled by React State.

Instead of the browser storing the current value, React stores it.

```
User Types

      │

      ▼

onChange Event

      │

      ▼

Setter Function

      │

      ▼

React State

      │

      ▼

Component Re-renders

      │

      ▼

Input Displays New Value
```

---

# Why Use Controlled Components?

Imagine a normal HTML input.

```html
<input type="text">
```

The browser manages its value internally.

React cannot easily monitor or validate what the user types.

With controlled components,

React always knows

- Current value
- Previous value
- Whether it changed
- When it changed

This makes validation, searching, filtering, and submission much easier.

---

# The Three Parts of a Controlled Input

Every controlled input has three things.

### 1. State

```jsx
const [name2, setName2] = useState("Guest");
```

This stores the current value.

---

### 2. Input

```jsx
<input
    value={name2}
    onChange={handleNameChange}
/>
```

The value comes from React State.

---

### 3. Event Handler

```jsx
function handleNameChange(event){

    setName2(event.target.value);

}
```

Whenever the user types,

React updates the state.

---

# Understanding event.target.value

Inside every input event,

React provides

```jsx
event.target.value
```

This represents the current text inside the input.

Example

User types

```
J
```

↓

```
event.target.value

↓

"J"
```

User continues

```
Jo
```

↓

```
"Jo"
```

Eventually

```
Joey
```

↓

```
"Joey"
```

Each keystroke updates React State.

---

# Text Input Example

Your code

```jsx
const [name2, setName2] = useState("Guest");

function handleNameChange(event){

    setName2(event.target.value);

}

<input

value={name2}

onChange={handleNameChange}

/>

<p>Name: {name2}</p>
```

Flow

```
Guest

↓

User Types

↓

State Updates

↓

Paragraph Updates

↓

Guest

↓

John
```

The paragraph changes immediately because React re-renders the component.

---

# Number Input

Your code

```jsx
const [quantity, setQuantity] = useState(0);
```

Input

```jsx
<input

type="number"

value={quantity}

onChange={handleQuantityChange}

/>
```

Notice

```jsx
event.target.value
```

still returns a **string**.

Example

```
5

↓

"5"
```

If you need a number,

convert it.

```jsx
setQuantity(Number(event.target.value));
```

---

# Textarea

Unlike HTML,

React treats

```jsx
<textarea>
```

just like any other input.

```jsx
<textarea

value={comment}

onChange={handleCommentChange}

/>
```

State stores the current text.

Useful for

- Reviews
- Messages
- Comments
- Feedback

---

# Select Dropdown

Your code

```jsx
<select

value={payment}

onChange={handlePaymentChange}

>
```

Each option has a value.

```jsx
<option value="Visa">
```

When selected,

```
payment

↓

Visa
```

React State always knows which option is selected.

---

# Radio Buttons

Your shipping example

```jsx
<input

type="radio"

value="Pick Up"

checked={shipping==="Pick Up"}

onChange={handleShippingChange}

/>
```

Notice something new.

Instead of

```
value
```

we also use

```
checked
```

React compares

```
shipping

↓

"Pick Up"
```

If they match,

the radio button becomes selected.

---

# Why checked?

Radio buttons have two states.

```
Selected

Not Selected
```

React controls which one is active.

---

# Color Picker

Your `ColorPicker.jsx`

```jsx
const [color,setColor]=useState("#FFFFFF");
```

Input

```jsx
<input

type="color"

value={color}

onChange={handleColorChange}

/>
```

When the user selects a color,

React stores

```
#FF0000
```

Then

```jsx
style={{

backgroundColor:color

}}
```

updates automatically.

This demonstrates how one piece of state can control multiple parts of the UI.

---

# Updating Objects

Your component stores

```jsx
const [car,setCar]=useState({

year:2024,

make:"Ford",

model:"Mustang"

});
```

When updating one property,

you use

```jsx
setCar(c=>({

...c,

year:event.target.value

}));
```

The spread operator copies the existing object before changing only one property.

Without the spread operator,

the other properties would be lost.

---

# Updating Arrays

Foods

```jsx
setFoods(f=>[...f,newFood]);
```

creates

```
Old Array

↓

Copy

↓

Add New Item

↓

Replace State
```

Removing

```jsx
filter()
```

creates a new array without the selected element.

Again,

React prefers creating new arrays instead of modifying existing ones.

---

# Controlled vs Uncontrolled Components

Controlled

```
React State

↓

Input
```

Uncontrolled

```
Browser

↓

Input
```

React applications generally prefer controlled components because they keep the UI and the application state synchronized.

---

# Benefits of Controlled Components

✅ Easier validation

✅ Instant feedback

✅ Easy form submission

✅ Better debugging

✅ Predictable behavior

✅ Synchronization between UI and State

---

# Common Beginner Mistakes

❌ Forgetting

```jsx
value={state}
```

---

❌ Forgetting

```jsx
onChange
```

---

❌ Updating state directly

Wrong

```jsx
name="John";
```

Correct

```jsx
setName("John");
```

---

❌ Mutating objects

Wrong

```jsx
car.make="BMW";
```

Correct

```jsx
setCar(c=>({

...c,

make:"BMW"

}));
```

---

❌ Forgetting to convert numbers

```jsx
Number(event.target.value)
```

when arithmetic is needed.

---

# Best Practices

✅ Keep one piece of state for each form value.

✅ Use descriptive handler names.

✅ Validate user input before submitting.

✅ Keep form logic separate from presentation.

✅ Reset forms after successful submission when appropriate.

---

# Interview Questions

### Q1. What is a Controlled Component?

### Q2. Why does React prefer controlled forms?

### Q3. What is `event.target.value`?

### Q4. Why do radio buttons use `checked`?

### Q5. Difference between controlled and uncontrolled components?

### Q6. Why do we use the spread operator when updating objects?

### Q7. Why does React use `value` instead of relying on the browser?

---

# Quick Revision

- Controlled components keep form values in React State.
- `value` connects the input to state.
- `onChange` updates the state.
- `event.target.value` contains the latest user input.
- Objects and arrays should be updated immutably.
- One state variable can control multiple UI elements.

---

# Practical Exercise

1. Create a login form with username and password.
2. Build a registration form with text inputs, radio buttons, and a dropdown.
3. Add validation so empty fields cannot be submitted.
4. Create a theme selector using a `<select>` element.
5. Extend the color picker to also display RGB values.

---

# Senior Developer Tip

Large forms can become difficult to manage if every field has its own state and handler. In real-world applications, developers often group related fields into a single object or use libraries such as **React Hook Form** or **Formik**. However, understanding controlled components with `useState` is essential before using those abstractions.

---

# Memory Tricks

📝 Form = User Input

🎮 Controlled Component = React Controls the Input

⌨️ `onChange` = User Typed Something

📦 State = Current Form Data

🔄 Type → Event → State → Re-render

---

> **"In React, the form doesn't own the data—the component does. Controlled components make React the single source of truth for user input."**