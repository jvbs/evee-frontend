import styles from "./styles.module.css";

const Input = ({ label, testid}) => {
  return (
    <div class={styles.materialInput}>
      <input
        type="text"
        required
        className={styles.input}
        onclick="bortop(0)"
        data-testid={testid}
      />
      <label id="mla">{label}</label>
      <span className={styles.highlight}></span>
      <span className={styles.bar}></span>
    </div>
  );
};

export default Input;
