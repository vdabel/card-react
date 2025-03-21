import ReactDOM from 'react-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot, faLink } from "@fortawesome/free-solid-svg-icons";
import { faSquareXTwitter, faInstagram, faYoutube, faLinkedin } from "@fortawesome/free-brands-svg-icons";

import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles["card-container"]}>
      <div className={styles["card"]}>
        <div className={styles["img-container"]}>
          <img src="https://imgproxy.ra.co/_/quality:66/w:1442/rt:fill/aHR0cHM6Ly9zdGF0aWMucmEuY28vaW1hZ2VzL3Byb2ZpbGVzL2xnL2RhZnRwdW5rLmpwZz9kYXRlVXBkYXRlZD0xNTk4MzkxMzc5MDAw" alt="Daft Punk" />
        </div>
        <div className={styles["logo-container"]}>
          <img src="https://cdn.milenio.com/uploads/media/2017/01/11/rumora-daft-punk-hara-gira.jpeg" alt="Logo de Daft Punk" />
        </div>
        <div className={styles["text-container"]}>
          <h1>Daft Punk</h1>
          <p>Daft Punk fue un dúo francés de música electrónica y rock electrónico formado en 1993 en París.</p>
        </div>
        <div className={styles["extra-info"]}>
          <div className={styles["location-container"]}>
            <FontAwesomeIcon icon={faLocationDot} />
            <p>París, FR</p>
          </div>
          <div className={styles["website-container"]}>
            <FontAwesomeIcon icon={faLink} />
            <a href="https://daftpunk.com/" target="_blank">daftpunk.com</a>
          </div>
        </div>
        <div className={styles["social-medias"]}>
          <a href="#"><FontAwesomeIcon icon={faSquareXTwitter} /></a>
          <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="#"><FontAwesomeIcon icon={faYoutube} /></a>
          <a href="#"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
      </div>
    </div>
  );
};

export default Card;