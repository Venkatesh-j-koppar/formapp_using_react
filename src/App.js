import "./App.css";
import { useState } from "react";
import FormInput from "./Components/FormInput";

function App() {
  const [values, setValues] = useState({
    username: "",
    email: "",
    birthday: "",
    password: "",
    confirmpassword: "",
  });

  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      label: "username",
      placeholder: "Username",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      label: "Email",
      placeholder: "Email",
    },
    {
      id: 3,
      type: "text",
      name: "birthday",
      label: "Birthday",
      placeholder: "Birthday",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      label: "password",
      placeholder: "password",
    },
    {
      id: 5,
      type: "password",
      name: "confirmpassword",
      label: "confirm password",
      placeholder: "confirm password",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  console.log(values);

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            label={input.label}
            placeholder={input.placeholder}
            name={input.name}
            value={values[input.name]}
            onChange={onChange}
          ></FormInput>
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
