import "./Register.css";

export default function Register() {
  return (
    <div className="Reg_container">
      <div className="Reg_wrapper">
        <h1 className="Reg_tittle">CREATE AN ACCOUNT</h1>
        <form className="Reg_form">
          <input className="Input" placeholder="name" />
          <input className="Input" placeholder="lastname" />
          <input className="Input" placeholder="username" />
          <input className="Input" placeholder="email" />
          <input className="Input" placeholder="password" />
          <input className="Input" placeholder="confrim password" />
          <div className="Agreement">
            By creating an account,i consent to the processing of my personal
            data in accordance with the<b>PRIVACY POLICY</b>
          </div>
          <button className="Reg_btn">CREATE</button>
        </form>
      </div>
    </div>
  );
}
