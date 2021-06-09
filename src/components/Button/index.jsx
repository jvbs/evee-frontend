// import { Button as button } from "reactstrap";

import styles from "./styles.module.css";

const Button = ({ type, text }) => {
  switch (type) {
    case "link":
      return (
        <button className={styles.link} color="link">
          {text}
        </button>
      );

    case "gray":
      return <button className={styles.btnGray}>{text}</button>;

    case "light-yellow":
      return <button className={styles.btnLightYellow}>{text}</button>;

    default:
      return <button className={styles.btnYellow}>{text}</button>;
  }
};

export default Button;
