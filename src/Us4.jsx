import React, { useState } from "react";

function Us4() {
  const [data, setdata] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setdata({ ...data, [name]: value });
  }
  return (
    <>
      <div>
        <input type="text" name="fn" onChange={handleChange} />
      </div>
      <div>
        <input type="text" name="ln" onChange={handleChange} />
      </div>
      <h1>
        First name: {data.fn} <br /> <br />
        Last name: {data.ln}
      </h1>
    </>
  );
}

export default Us4;
