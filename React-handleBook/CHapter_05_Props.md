# 📘 Chapter 5 - Props (Passing Data Between Components)

---

# What are Props?

**Props** (short for **Properties**) are read-only values passed from a **parent component** to a **child component**.

Think of props as **function arguments**.

In JavaScript:

```javascript
greet("Solo");
```

Here `"Solo"` is an argument passed to the function.

In React:

```jsx
<Student name="Solo" age={30} isStudent={true} />
```

Here `name`, `age`, and `isStudent` are props passed to the `Student` component.

---

# Why do we need Props?

Imagine creating a Student card.

Without props:

```jsx
<Student />
<Student />
<Student />
<Student />
```

Every card would display the same information.

Using props:

```jsx
<Student name="SOLO" age={30} isStudent={true} />
<Student name="Prince" age={21} isStudent={false} />
<Student name="Thomas" age={41} isStudent={false} />
<Student name="Cindy" age={19} isStudent={true} />
```

Now one component can display different data.

This makes components **reusable**.

---

# Parent → Child Communication

In our project,

`App.jsx` is the parent component.

`Student.jsx` is the child component.

```
App.jsx

│

├── Student

├── Student

├── Student

└── Student
```

Data flows in one direction.

```
Parent

↓

Child
```

This is called **One-Way Data Flow**, one of React's core principles.

Children cannot directly modify the props they receive.

---

# Our Student Component

Parent:

```jsx
<Student
    name="SOLO"
    age={30}
    isStudent={true}
/>
```

Child:

```jsx
function Student(props) {

}
```

React automatically creates an object called `props`.

It looks like this:

```javascript
props = {
    name: "SOLO",
    age: 30,
    isStudent: true
}
```

You don't create this object.

React creates it for you.

---

# Accessing Props

Example:

```jsx
<p>Name: {props.name}</p>
```

React reads

```javascript
props.name
```

and displays

```
Name: SOLO
```

Similarly,

```jsx
props.age
```

becomes

```
30
```

---

# Props Can Hold Many Data Types

### String

```jsx
name="Solo"
```

---

### Number

```jsx
age={30}
```

Notice numbers use `{}` because they are JavaScript expressions.

---

### Boolean

```jsx
isStudent={true}
```

---

### Array

```jsx
<List items={fruits} />
```

---

### Object

```jsx
<User user={userObject} />
```

---

### Function

```jsx
<Button onClick={handleClick} />
```

Functions are commonly passed so children can notify parents when something happens.

---

# Curly Braces `{}`

A common beginner question:

Why do some props use quotes while others use braces?

Strings:

```jsx
name="Solo"
```

Equivalent to:

```jsx
name={"Solo"}
```

Numbers:

```jsx
age={30}
```

Booleans:

```jsx
isStudent={true}
```

Arrays:

```jsx
items={fruits}
```

Objects:

```jsx
user={person}
```

Rule:

- Plain strings can use quotes.
- Any JavaScript expression uses `{}`.

---

# Props are Read-Only

Suppose inside Student you write:

```jsx
props.name = "Alex";
```

React does **not** allow this.

Props are **immutable**.

Only the parent should decide what data is passed.

Think of props like a sealed package.

The child can open and read it, but cannot change what's inside.

---

# Conditional Rendering Using Props

Your `Student.jsx` contains:

```jsx
<p>
Student:
{props.isStudent ? "Yes" : "No"}
</p>
```

This uses the **ternary operator**.

If

```jsx
props.isStudent
```

is true

Output:

```
Student: Yes
```

Otherwise:

```
Student: No
```

Flow:

```
isStudent

↓

true ?

↓

Yes

↓

No
```

We'll explore conditional rendering in detail in the next chapter.

---

# PropTypes

At the bottom of Student.jsx:

```jsx
Student.propTypes = {

}
```

React itself doesn't check prop types.

The `prop-types` package helps detect mistakes during development.

Example:

```jsx
Student.propTypes = {

name: PropTypes.string,

age: PropTypes.number,

isStudent: PropTypes.bool,

}
```

Now React warns you if you accidentally write:

```jsx
<Student age="Twenty" />
```

because `"Twenty"` is a string, not a number.

PropTypes improve developer experience but do **not** prevent runtime execution.

---

# defaultProps

Your code:

```jsx
Student.defaultProps = {

name: "Guest",

age: 0,

isStudent: false

}
```

Suppose App renders:

```jsx
<Student />
```

Since no props are provided,

React uses

```jsx
defaultProps
```

Output:

```
Name: Guest

Age: 0

Student: No
```

This prevents components from displaying `undefined`.

---

# UserGreeting Example

Your second component demonstrates another common use of props.

Parent:

```jsx
<UserGreeting
isLoggedIn={true}
username="Solo"
/>
```

Child:

```jsx
props.isLoggedIn
```

determines which message should be shown.

```
true

↓

Welcome Solo
```

```
false

↓

Please log in Solo
```

This is another example of conditional rendering driven by props.

---

# One-Way Data Flow

React follows

```
Parent

↓

Child

↓

Grandchild
```

Data only flows downward.

If a child wants to change parent data,

it cannot directly modify props.

Instead,

the parent passes a **function** as a prop.

We'll learn this when studying events and state.

---

# Real-World Example

Imagine an e-commerce website.

```
<ProductCard

name="Laptop"

price={59999}

inStock={true}

/>
```

The same ProductCard component can display thousands of different products simply by changing the props.

This is why reusable components are so powerful.

---

# Best Practices

✅ Treat props as read-only.

✅ Pass only the data a component actually needs.

✅ Use PropTypes during development.

✅ Use meaningful prop names.

Example:

```jsx
username
```

is better than

```jsx
u
```

---

# Common Beginner Mistakes

❌ Modifying props.

---

❌ Passing the wrong data type.

```jsx
age="20"
```

instead of

```jsx
age={20}
```

---

❌ Forgetting default props.

---

❌ Passing too many unnecessary props.

---

# Interview Questions

### Q1. What are Props?

### Q2. Why are props read-only?

### Q3. Explain one-way data flow.

### Q4. What is PropTypes?

### Q5. Why do we use defaultProps?

### Q6. Can functions be passed as props?

### Q7. What data types can props store?

### Q8. Difference between Props and State?

(We'll fully answer this after learning State.)

---

# Quick Revision

- Props = Parent → Child communication.
- Props are read-only.
- React automatically creates the props object.
- Components become reusable because of props.
- PropTypes help catch invalid prop types during development.
- defaultProps provide fallback values.
- Props can contain strings, numbers, booleans, arrays, objects, functions, and even JSX.

---

# Practical Exercise

1. Add an `email` prop to `Student`.
2. Display the email in the component.
3. Add a default email using `defaultProps`.
4. Add a PropType for the email.
5. Create a `Teacher` component that receives `name`, `subject`, and `experience` as props.

---

# Senior Developer Tip

Modern React projects increasingly use **TypeScript** instead of `PropTypes`. TypeScript checks prop types at compile time and provides much stronger tooling. However, understanding `PropTypes` is still valuable because you'll encounter it in many existing React codebases and interview questions.

---

# Memory Tricks

📦 Props = Parcel

The parent packs data, the child opens it.

👨‍👩‍👧 Parent → Child

Data always flows downward.

🔒 Props = Read Only

Open the package, don't change it.

🛡️ PropTypes = Security Guard

Warns when the wrong type of data is passed.

🎁 defaultProps = Backup Plan

Used when the parent doesn't provide a value.

---

> **"Props make components reusable. Instead of creating ten different Student components, we create one Student component and customize it with different data."**