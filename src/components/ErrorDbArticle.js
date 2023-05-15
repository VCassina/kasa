import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFrownOpen } from '@fortawesome/free-solid-svg-icons';
import "../styles/ErrorDbArticle.css";

function ErrorDbArticle() {
  return (
    <article className="annoncePage_error-content">
      <FontAwesomeIcon icon={faFrownOpen} className="faFrownOpen" />
      <div className="annoncePage_error-text">
        <p>Oh !</p>
        <p>Il y a un soucis avec la base de données.</p>
        <p>Pas de chance.</p>
      </div>
    </article>
  );
}

export default ErrorDbArticle;
