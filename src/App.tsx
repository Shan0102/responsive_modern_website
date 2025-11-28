import Hero from "./components/hero/Hero";
import Navbar from "./components/Layout/Navbar";
import MouseShadow from "./components/background/MouseShadow";
import Features from "./components/features/Features";
import Pricing from "./components/pricing/Pricing";

function App() {
    return (
        <div className=" min-h-screen bg-slate-950 text-white overflow-hidden scroll-smooth">
            <MouseShadow />

            <Navbar />
            <Hero />
            <Features />
            <Pricing />
        </div>
    );
}

export default App;
