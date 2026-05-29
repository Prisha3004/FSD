import React, { useState } from "react";

function Calc() {
  const [formData, setFormData] = useState({
    num1: "",
    num2: "",
    operation: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { num1, num2, operation } = formData;

    if (!num1 || !num2 || !operation) {
      alert("Error: All fields are required!");
      return;
    }

    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (operation === "div" && n2 === 0) {
      alert("Error: Cannot divide by zero!");
      return;
    }

    let result;

    if (operation === "add") {
      result = n1 + n2;
    } else if (operation === "sub") {
      result = n1 - n2;
    } else if (operation === "mul") {
      result = n1 * n2;
    } else if (operation === "div") {
      result = n1 / n2;
    } else {
      alert("Error: Invalid operation selected!");
      return;
    }

    alert(`Result: ${result}`);
  };

  return (
    <div>
      <h2>Calculator</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Number 1: </label>
          <input
            type="number"
            name="num1"
            value={formData.num1}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Number 2: </label>
          <input
            type="number"
            name="num2"
            value={formData.num2}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Operation: </label>
          <select
            name="operation"
            value={formData.operation}
            onChange={handleChange}
            required
          >
            <option value="">Select Operation</option>
            <option value="add">Add</option>
            <option value="sub">Subtract</option>
            <option value="mul">Multiply</option>
            <option value="div">Divide</option>
          </select>
        </div>

        <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default Calc;
