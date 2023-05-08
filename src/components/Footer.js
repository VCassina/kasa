import "../styles/Footer.css";
import "../styles/fonts.css";
import kasalogo from "../images/fulllogokasawhite.png";

function Footer() {
  return (
    <footer>
      <div className="footer_wrapper">
        <img src={kasalogo} alt="Logo de Kasa" />
        <span>© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
