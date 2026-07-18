import React, { useState } from "react";

function MyComponent() {
  const [name, setName] = useState("Guest");
  const [age, setAge] = useState(0);
  const [isEmployed, setIsEmployed] = useState(false);

  const [name2, setName2] = useState("Guest");
  const [quantity, setQuantity] = useState(0);
  const [comment, setComment] = useState("");
  const [payment, setPayment] = useState("");
  const [shipping, setShipping] = useState("Delivery");
  const [car, setCar] = useState({
    year: 2024,
    make: "Ford",
    model: "Mustang",
  });
  const [foods, setFoods] = useState(["Apple", "Orange", "Banana"]);
  const [newFood, setNewFood] = useState("");
  const [cars, setCars] = useState([]);
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const updateName = () => {
    setName("Joey");
  };

  const incrementAge = () => {
    setAge(age + 3);
  };

  const toggleEmployedStatus = () => {
    setIsEmployed(!isEmployed);
  };

  function handleNameChange(event) {
    setName2(event.target.value);
  }

  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  function handleCommentChange(event) {
    setComment(event.target.value);
  }

  function handlePaymentChange(event) {
    setPayment(event.target.value);
  }

  function handleShippingChange(event) {
    setShipping(event.target.value);
  }

  function handleYearChange(event) {
    setCar((c) => ({ ...c, year: event.target.value }));
  }

  function handleMakeChange(event) {
    setCar((c) => ({ ...c, make: event.target.value }));
  }

  function handleModelChange(event) {
    setCar((c) => ({ ...c, model: event.target.value }));
  }

  function handleAddFood() {
    if (newFood.trim() === "") return;

    setFoods((f) => [...f, newFood]);
    setNewFood("");
  }

  function handleRemoveFood(index) {
    setFoods((foods) => foods.filter((_, i) => i !== index));
  }

  function handleAddCar() {
    const newCar = { year: carYear, make: carMake, model: carModel };
    setCars((c) => [...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  function handleRemoveCar(index) {
    setCars((c) => c.filter((_, i) => i !== index));
  }

  function handleCarYearChange(event) {
    setCarYear(event.target.value);
  }

  function handleMakeChange(event) {
    setCarMake(event.target.value);
  }

  function handleModelChange(event) {
    setCarModel(event.target.value);
  }

  return (
    <>
      <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>

        <p>Age: {age}</p>
        <button onClick={incrementAge}>Increment Age</button>

        <p>Is Employed: {isEmployed ? "Yes" : "No"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Employed Status</button>
      </div>

      <div>
        <input value={name2} onChange={handleNameChange} />
        <p>Name: {name2}</p>

        <input type="number" value={quantity} onChange={handleQuantityChange} />
        <p>Quantity: {quantity}</p>

        <textarea
          value={comment}
          onChange={handleCommentChange}
          placeholder="Enter delivery instructions"
        />
        <p>Comment: {comment}</p>

        <select value={payment} onChange={handlePaymentChange}>
          <option value="">Select an option</option>
          <option value="Visa">Visa</option>
          <option value="Gift Card">Gift Card</option>
          <option value="MasterCard">MasterCard</option>
        </select>

        <p>Payment Method: {payment}</p>

        <label>
          <input
            type="radio"
            value="Pick Up"
            checked={shipping === "Pick Up"}
            onChange={handleShippingChange}
          />
          Pick Up
        </label>

        <br />

        <label>
          <input
            type="radio"
            value="Delivery"
            checked={shipping === "Delivery"}
            onChange={handleShippingChange}
          />
          Delivery
        </label>

        <p>Shipping Method: {shipping}</p>
      </div>

      <div>
        <p>
          Your favorite car is a {car.year} {car.make} {car.model}
        </p>

        <input type="number" value={car.year} onChange={handleYearChange} />

        <br />

        <input type="text" value={car.make} onChange={handleMakeChange} />

        <br />

        <input type="text" value={car.model} onChange={handleModelChange} />
      </div>

      <div>
        <h2>List of Foods</h2>

        <ul>
          {foods.map((food, index) => (
            <li
              key={index}
              onClick={() => handleRemoveFood(index)}
              style={{ cursor: "pointer" }}
            >
              {food}
            </li>
          ))}
        </ul>

        <input
          type="text"
          placeholder="Enter a food item"
          value={newFood}
          onChange={(e) => setNewFood(e.target.value)}
        />

        <button onClick={handleAddFood}>Add Food</button>
      </div>
      <div>
        <h2>List of Cars</h2>
        <ul>
          {cars.map((car, index) => (
            <li
              key={index}
              onClick={() => handleRemoveCar(index)}
              style={{ cursor: "pointer" }}
            >
              {car.year} {car.make} {car.model}
            </li>
          ))}
        </ul>

        <input type="number" value={carYear} onChange={handleCarYearChange} />
        <br />
        <input
          type="text"
          value={carMake}
          onChange={handleMakeChange}
          placeholder="Enter car name"
        />
        <br />
        <input
          type="text"
          value={carModel}
          onChange={handleModelChange}
          placeholder="Enter car model"
        />
        <br />
        <button onClick={handleAddCar}>Add Car</button>
      </div>
    </>
  );
}

export default MyComponent;
