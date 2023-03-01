import "../styles/Footer.css";
import { BiGlobe } from "react-icons/bi";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-left">
        <h4>
          © 2023 Airbnb, Inc. · <a href="#">&nbsp; Terms &nbsp;</a> · <a href="#">&nbsp; Sitemap &nbsp;</a>{" "}
          ·<a href="#">&nbsp; Privacy &nbsp;</a> · <a href="#">&nbsp; Your Privacy Choices &nbsp;</a> ·
          <a href="#"> &nbsp; Destinations</a>
        </h4>
      </div>
      <div className="footer-right">
        <h4> 
          {" "}
          <BiGlobe /> <a href="#">English(US) &nbsp;</a> <a href="#">&nbsp; $ USD &nbsp;</a>{" "}
          <a href="#">Support & resources</a>
        </h4>
      </div>
    </div>
  );
}

export default Footer;
