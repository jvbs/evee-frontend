// import { Button as button } from "reactstrap";

import styles from "./styles.module.css";

const Button = ({ type, text, ...rest }) => {
  switch (type) {
    case "link":
      return (
        <button className={styles.link} color="link" {...rest}>
          {text}
        </button>
      );

    case "gray":
      return (
        <button className={styles.btnGray} {...rest}>
          {text}
        </button>
      );

    case "light-yellow":
      return (
        <button className={styles.btnLightYellow} {...rest}>
          {text}
        </button>
      );

    default:
      return (
        <button className={styles.btnYellow} {...rest}>
          {text}
        </button>
      );
  }
};

export default Button;
