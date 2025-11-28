import BackgroundPulse from "../background/BackgroundPulse";
import CodeBlock from "./CodeBlock";
import Introducing from "./Introducing";

const Hero = () => {
    return (
        <section className="min-h-screen flex items-center justify-center pt-16 sm:pt-20 px-4 sm:px-6 lg:px-8">
            <BackgroundPulse top={6} left={2} />
            <BackgroundPulse bottom={6} right={2} />

            <div className="max-w-7xl w-full mx-auto flex flex-col md:flex-row gap-6 sm:gap-8 lg:gap-12 z-10">
                <div className="flex-1 min-w-0">
                    <Introducing />
                </div>
                <div className="flex-1 min-w-0">
                    <CodeBlock />
                </div>
            </div>
        </section>
    );
};

export default Hero;
