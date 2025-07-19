import Header from "@/components/header/Header";
import Footer from "@/components/home/footer/Footer";
import Hero from "@/components/home/leandingPage/Hero";
import Section2 from "@/components/home/section2/Section2";
import Section3 from "@/components/home/section3/Section3";
import Section4 from "@/components/home/section4/Section4";
import Section5 from "@/components/home/section5/Section5";
import Section6 from "@/components/home/section6/Section6";
import Section7 from "@/components/home/section7/Section7";
import Section8 from "@/components/home/section8/Section8";
import WhatsAppButton from "@/components/wbbutton/WhatsAppButton";


export default function index() {
  return (
    <>
    <Header />
    <div className="relative max-w-[1793] min-h-screen overflow-x-hidden mx-auto"> 
      <Hero/>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Footer />
      <WhatsAppButton />
    </div>
    </>
  )
}