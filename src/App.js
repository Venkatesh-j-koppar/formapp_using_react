import "./App.css";
import { useState } from "react";
import FormInput from "./Components/FormInput";

function App() {
  const [username, setUserName] = useState("");

  return (
    <div className="app">
      <form>
        <FormInput placeholder="Username" setUserName={setUserName}></FormInput>
        <FormInput placeholder="Email"></FormInput>
        <FormInput placeholder="Full Name"></FormInput>
        <FormInput placeholder="Mobile Number"></FormInput>
      </form>
    </div>
  );
}

export default App;
