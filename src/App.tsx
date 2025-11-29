import Hero from "./components/hero/Hero";
import Navbar from "./components/Layout/Navbar";
import MouseShadow from "./components/background/MouseShadow";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";
import Testimonials from "./components/testimonials/Testimonials";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className=" min-h-screen bg-slate-950 text-white overflow-hidden scroll-smooth">
            <MouseShadow />

            <Navbar />
            <Hero />
            <Features />
            <Pricing />
            <Testimonials />
            <Footer />
        </div>
    );
}

export default App;
