import { useState, useEffect } from "react";
import './App.css';

const API_URL = process.env.REACT_APP_API_URL;
function App() {

  const [serverMessage, setServerMessage] = useState("");
  const [fetching, setFetching] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setFetching(true);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        setServerMessage(data.message);
      })
      .catch(error => {
        console.error("Error fetching server: ", error)
        setError(error)
      })
      .finally(() => setFetching(false))
  }, [])

  return (
    <div className="App">
      <h1>Example of App running on Vercel + Heroku</h1>
      <p>The response from the server is: </p>
      <b>{fetching ? "loading ..." : serverMessage}</b>
      <b>{error && "Upps! Error fetching server :("}</b>
    </div>
  );
}

export default App;

