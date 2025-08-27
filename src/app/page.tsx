import Image from "next/image";
import Navbar from "@/app/ui/navbar";
import Hero from "@/app/ui/Home/Hero";
export default function Home() {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="">
        <Hero />
      </main>
    </>
  );
}
