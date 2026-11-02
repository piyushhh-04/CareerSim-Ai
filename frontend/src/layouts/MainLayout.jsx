import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import AnimatedBackground from "../components/home/AnimatedBackground";

export default function MainLayout({ children }) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f5f0e8] text-[#1f1b18]">
      <AnimatedBackground />
      <Navbar />
      <main className="relative z-10">{children}</main>
      <Footer />
    </div>
  );
}
