import { useState } from "react";
import "./formInput.css";
const FormInput = (props) => {
  const { label, onChange, id, errormessage, ...inputProps } = props;
  const [focused, setFocused] = useState(false);

  const handlefocus = () => {
    setFocused(true);
  };
  return (
    <div className="formInput">
      <label>{label}</label>
      <input
        {...inputProps}
        onChange={onChange}
        required={true}
        onFocus={()=>inputProps.name==="confirmPassword" && setFocused(true)}
        onBlur={handlefocus}
        focused={focused.toString()}
      />
      <span>{errormessage}</span>
    </div>
  );
};

export default FormInput;
