import { Inter } from "next/font/google";
import Navbar from '../comp/Navbar';
import Footer from "@/comp/Footer";
import styles from "../styles/Home.module.css"
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis illo quae est iure laborum doloremque corrupti inventore quia consectetur voluptatem velit saepe, molestias explicabo in sequi minus rem repellendus?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis illo quae est iure laborum doloremque corrupti inventore quia consectetur voluptatem velit saepe, molestias explicabo in sequi minus rem repellendus?</p>
    
    <Link href="/people" className={styles.btn}> See people</Link>
    </div>
  );
}


