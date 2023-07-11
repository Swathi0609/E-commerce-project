import "./Register.css";
import { useEffect, useState } from "react";

export default function Register() {
  const [fName, setFname] = useState("");
  const [lName, setLname] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [userObj, setUserObj] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    // setUserObj()
    //   {
    //     fName: fName,
    //     lName: lName,
    //     mail: mail,
    //     password: password,
    //     username: username,
    //   },
    // );
    console.log(userObj);
  }
  function handleChange(e) {
    e.preventDefault();
    setFname(e.target.value);
  }

  return (
    <div className="Reg_container">
      <div className="Reg_wrapper">
        <h1 className="Reg_tittle">CREATE AN ACCOUNT</h1>
        <form className="Reg_form">
          <input className="Input" placeholder="name" onChange={handleChange} />
          <input
            className="Input"
            placeholder="lastname"
            onChange={(e) => {
              setLname(e.target.value);
            }}
          />
          <input
            className="Input"
            placeholder="username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <input
            className="Input"
            placeholder="email"
            onChange={(e) => {
              setMail(e.target.value);
            }}
          />
          <input
            className="Input"
            placeholder="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <input className="Input" placeholder="confrim password" />
          <div className="Agreement">
            By creating an account,i consent to the processing of my personal
            data in accordance with the<b>PRIVACY POLICY</b>
          </div>
          <button className="Reg_btn" type="submit" onClick={handleSubmit}>
            CREATE
          </button>
        </form>
      </div>
    </div>
  );
}
