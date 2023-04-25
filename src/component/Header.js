// { FaAirbnb } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";
import { IoSearchCircle } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { FaUserCircle } from "react-icons/fa";
import "../styles/Header.css";
function Header() {
  return (
    <section className="header">
      <div className="logo">
        <img
          src="/images/airbnb.png"
          alt="airbnb logo"
          className="airbnblogo"
        />
      </div>

      <div className="searchbar">
        <div className="location">
          <p>Location</p>
          <input type="text" placeholder="Anywhere" />
        </div>
        <div className="check-in">
          <p>Check in</p>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="check-out">
          <p>Check out</p>
          <input type="text" placeholder="Add dates" />
        </div>
        <div className="guests">
          <p>Guests</p>
          <input type="text" placeholder="Add guests" />
          <span>
            <IoSearchCircle size={14} />
          </span>
        </div>
      </div>

      <div className="login">
        <div className="loginContent">
          <a href="#" className="airbnbHome">
            Airbnb your home
          </a>
        </div>
        <div className="loginContent globe">
          <BiGlobe />
        </div>
        <div className="loginContent">
          <div class="dropdown">
            <button onclick="" class="dropbtn">
              <div>
                <AiOutlineMenu />
              </div>{" "}
              <div className="userIcon">
                <FaUserCircle size={28} />
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
