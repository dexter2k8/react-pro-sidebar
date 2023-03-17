import ProSidebar from "@/components/Sidebar";
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <main className={styles.home}>
      <ProSidebar />
      <h1 className={styles.title}>React-Pro-Sidebar</h1>
    </main>
  );
}
