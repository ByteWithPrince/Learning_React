# 📘 Chapter 6 - Conditional Rendering

---

# What is Conditional Rendering?

Conditional Rendering means **displaying different UI based on a condition**.

Instead of always showing the same content, React decides what should appear depending on the application's state, props, or other values.

Think of it like an **if-else statement for your user interface**.

Example:

```
Is User Logged In?

        │

   ┌────┴────┐

   │         │

  Yes       No

   │         │

Welcome    Login Page
```

---

# Why is Conditional Rendering Important?

Modern applications constantly make decisions.

Examples:

- Show Login button if user is logged out.
- Show Logout button if user is logged in.
- Show Admin Panel only for administrators.
- Display "No Products Found" if the product list is empty.
- Show a loading spinner while data is being fetched.

Without conditional rendering, every page would always display the same content.

---

# Conditional Rendering in Our Project

Our project uses two different methods.

### 1. Ternary Operator

Inside `UserGreeting.jsx`

```jsx
return (
    props.isLoggedIn
        ? welcomeMessage
        : loginPrompt
);
```

---

### 2. Logical AND (`&&`)

Inside `App.jsx`

```jsx
{
fruits.length > 0 &&
<List items={fruits} category="Fruits" />
}
```

These are the two most common ways to conditionally render UI.

---

# Method 1 - if Statement

Before React, we already knew JavaScript's `if`.

Example

```javascript
if(age >= 18){
    console.log("Adult");
}
else{
    console.log("Minor");
}
```

React can also use `if`, but **not directly inside JSX**.

Instead,

```jsx
function Greeting(){

    if(isLoggedIn){
        return <h1>Welcome</h1>;
    }

    return <h1>Please Login</h1>;

}
```

Sometimes this is the cleanest solution.

---

# Method 2 - Ternary Operator

Syntax

```javascript
condition ? value1 : value2
```

Meaning

```
Condition

↓

True ?

↓

value1

↓

False ?

↓

value2
```

---

# Example from UserGreeting.jsx

Your code

```jsx
return (
    props.isLoggedIn
        ? welcomeMessage
        : loginPrompt
);
```

Suppose

```jsx
props.isLoggedIn = true
```

React returns

```jsx
welcomeMessage
```

Output

```
Welcome Solo
```

If

```jsx
props.isLoggedIn = false
```

React returns

```jsx
loginPrompt
```

Output

```
Please log in Solo
```

---

# Visual Flow

```
props.isLoggedIn

        │

   ┌────┴────┐

 true      false

   │          │

Welcome   Login Prompt
```

---

# Method 3 - Logical AND (&&)

Sometimes we only want to display something if a condition is true.

Example from App.jsx

```jsx
{
fruits.length > 0 &&
<List
items={fruits}
category="Fruits"
/>
}
```

Meaning

```
If

fruits.length > 0

↓

Render List

Otherwise

↓

Render Nothing
```

---

# Why does && work?

JavaScript evaluates

```javascript
true && "Hello"
```

Result

```
Hello
```

But

```javascript
false && "Hello"
```

Result

```
false
```

React ignores

```
false

null

undefined
```

So nothing appears.

---

# Real Example

```jsx
{
cart.length > 0 &&
<Cart />
}
```

If cart contains items

↓

Display Cart

Otherwise

↓

Nothing appears.

---

# Ternary vs &&

Use **Ternary** when you have **two possible outcomes**.

Example

```jsx
isLoggedIn

?

<Dashboard/>

:

<Login/>
```

Use **&&** when you only want to display something if a condition is true.

Example

```jsx
notifications > 0 &&

<NotificationBadge/>
```

---

# Returning null

React components can also return

```jsx
null
```

Example

```jsx
function Secret(){

    if(!isAdmin){

        return null;

    }

    return <AdminPanel/>;

}
```

Returning `null` means

```
Render nothing.
```

The component still exists, but it produces no visible UI.

---

# Nested Conditional Rendering

Avoid this

```jsx
condition1

?

condition2

?

A

:

B

:

C
```

Although valid, it becomes difficult to read.

Instead

Move the logic outside JSX.

---

# Real-World Examples

## Authentication

```jsx
isLoggedIn

?

<HomePage/>

:

<LoginPage/>
```

---

## Shopping Cart

```jsx
cart.length === 0

?

<EmptyCart/>

:

<Cart/>
```

---

## Loading Screen

```jsx
loading

?

<Spinner/>

:

<Data/>
```

---

## Error Handling

```jsx
error

?

<ErrorPage/>

:

<App/>
```

---

# Common Beginner Mistakes

❌ Using `if` directly inside JSX

Wrong

```jsx
{

if(isLoggedIn){

}

}
```

Instead

Use

- if outside JSX
- ternary
- &&

---

❌ Complex nested ternaries

Hard to read.

---

❌ Forgetting that `0` is rendered.

Example

```jsx
{items.length && <List/>}
```

If

```
items.length = 0
```

React renders

```
0
```

Better

```jsx
items.length > 0 &&
<List/>
```

Your project correctly uses this approach.

---

# Best Practices

✅ Keep conditions simple.

✅ Move complex logic outside JSX.

✅ Use meaningful variable names.

✅ Prefer readability over clever code.

---

# Interview Questions

### Q1. What is Conditional Rendering?

### Q2. Difference between `if`, `? :`, and `&&`?

### Q3. When should you use `&&`?

### Q4. What happens if a component returns `null`?

### Q5. Why shouldn't you use nested ternary operators?

### Q6. Why does React ignore `false` and `null`?

---

# Quick Revision

- Conditional Rendering changes the UI based on conditions.
- `if` is useful for complex logic.
- `? :` is useful when choosing between two UI elements.
- `&&` is useful when rendering something only if a condition is true.
- Returning `null` renders nothing.
- Keep conditions simple and readable.

---

# Practical Exercise

1. Create a `Weather` component.
   - If `isRaining` is true, show "Take an umbrella."
   - Otherwise, show "Enjoy the sunshine."

2. Create a `Cart` component.
   - Show the cart only if `cart.length > 0`.

3. Create a `Profile` component.
   - Return `null` if the user is not logged in.

---

# Senior Developer Tip

As your application grows, avoid placing complex business logic directly inside JSX. Compute values before the `return` statement and let JSX focus on describing the UI. This keeps components easier to read, test, and maintain.

Example:

```jsx
const greeting = isLoggedIn
    ? welcomeMessage
    : loginPrompt;

return <>{greeting}</>;
```

---

# Memory Tricks

🚦 Conditional Rendering = Traffic Light

Condition decides which path to take.

❓ `? :` = Two Roads

True → Left

False → Right

✅ `&&` = Permission Gate

True → Enter

False → Stop

🚫 `null` = Invisible Component

The component exists but displays nothing.

---

> **"React isn't just about displaying UI—it's about displaying the *right* UI at the *right* time. Conditional rendering is how React adapts the interface to the current state of the application."**