import React, { useState } from "react";

function Myform() {
  // separate state variables for each field
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("");
  const [city, setCity] = useState("Ahmedabad");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`
      First Name: ${firstName}
      Email: ${email}
      Password: ${password}
      Confirm Password: ${confirmPassword}
      Message: ${message}
      Gender: ${gender}
      City: ${city}
    `);
  };

  return (
    <>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <label>First Name: </label>
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <br />
        <label>Email: </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label>Password: </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <label>Confirm Password: </label>
        <input
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        <br />
        <label>Message: </label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <br />
        <label>Gender: </label>
        <input
          type="radio"
          name="gender"
          value="Male"
          checked={gender === "Male"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          checked={gender === "Female"}
          onChange={(e) => setGender(e.target.value)}
        />{" "}
        Female
        <br />
        <label>City: </label>
        <select value={city} onChange={(e) => setCity(e.target.value)}>
          <option value="">Select City</option>
          <option value="Ahmedabad">Ahmedabad</option>
          <option value="Mumbai">Mumbai</option>
          <option value="Delhi">Delhi</option>
          <option value="Bangalore">Bangalore</option>
        </select>
        <br />
        <button type="submit">Submit</button>
      </form>
    </>
  );
}

export default Myform;
