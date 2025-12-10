import Image from "next/image";
import Landing from "./landing page/Landing";
import FloatingNavbar from "./components/ui/floating-navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col bg-white">
      <FloatingNavbar/>
      <Landing/>
      <Footer/>
    </main>
  );
}
