import { Button as BootstrapButton } from "reactstrap";

import styles from "./styles.module.css";

const Button = ({ type, text }) => {
  switch (type) {
    case "link":
      return (
        <BootstrapButton className={styles.link} color="link">
          {text}
        </BootstrapButton>
      );

    case "gray":
      return (
        <BootstrapButton className={styles.btnGray}>{text}</BootstrapButton>
      );

    case "light-yellow":
      return (
        <BootstrapButton className={styles.btnLightYellow}>
          {text}
        </BootstrapButton>
      );

    case "yellow":
      return (
        <BootstrapButton className={styles.btnYellow}>{text}</BootstrapButton>
      );
  }
};

export default Button;
