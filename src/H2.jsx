import React, { useState } from "react";

function H2() {
  const [Data, setData] = useState({
    Name: "",
    Emailid: "",
    pass: "",
    conpass: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({ ...Data, [name]: value }); // fixed setter
  };

  const handlesubmit = (e) => {
    e.preventDefault();

    // 1. Check if passwords match
    if (Data.pass !== Data.conpass) {
      alert("Error: Password does not match");
      return;
    }

    // 2. Check password length
    if (Data.pass.length <= 8) {
      alert("Error: Password length should be more than 8 characters");
      return;
    }

    // 3. Success case
    alert(`Form submitted successfully
      Name: ${Data.Name}
      Email: ${Data.Emailid}`);
  };

  return (
    <div>
      <h2>Form</h2>
      <form onSubmit={handlesubmit}>
        Name:
        <input
          type="text"
          name="Name"
          value={Data.Name}
          onChange={handleChange}
        />
        <br />
        Email:
        <input
          type="email"
          name="Emailid"
          value={Data.Emailid}
          onChange={handleChange}
        />
        <br />
        Password:
        <input
          type="password"
          name="pass"
          value={Data.pass}
          onChange={handleChange}
        />
        <br />
        Confirm Password:
        <input
          type="password"
          name="conpass"
          value={Data.conpass}
          onChange={handleChange}
        />
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default H2;
