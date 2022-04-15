import "./styles.css";
import { signUpFormValidation } from "./validation";
import React,{ useState } from "react";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [gender, setGender] = useState("male");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [user, setUser] = useState("");

  const [errors, setErrors] = useState("");
  const obj = {
    name: name,
    email: email,
    password: password,
    gender: gender,
    phoneNumber: phoneNumber,
  };

  const handleClick = (ev) => {
    ev.preventDefault();
    const eve = signUpFormValidation(obj);
    setErrors(eve);
  };

  const handleChange = (e) => {
    e.preventDefault();
    if (e.target.id === "name") {
      setName(e.target.value);
      obj.name = e.target.value;
      const eve = signUpFormValidation(obj);
      setErrors(eve);
    } else if (e.target.id === "email") {
      setEmail(e.target.value);
      obj.email = e.target.value;
      const eve = signUpFormValidation(obj);
      setErrors(eve);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
      obj.password = e.target.value;
      const eve = signUpFormValidation(obj);
      setErrors(eve);
    } else if (e.target.id === "gender") {
      console.log(e.target.value);
      setGender(e.target.value);
      obj.gender = e.target.value;
      const eve = signUpFormValidation(obj);
      setErrors(eve);
    } else if (e.target.id === "phoneNumber") {
      setPhoneNumber(e.target.value);
      obj.phoneNumber = e.target.value;
      const eve = signUpFormValidation(obj);
      setErrors(eve);
    }
    console.log(errors);
    if (errors === null) {
      const inde = obj.email.indexOf("@");
      const userName = obj.email.slice(0, inde);
      setUser(userName);
    } else {
      setUser("");
    }
  };
  return (
    <>
      <form>
        <label htmlFor="name">Name: </label>
        <input
          type="text"
          id="name"
          value={name}
          data-testid="name"
          onChange={handleChange}
        />
        <br />
        {errors !== null && errors.name !== "" ? (
          <span>{errors.name}</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <label htmlFor="email">Email: </label>
        <input
          type="email"
          id="email"
          value={email}
          data-testid="email"
          onChange={handleChange}
        />
        <br />
        {errors !== null && errors.email !== "" ? (
          <span>{errors.email}</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <label htmlFor="gender">Gender: </label>
        <select
          data-testid="gender"
          value={gender}
          onChange={handleChange}
          id="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">other</option>
        </select>
        <br />
        {errors !== null && errors.gender !== "" ? (
          <span>{errors.gender}</span>
        ) : (
          ""
        )}

        <br />
        <br />

        <label htmlFor="password">Password: </label>
        <input
          type="password"
          id="password"
          value={password}
          data-testid="password"
          onChange={handleChange}
        />
        <br />
        {errors !== null && errors.password !== "" ? (
          <span>{errors.password}</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <label htmlFor="phoneNumber">Phone Number: </label>
        <input
          type="text"
          id="phoneNumber"
          value={phoneNumber}
          onChange={handleChange}
          data-testid="phoneNumber"
        />
        <br />
        {errors !== null && errors.phoneNumber !== "" ? (
          <span>{errors.phoneNumber}</span>
        ) : (
          ""
        )}
        <br />
        <br />
        <button type="submit" onClick={handleClick} data-testid="submit">
          Signup
        </button>
      </form>
      {user !== "" ? <p>Hello {user}</p> : ""}
    </>
  );
};
export default App;
