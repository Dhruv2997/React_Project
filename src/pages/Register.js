import { useState, React } from "react";
import '../index.css';


function Register() {
     //name load state
  const [fnameValue, setnameValue] = useState("");
  const [NameView, setNameView] = useState(""); //button click state

  //email load state
  const [EmailValue, setEmailValue] = useState("");
  const [EmailView, setEmailView] = useState(""); //button click state

  //mobile load state
  const [mobileValue, setmobileValue] = useState("");
  const [mobileView, setmobileView] = useState(""); //button click state

  const [password, setPassword] = useState("");

 

  //name show fucn
  const fnameFucn = (nameKeyValue) => {
    setnameValue(nameKeyValue.target.value);
  };

  //email show fucn
  const emailFucn = (emailKeyValue) => {
    setEmailValue(emailKeyValue.target.value);
  };

  //mobile show fucn
  const mobileFucn = (mobileKeyValue) => {
    setmobileValue(mobileKeyValue.target.value);
  };

  const passwordFunc = (setPasswordValue) => {
    setPassword(setPasswordValue.target.value);
  };

  //button click fucn
  const onSubmit = (e) => {
    e.preventDefault();
    setNameView(fnameValue);
    setEmailView(EmailValue);
    setmobileView(mobileValue);
  };
  return (
    <>
    <div className="container pt-5">
      <h1 className="pb-4">{NameView}</h1>
      <h5>{EmailView}</h5>
      <h6>{mobileView}</h6>

      <form onSubmit={onSubmit} className="registerLog">
        {/* <!-- 2 column grid layout with text inputs for the first and last names --> */}
        <div class="row mb-4">
          {/* <!-- First name input --> */}
          <div class="col">
            <div class="form-outline">
              <label class="registerForm" for="form6Example1" >
                First name
              </label>
              <input
              className="inputRegister"
                type="text"
                id="form6Example1"
                onChange={fnameFucn}
                value={fnameValue}
                required
              />
            </div>
          </div>

          {/* <!-- Last name input --> */}
          <div class="col">
            <div class="form-outline">
              <label class="registerForm" for="form6Example2">
                Password
              </label>
              <input
                type="password"
                id="form6Example2"
                onChange={passwordFunc}
                value={password}
                className="inputRegister"
                required
              />
            </div>
          </div>
        </div>

        {/* <!-- Company name input --> */}
        <div class="form-outline mb-4">
          <label class="registerForm" for="form6Example3">
            College 
          </label>
          <input type="text" id="form6Example3" className="inputRegister" />
        </div>

        {/* <!-- Address input --> */}
        <div class="form-outline mb-4">
          <label class="registerForm" for="form6Example4">
            Address
          </label>
          <input type="text" id="form6Example4" className="inputRegister" />
        </div>

        {/* <!-- Email input --> */}
        <div class="form-outline mb-4">
          <label class="registerForm" for="form6Example5">
            Email
          </label>
          <input
            type="email"
            id="form6Example5"
            className="inputRegister"
            onChange={emailFucn}
            value={EmailValue}
            required
          />
        </div>

        {/* <!-- Number input --> */}
        <div class="form-outline mb-4">
          <label class="registerForm" for="form6Example6">
            Phone
          </label>
          <input
            type="phone"
            id="form6Example6"
            className="inputRegister"
            onChange={mobileFucn}
            value={mobileValue}
            required
          />
        </div>

        {/* <!-- Message input --> */}
        <div class="form-outline mb-4">
          <label class="registerForm" for="form6Example7">
            Additional information
          </label>
          <textarea
            class="form-control"
            id="form6Example7"
            rows="4"
          ></textarea>
        </div>

        {/* <!-- Submit button --> */}
        <button type="submit" className="button">
          Save Information
        </button>
      </form>
    </div>
  </>
  );
}

export default Register;