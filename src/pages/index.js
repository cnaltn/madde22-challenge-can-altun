import Image from "next/image";
import Navbar from "@/components/Navbar";
import Movies from "@/components/Movies";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Movies></Movies>
      <Footer></Footer>
    </>
  );
}
