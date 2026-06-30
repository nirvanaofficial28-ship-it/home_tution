import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Subjects from "@/components/Subjects";
import TeachingMode from "@/components/TeachingMode";
import Pricing from "@/components/Pricing";
import DemoForm from "@/components/DemoForm";
import Testimonials from "@/components/Testimonials";
import CareerCounselling from "@/components/CareerCounselling";
import ContactFooter from "@/components/ContactFooter";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Subjects />
        <TeachingMode />
        <Pricing />
        <DemoForm />
        <Testimonials />
        <CareerCounselling />
      </main>
      <ContactFooter />
      <WhatsAppButton />
    </>
  );
}
