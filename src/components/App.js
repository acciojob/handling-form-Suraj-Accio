import React, { useState, useEffect } from "react";

const App = () => {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    console.log("value changed:", value);
  }, [value]);

  return (
    <form>
      <input type="text" value={value} onChange={handleChange} />
    </form>
  );
};

export default App;
