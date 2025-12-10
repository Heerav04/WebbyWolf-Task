import Image from "next/image";
import Landing from "./landing page/Landing";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      <Header/>
      <Landing/>
      <Footer/>
    </main>
  );
}
