# 📘 Chapter 11 - Building a Todo List Application

---

# Introduction

So far, we've learned React concepts individually:

- Components
- JSX
- Props
- State
- Events
- Forms
- List Rendering

A Todo List is one of the first real applications where these concepts work together.

Although simple, it demonstrates patterns you'll use in larger applications such as note-taking apps, project managers, and task trackers.

---

# What Will We Build?

Our Todo List allows users to:

✅ Add new tasks

✅ Delete tasks

✅ Reorder tasks

✅ Display tasks dynamically

All of this happens **without refreshing the page** because React updates only the necessary parts of the UI.

---

# Project Overview

Our component stores two pieces of state.

```jsx
const [tasks, setTasks] = useState([
    "Eat Breakfast",
    "Go to Gym",
    "Read a Book",
]);

const [newTask, setNewTask] = useState("");
```

State Diagram

```
ToDoList

│

├── tasks

│       │

│       ├── Eat Breakfast

│       ├── Go to Gym

│       └── Read a Book

│

└── newTask

        │

        └── Current Text Inside Input
```

---

# Why Two State Variables?

Each state has a different responsibility.

### tasks

Stores every task currently in the list.

```jsx
[
"Eat Breakfast",
"Go to Gym",
"Read a Book"
]
```

---

### newTask

Stores what the user is currently typing.

```
User Types

↓

"Study React"

↓

newTask
```

Keeping them separate makes the component easier to understand.

---

# Controlled Input

The input field is a controlled component.

```jsx
<input

value={newTask}

onChange={handleInputChange}

/>
```

Whenever the user types,

```
Keyboard

↓

onChange

↓

setNewTask()

↓

State Updates

↓

Input Updates
```

React always knows what is inside the textbox.

---

# Adding a Task

Your function

```jsx
function addTask(){

    if(newTask.trim()!==""){

        setTasks(t=>[...t,newTask]);

        setNewTask("");

    }

}
```

Let's understand it step by step.

---

## Step 1

Ignore empty tasks.

```jsx
newTask.trim() !== ""
```

`trim()` removes whitespace.

Example

```
"      "

↓

""
```

This prevents blank tasks from being added.

---

## Step 2

Create a new array.

```jsx
setTasks(t => [...t, newTask]);
```

Suppose

```
tasks

↓

[
Breakfast,
Gym
]
```

After clicking Add

```
[
Breakfast,
Gym,
Study React
]
```

Notice we don't modify the original array.

We create a **new one**.

---

## Step 3

Clear the textbox.

```jsx
setNewTask("");
```

Now the input becomes empty.

---

# Rendering Tasks

```jsx
tasks.map(...)
```

React converts

```
Array

↓

JSX

↓

HTML
```

Each task becomes

```jsx
<li>

Task

Buttons

</li>
```

The UI grows automatically as the array grows.

---

# Why map()?

Without map()

```
<li>Task 1</li>

<li>Task 2</li>

<li>Task 3</li>
```

With map()

React creates every list item automatically.

One component can display hundreds of tasks.

---

# Deleting Tasks

Your code

```jsx
const updatedTasks = tasks.filter(

(_,i)=>i!==index

);

setTasks(updatedTasks);
```

Suppose

```
0 Breakfast

1 Gym

2 Read Book
```

Delete

```
1
```

Result

```
Breakfast

Read Book
```

Again,

filter()

creates a **new array**.

React replaces the old state.

---

# Moving Tasks Up

Your function

```jsx
const updatedTasks=[...tasks];
```

First creates a copy.

Then

```jsx
[updatedTasks[index],

updatedTasks[index-1]]

=

[updatedTasks[index-1],

updatedTasks[index]];
```

This swaps two values.

Example

Before

```
Breakfast

Gym

Books
```

Move Gym Up

After

```
Gym

Breakfast

Books
```

---

# Array Destructuring Swap

This JavaScript syntax

```javascript
[a,b]=[b,a]
```

swaps two values.

Without a temporary variable.

Traditional JavaScript

```javascript
temp=a;

a=b;

b=temp;
```

Modern JavaScript

```javascript
[a,b]=[b,a];
```

Much cleaner.

---

# Moving Tasks Down

Exactly the same idea.

Instead of swapping with

```
index-1
```

we swap with

```
index+1
```

React re-renders automatically.

---

# Event Flow

Adding a Task

```
User Types

↓

newTask State

↓

Click Add

↓

setTasks()

↓

tasks Updates

↓

React Re-renders

↓

New Task Appears
```

Deleting

```
Delete Button

↓

filter()

↓

New Array

↓

setTasks()

↓

React Re-renders
```

Moving

```
Move Button

↓

Swap Items

↓

setTasks()

↓

React Re-renders
```

---

# Concepts Used

This one project combines almost everything you've learned.

| Concept | Where Used |
|----------|------------|
| Components | ToDoList |
| JSX | Entire UI |
| State | tasks, newTask |
| Controlled Input | Textbox |
| Events | Button Clicks |
| map() | Display Tasks |
| filter() | Delete Tasks |
| Arrays | Task Storage |
| Immutability | Spread Operator |
| Conditional Logic | Empty Input Check |

---

# Why Create a Copy?

Notice

```jsx
const updatedTasks = [...tasks];
```

instead of

```jsx
tasks[index] = ...
```

React prefers immutable updates.

Old Array

↓

Copy

↓

Modify Copy

↓

Replace State

This makes updates predictable and allows React to detect changes efficiently.

---

# Using the Index as Key

Your code uses

```jsx
key={index}
```

This works because tasks are simple strings.

However, in real-world applications, using the array index as the key is discouraged when items can be reordered, inserted, or deleted. React may associate the wrong UI with the wrong item after the order changes.

A better approach is to give every task a unique ID.

Example

```jsx
{
id:1,
text:"Eat Breakfast"
}
```

Then use

```jsx
key={task.id}
```

---

# Possible Improvements

Our Todo List works well, but we could improve it further.

- Mark tasks as completed.
- Edit existing tasks.
- Save tasks in Local Storage.
- Add due dates.
- Add priorities.
- Group tasks into categories.
- Use unique IDs instead of indexes.
- Sort tasks alphabetically.
- Add drag-and-drop support.

These are common features in production applications.

---

# Best Practices

✅ Keep each function focused on one job.

✅ Update state immutably.

✅ Validate user input.

✅ Use meaningful function names.

✅ Prefer unique IDs for list keys.

---

# Common Beginner Mistakes

❌ Using `push()` on state arrays.

❌ Forgetting to clear the input after adding a task.

❌ Allowing empty tasks.

❌ Mutating arrays directly.

❌ Using unstable keys in dynamic lists.

---

# Interview Questions

### Q1. Which React concepts are used in a Todo List?

### Q2. Why do we use `filter()` to delete items?

### Q3. Why create a copy of the array before swapping?

### Q4. Why is `push()` discouraged when updating state?

### Q5. Why is using the array index as a key not recommended?

### Q6. How does React know when to re-render the task list?

---

# Quick Revision

- The Todo List stores tasks in React state.
- The input field is a controlled component.
- `map()` renders the list.
- `filter()` removes tasks.
- The spread operator copies arrays.
- Swapping elements changes task order.
- React re-renders whenever state changes.

---

# Practical Exercise

1. Add a "Completed" checkbox for each task.
2. Allow editing an existing task.
3. Save tasks using `localStorage`.
4. Add a due date to each task.
5. Replace string tasks with objects containing `id`, `text`, and `completed`.

---

# Senior Developer Tip

A production Todo application rarely stores tasks as plain strings. Instead, each task is usually represented by an object with additional metadata.

Example:

```jsx
{
    id: 1,
    text: "Learn React",
    completed: false,
    priority: "High",
    createdAt: "2026-07-19T10:30:00Z"
}
```

This structure makes it much easier to add features like filtering, sorting, editing, and synchronization with a backend.

---

# Memory Tricks

📝 Todo List = Mini React Application

📦 State = Task Storage

⌨️ Input = Controlled Component

➕ Add = Spread Operator

❌ Delete = filter()

🔄 Reorder = Swap Elements

⚛️ State Change → React Re-render

---

> **"The Todo List is often the first React application where multiple concepts come together. Mastering it means you've moved beyond isolated examples and started thinking like a React developer."**