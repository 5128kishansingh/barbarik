import Image from "next/image";
import styles from "./page.module.css";
import Right from "./Right/page";
import Left from "./Left/page";

export default function Home() {
  return (
    <main className={styles.main}>
      
      <Left />
      <div style={{ borderLeft: '1px solid gray', height: '600px' }}></div>
      <Right />
    </main>
  );
}
