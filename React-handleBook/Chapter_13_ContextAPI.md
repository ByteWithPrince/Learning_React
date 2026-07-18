# 📘 Chapter 13 - Context API (`createContext` & `useContext`)

---

# Introduction

Imagine you're building a large React application.

Suppose `ComponentA` has some data:

```jsx
const [user, setUser] = useState("Solo");
```

Now imagine `ComponentD`, four levels below, needs that same data.

```
ComponentA

↓

ComponentB

↓

ComponentC

↓

ComponentD
```

Without Context, the data has to travel through every component, even if those components never use it.

This is called **Prop Drilling**.

React provides the **Context API** to solve this problem.

---

# What is Prop Drilling?

Prop drilling means passing props through multiple components just so a deeply nested component can use them.

Example

```
ComponentA

↓

user

↓

ComponentB

↓

user

↓

ComponentC

↓

user

↓

ComponentD
```

Notice something.

Only ComponentD actually needs the user.

Yet Components B and C are forced to receive and forward it.

This creates unnecessary code.

---

# What is Context?

Context allows components to share data without manually passing props through every intermediate component.

Instead of

```
A

↓

B

↓

C

↓

D
```

React creates a shortcut.

```
Context

──────────────▶

ComponentD
```

Any component inside the Context can directly access the shared data.

---

# Step 1 - Creating Context

Your code begins with

```jsx
export const UserContext = createContext();
```

This creates a Context object.

Think of it as an empty container.

```
UserContext

↓

Empty Box
```

Later, we'll place a value inside it.

---

# Step 2 - Providing Data

Your code

```jsx
<UserContext.Provider value={user}>
```

This is called the **Provider**.

The Provider makes data available to every component inside it.

Visualized

```
UserContext.Provider

│

├── ComponentB

│

├── ComponentC

│

└── ComponentD
```

All of these components can access the same value.

---

# The value Prop

```jsx
value={user}
```

This tells React

```
Share

↓

"Solo"
```

with every component inside the Provider.

If the state changes,

every consumer automatically receives the updated value.

---

# Step 3 - Consuming Context

Inside `ComponentC`

```jsx
const user = useContext(UserContext);
```

React searches upward for the nearest

```jsx
<UserContext.Provider>
```

and returns its value.

No props required.

---

# Component Hierarchy

Your application looks like this.

```
ComponentA

│

├── UserContext.Provider

│

└── ComponentB

        │

        └── ComponentC

                │

                └── ComponentD
```

Both ComponentC and ComponentD can access the same Context.

---

# Flow of Data

```
ComponentA

↓

Provider

↓

Context

↓

ComponentC

↓

ComponentD
```

Notice

ComponentB never needs the data.

It simply renders another component.

---

# useContext()

Syntax

```jsx
const value = useContext(UserContext);
```

This hook tells React

```
Find

↓

Nearest Provider

↓

Return Value
```

Simple.

---

# Comparing Props vs Context

## Using Props

```
ComponentA

↓

user

↓

ComponentB

↓

user

↓

ComponentC

↓

user

↓

ComponentD
```

Many unnecessary steps.

---

## Using Context

```
Provider

────────────▶

ComponentC

────────────▶

ComponentD
```

Much cleaner.

---

# Updating Context

Your Provider receives

```jsx
value={user}
```

Suppose

```jsx
setUser("Alex");
```

React automatically updates every consumer.

```
Provider

↓

Alex

↓

ComponentC

↓

ComponentD
```

No manual updates needed.

---

# Provider Scope

Only components **inside** the Provider can access the Context.

Example

```
Provider

│

├── ComponentB

│

└── ComponentC
```

These components can use Context.

Outside the Provider

```
ComponentX
```

cannot access it.

---

# Multiple Contexts

Applications often use several Contexts.

Example

```
ThemeContext

UserContext

LanguageContext

CartContext

AuthContext
```

Each stores different information.

---

# Real-World Uses

Context is commonly used for:

- Logged-in user
- Theme (Light/Dark Mode)
- Language selection
- Shopping cart
- Authentication
- User preferences

These values are needed throughout the application.

---

# Context is NOT a State Manager

A common misconception is that Context replaces state management libraries.

Context only **shares** data.

The data itself usually still comes from `useState()` or `useReducer()`.

Example

```jsx
const [user, setUser] = useState("Solo");
```

Context simply makes that state available to other components.

---

# Your Code Improvement

Currently you have

```jsx
<ComponentB user={user} />
```

However, `ComponentB` never uses this prop.

Since Context already provides the value, you can simplify it.

Instead of

```jsx
<ComponentB user={user} />
```

write

```jsx
<ComponentB />
```

This demonstrates Context more clearly and avoids unnecessary prop passing.

---

# When Should You Use Context?

Use Context when many components need the same data.

Good examples:

- Logged-in user
- Theme
- Language
- Notifications

Don't use Context for values used by only one or two components.

Props are simpler.

---

# Common Beginner Mistakes

❌ Forgetting to wrap components inside the Provider.

---

❌ Calling `useContext()` outside the Provider.

---

❌ Creating a new Context every render.

---

❌ Using Context for every piece of state.

---

❌ Mixing props and Context unnecessarily.

---

# Best Practices

✅ Create one Context per responsibility.

✅ Keep Providers close to where data is needed.

✅ Continue using props for local communication.

✅ Use Context only for shared data.

---

# Interview Questions

### Q1. What problem does Context solve?

### Q2. What is prop drilling?

### Q3. Difference between Props and Context?

### Q4. What is a Provider?

### Q5. What does `useContext()` return?

### Q6. Can multiple Providers exist?

### Q7. Does Context replace `useState()`?

### Q8. When should you avoid using Context?

---

# Quick Revision

- Context avoids prop drilling.
- `createContext()` creates a Context object.
- `Provider` shares values.
- `useContext()` reads those values.
- Only components inside a Provider can access Context.
- Context shares data—it does not replace state.

---

# Practical Exercise

1. Create a `ThemeContext` for Light/Dark mode.
2. Build a `LanguageContext` for English and Hindi.
3. Create an `AuthContext` for login information.
4. Pass a shopping cart through Context.
5. Update the Context value using `setUser()` and observe all consumers re-render.

---

# Senior Developer Tip

Context is excellent for sharing **global application state**, but it isn't designed for every type of state. Frequently changing data (such as complex server state or large application stores) may be better handled with dedicated state management solutions like Redux, Zustand, or TanStack Query. Start with props, introduce Context when prop drilling becomes a problem, and only adopt larger state-management libraries when your application's complexity truly requires them.

---

# Memory Tricks

📦 Context = Shared Storage

🚚 Props = Hand Delivery

🏢 Provider = Warehouse

📖 Consumer (`useContext`) = Person Collecting the Package

🪜 Prop Drilling = Passing a Bucket Through Every Floor

🌐 Context = Direct Distribution

---

> **"Props move data from parent to child. Context makes shared data available wherever it's needed without passing it through every intermediate component."**