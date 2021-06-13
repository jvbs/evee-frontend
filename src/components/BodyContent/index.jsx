import styles from "./styles.module.css";

const BodyContent = ({ header, breadcrumb, children }) => {
  return (
    <>
      <section>
        <div className={styles.header}>
          <h1>{header}</h1>
        </div>

        <div className={styles.body}>
          <span className={styles.breadcrumb}>{breadcrumb}</span>
          <main>{children}</main>
        </div>
      </section>
    </>
  );
};

export default BodyContent;
