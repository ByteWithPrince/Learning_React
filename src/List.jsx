import PropTypes from "prop-types";

function List(props) {

    // Get values passed from the parent component
    const category = props.category;
    const itemList = props.items;

    // Convert each object in the array into a <li> element
    // React requires a unique "key" for every item in a list
    const listItems = itemList.map(item => (
        <li key={item.id}>
            {item.name}: <b>{item.calories}</b>
        </li>
    ));

    // Display the category title and the generated list
    return (
        <>
            <h3 className="list-category">{category}</h3>
            <ol>{listItems}</ol>
        </>
    );
}

/*
|--------------------------------------------------------------------------
| PropTypes
|--------------------------------------------------------------------------
| These help React validate the props passed to this component.
| They are useful while developing and make your code easier to understand.
|
| category -> should be a string.
| items -> should be an array of objects.
|
| Each object inside the array must have:
|   id        -> Number (Required)
|   name      -> String (Required)
|   calories  -> Number (Required)
|--------------------------------------------------------------------------
*/

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            calories: PropTypes.number.isRequired,
        })
    ).isRequired,
};

export default List;

/* ==========================================================================

Revision Notes

=============================================================================

1. map()
--------
Used to transform every element of an array into something else.

Example:
const numbers = [1, 2, 3];

const doubled = numbers.map(num => num * 2);
// Output: [2, 4, 6]

React commonly uses map() to create JSX elements.

--------------------------------------------------------------------------

2. filter()
-----------
Creates a new array containing only elements that satisfy a condition.

Example:

const lowCalorie = fruits.filter(fruit => fruit.calories <= 50);

const highCalorie = fruits.filter(fruit => fruit.calories > 50);

--------------------------------------------------------------------------

3. sort()
---------
Sorts the original array.

Alphabetical (A → Z)

fruits.sort((a, b) => a.name.localeCompare(b.name));

Reverse (Z → A)

fruits.sort((a, b) => b.name.localeCompare(a.name));

Calories (Low → High)

fruits.sort((a, b) => a.calories - b.calories);

Calories (High → Low)

fruits.sort((a, b) => b.calories - a.calories);

--------------------------------------------------------------------------

4. key
------
Every element created using map() should have a unique key.

Correct:
<li key={item.id}>...</li>

Wrong:
<li key={index}>...</li>

Using IDs helps React efficiently update the DOM.

--------------------------------------------------------------------------

5. Props
---------
Props are read-only values passed from a parent component.

Example:

<List
    category="Fruits"
    items={fruits}
/>

Inside the component:

props.category
props.items

--------------------------------------------------------------------------

6. JSX Fragment
---------------
<> ... </>

A Fragment lets you return multiple elements
without creating an extra <div>.

Example:

<>
    <h1>Hello</h1>
    <p>World</p>
</>

Instead of:

<div>
    <h1>Hello</h1>
    <p>World</p>
</div>

--------------------------------------------------------------------------

7. PropTypes
------------
PropTypes validate props during development.

Example:

List.propTypes = {
    category: PropTypes.string,
    items: PropTypes.array.isRequired,
};

They help catch mistakes like passing a number instead of a string.

========================================================================== */