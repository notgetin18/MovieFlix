import styles from "../app/styles/common.module.css";
export default function Loading() {
  return (
    <section className={styles.loading_section}>
      <div className={styles.loading}></div>
      <h2>Loading...</h2>
    </section>
  );
}
