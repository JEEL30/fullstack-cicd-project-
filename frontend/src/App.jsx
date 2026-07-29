import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("Loading...");

  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setMessage(data.message))
      .catch((err) => {
        console.error(err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>React Frontend Running</h1>
      <h2>Backend says: {message}</h2>
    </div>
  );
}

export default App;