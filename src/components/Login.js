import "./Login.css";

export default function Register() {
  return (
    <div className="login_container">
      <div className="login_wrapper">
        <h1 className="login_tittle">SIGN IN</h1>
        <form className="login_form">
          <input className="login_Input" placeholder="Username" />
          <input className="login_Input" placeholder="password" />
          <button className="login_btn">LOGIN</button>
          <a className="link">DO NOT REMEMBER THE PASSWORD?</a>
          <a className="link">CREATE A NEW ACCOUNT</a>
        </form>
      </div>
    </div>
  );
}
