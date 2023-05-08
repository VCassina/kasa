import "../styles/Banner.css";
import "../styles/fonts.css";
import bannercover from "../images/bannerhomepage.png"

function Banner() {
  return <article className="banner_wrapper">
    <img src={bannercover} alt="Côté boisée" className="banner_img"/>
    <div className="banner_text">
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
  </article>;
}

export default Banner;
