import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Contact from "./Contact";
import Footer from "./Footer";
import Features from "./Features";
import ScrollToTop from "../components/ScrollToTop";
import HowItWorks from "./HowItWorks";

export default function HomePage() {
    return (
        <div className="bg-slate-50">
            <Header />
            <Hero />
            <About />
            <Services />
            <Features />
            <HowItWorks />
            <Contact />
            <Footer />

            <ScrollToTop />
        </div>
    );
}