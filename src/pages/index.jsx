import styles from "../styles/Home.module.css"
import Link from "next/link";
import Head from "next/head";
import { GoogleOAuthProvider } from '@react-oauth/google';
import GoogleSSO from "@/comp/GoogleSSO";


export default function Home() {
  return (
    <>

<GoogleOAuthProvider clientId={process.env.NEXTAUTH_URL}>
    <Head>
      <title> People | Home</title>
    </Head>
    <div>
      <h1 className={styles.title}>Hello World</h1>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis illo quae est iure laborum doloremque corrupti inventore quia consectetur voluptatem velit saepe, molestias explicabo in sequi minus rem repellendus?</p>
      <p className={styles.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis illo quae est iure laborum doloremque corrupti inventore quia consectetur voluptatem velit saepe, molestias explicabo in sequi minus rem repellendus?</p>
    
    <Link href="/people" className={styles.btn}> See people</Link>
    <GoogleSSO/>
    </div>
    </GoogleOAuthProvider>
    </>

  );
}


