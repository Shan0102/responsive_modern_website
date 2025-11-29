import features from "../../data/features";
import FeatureHeader from "./FeatureHeader";
import FeatureItem from "./FeatureItem";

const Features = () => {
    return (
        <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <FeatureHeader />
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
