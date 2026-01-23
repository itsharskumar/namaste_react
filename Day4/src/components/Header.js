import {LOGO_URL} from "../../utils/constants"
import {useState} from "react";
const Header = () => {


const [btnName,setbtnName]=useState("Login");
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src={LOGO_URL}
        />
      </div>

      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>ContactUs</li>
          <li>Cart</li>
          <li><button className="login-btn" onClick={()=>{
            setbtnName("Logout");
          }}>{btnName}</button></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;