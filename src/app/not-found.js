import Link from "next/link";
import styles from "../app/styles/common.module.css";
export default function NotFound() {
  return (
    <section className={styles.container}>
      <div className={styles.error_page}>
        <h1>404</h1>
        <br />
        <h2>Not Found</h2>
        <br />
        <p>Could not find requested resource</p>
        <br />
        <Link href="/">
          <button>Go to Home Page</button>
        </Link>
      </div>
    </section>
  );
}
