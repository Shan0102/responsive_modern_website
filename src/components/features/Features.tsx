import features from "../../data/features";
import FeatureItem from "./FeatureItem";

const Features = () => {
    return (
        <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                        <span className="bg-linear-to-b from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                            Your Complete Development
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Workflow
                        </span>
                    </h2>
                </div>
                <div className="flex flex-col gap-12 sm:gap-18 md:gap-24">
                    {features.map((feature) => (
                        <FeatureItem key={feature.title} feature={feature} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
