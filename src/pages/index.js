import { Inter } from "next/font/google";
import Navbar from '../comp/Navbar';
import Footer from "@/comp/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Navbar/> 
      <h1>Hello World</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis illo quae est iure laborum doloremque corrupti inventore quia consectetur voluptatem velit saepe, molestias explicabo in sequi minus rem repellendus?</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis corporis illo quae est iure laborum doloremque corrupti inventore quia consectetur voluptatem velit saepe, molestias explicabo in sequi minus rem repellendus?</p>
      <Footer/>
    </div>
  );
}


