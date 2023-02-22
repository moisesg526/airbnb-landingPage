// { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
function Header() {
  return (
    <section className="header">
      <div className="logo">
        <img src="/images/airbnb.png" alt="airbnb logo" />
      </div>
      <div className="searchBar">
        <input type="text" />
        <IoSearchCircle size={32}/>
      </div>
      <div className="login">
        <div className="loginContent">
          <a href="#" className="airbnbHome">Airbnb your home</a>
        </div>
        <div className="loginContent">
          <BiGlobe />
        </div>
        <div className="loginContent">
          <div class="dropdown">
            <button onclick="" class="dropbtn">
             <div><AiOutlineMenu /></div> {" "}
              <div className="userIcon">
                <FaUserCircle size={28}/>
              </div>
            </button>
            <div id="myDropdown" class="dropdown-content">
              <a href="#">Sign up</a>
              <a href="#">Log in</a>
              <a href="#">Airbnb your home</a>
              <a href="#">Host an experience</a>
              <a href="#">Help</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Header;
