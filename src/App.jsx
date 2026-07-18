import Header from "./Header.jsx"
import Footer from "./Footer.jsx"
import Food from "./Food.jsx"
import Card from "./Card.jsx"
import Button from "./Button.jsx"
import Student from "./Student.jsx"
import UserGreeting from "./UserGreeting.jsx"
import List from "./List.jsx"
import ClickButton from "./Button_click.jsx"
import ProfilePicture from "./ProfilePicture.jsx"
import MyComponent from "./MyComponent.jsx"
import Counter from "./Counter.jsx"
import ColorPicker from "./ColorPicker.jsx"
import ToDoList from "./ToDoList.jsx"
import MyComponent2 from "./MyComponent2.jsx"
import WindowResize from "./WindowResize.jsx"
import DigitalClock from "./DigitalClock.jsx"
import ComponentA from "./ComponentA.jsx"
import MyComponent3 from "./MyComponent3.jsx"
import StopWatch from "./StopWatch.jsx"

function App() {

    const fruits = [
        { id: 1, name: "Apple", calories: 52 },
        { id: 2, name: "Banana", calories: 89 },
        { id: 3, name: "Orange", calories: 47 },
        { id: 4, name: "Grapes", calories: 69 },
        { id: 5, name: "Mango", calories: 60 },
    ];

    const vegetables = [
        { id: 1, name: "Carrot", calories: 41 },
        { id: 2, name: "Broccoli", calories: 55 },
        { id: 3, name: "Spinach", calories: 23 },
        { id: 4, name: "Cauliflower", calories: 25 },
        { id: 5, name: "Cabbage", calories: 25 },
    ];

    return (
        <>
            <Card />
            <Button />
            <Header />
            <Food />
            <Footer />

            <Student name="SOLO" age={30} isStudent={true} />
            <Student name="Prince" age={21} isStudent={false} />
            <Student name="Thomas" age={41} isStudent={false} />
            <Student name="Cindy" age={19} isStudent={true} />
            <Student name="Lary" />
            <Student />

            <UserGreeting isLoggedIn={true} username="Solo" />
            <UserGreeting isLoggedIn={false} username="Jose" />
            <UserGreeting isLoggedIn={true} />

            {fruits.length > 0 && (
                <List items={fruits} category="Fruits" />
            )}

            {vegetables.length > 0 && (
                <List items={vegetables} category="Vegetables" />
            )}
  
            <ClickButton />
            <ProfilePicture />
            <MyComponent />
            <Counter />
            <ColorPicker />
            <ToDoList />
            <MyComponent2 />
            <WindowResize />
            <DigitalClock />
            <ComponentA />
            <MyComponent3 />
            <StopWatch />


        </>
    );
}

export default App;


//clickevent = it is an event that occurs when a user interacts with an element by clicking on it. In web development, click events are commonly used to trigger actions or behaviors in response to user input. For example, when a user clicks a button, a click event can be used to execute a function that performs a specific task, such as submitting a form, navigating to another page, or updating the content on the screen. Click events can be handled using JavaScript or frameworks like React, allowing developers to create interactive and dynamic web applications.


// react hooks= it is specially designed functions that allow you to use state and other React features in functional components. Hooks were introduced in React 16.8 to provide a way to manage state, side effects, and other component lifecycle features without the need for class components. Some commonly used hooks include useState, useEffect, useContext, useReducer, and useRef. Hooks enable developers to write cleaner and more reusable code by encapsulating logic into custom hooks, making it easier to share functionality across components.

//useState= it is a hook that allows you to add state to functional components in React. It provides a way to declare and manage state variables within a component, enabling the component to remember and update its data over time. The useState hook returns an array with two elements: the current state value and a function to update that state. When the state is updated using the provided function, React re-renders the component to reflect the new state.




//onChange= event handler in React that is triggered when the value of an input element changes. It is commonly used with form elements like text inputs, checkboxes, and select dropdowns to capture user input and update the component's state accordingly. The onChange event provides access to the event object, which contains information about the change, such as the new value of the input. By using onChange, developers can create controlled components that respond to user interactions and maintain a consistent state within the application.

// useEffect= it is a hook in React that allows you to perform side effects in functional components. Side effects can include tasks like fetching data from an API, subscribing to events, manipulating the DOM, or setting up timers. The useEffect hook takes two arguments: a callback function that contains the side effect logic and an optional dependency array that specifies when the effect should run. By using useEffect, developers can manage side effects in a clean and organized way, ensuring that they are executed at the appropriate times during the component's lifecycle.

// useEffect(Funtion, [dependencies])= it is a hook in React that allows you to perform side effects in functional components. Side effects can include tasks like fetching data from an API, subscribing to events, manipulating the DOM, or setting up timers. The useEffect hook takes two arguments: a callback function that contains the side effect logic and an optional dependency array that specifies when the effect should run. By using useEffect, developers can manage side effects in a clean and organized way, ensuring that they are executed at the appropriate times during the component's lifecycle.

// 1.  useEffect(()=>{})  //Runs after every render of the component. It is useful for performing side effects that need to be executed after every update, such as updating the document title or logging information to the console.

// 2. useEffect(()=>{}, [])  //Runs only once when the component mounts. It is useful for performing initialization tasks, such as fetching data from an API or setting up event listeners.

// 3. useEffect(()=>{}, [dependencies])  //Runs whenever the specified dependencies change. It is useful for performing side effects that depend on specific values, such as updating a chart when new data is received or re-rendering a component when a prop changes.

// uses
// 1. Event listerner
// 2. dom manipulation
// 3.subscription real time updates
// 4.fetching data from api
// clean up when a component unmounts


// useContext() = react hook that allows you to access and share state or data between components without having to pass props down through every level of the component tree. It provides a way to create a global state that can be accessed by any component within the context provider. The useContext hook takes a context object created with React.createContext() and returns the current value of that context, allowing components to consume and update shared data easily. This is particularly useful for managing themes, user authentication, or any other data that needs to be accessible across multiple components.

// Provider Component 
// 1. import { createContext } from "react";
// 2. export const MyContext = createContext();
// 3. <MyContext.Provider value={/* some value */}>
// 4.   {/* child components */}
// 5. </MyContext.Provider>

// Consumer Component
// 1. import { useContext } from "react";
// 2. import { MyContext } from "./MyContext";
// 3. const value = useContext(MyContext);
