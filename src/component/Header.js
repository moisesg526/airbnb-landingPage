// { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { BiSearch } from "react-icons/bi";
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
        <BiSearch />
      </div>
      <div className="login">
        <div className="loginContent">
          <p>Airbnb your home</p>
        </div>
        <div className="loginContent">
          <BiGlobe />
        </div>
        <div className="loginContent">
          <div class="dropdown">
            <button onclick="" class="dropbtn">
              <AiOutlineMenu />{" "}
              <div className="userIcon">
                <FaUserCircle />
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
