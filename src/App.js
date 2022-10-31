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
      errormessage:
        "Username should be 3-16 character and shouldnot contain special charater",
      placeholder: "Username",
      pattern: "^[A-Za-z0-9]{3,16}$",
    },
    {
      id: 2,
      type: "email",
      name: "email",
      errormessage: "Please enter valid email",
      label: "Email",
      placeholder: "Email",
    },
    {
      id: 3,
      type: "date",
      name: "birthday",
      errormessage: "please enter birth day",
      label: "Birthday",
      placeholder: "Birthday",
    },
    {
      id: 4,
      type: "password",
      name: "password",
      errormessage: "please enter valid password",
      label: "password",
      placeholder: "password",
      pattern: "^(?=.*[A-Za-z])(?=.*d)(?=.*[@$!%*#?&])[A-Za-zd@$!%*#?&]{8,}$",
    },
    {
      id: 5,
      type: "password",
      name: "confirmpassword",
      errormessage: " password didnot match",
      label: "confirm password",
      placeholder: "confirm password",
      pattern: values.password,
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
        <h1>Register</h1>
        {inputs.map((input) => (
          <FormInput
            key={input.id}
            label={input.label}
            placeholder={input.placeholder}
            name={input.name}
            errormessage={input.errormessage}
            value={values[input.name]}
            onChange={onChange}
            {...input}
          ></FormInput>
        ))}

        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
