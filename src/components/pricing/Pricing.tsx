import plans from "../../data/plans";
import PricingCTA from "./PricingCTA";
import PricingGrid from "./PricingGrid";
import PricingHeader from "./PricingHeader";

const Pricing = () => {
    return (
        <section id="pricing" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20">
                    <PricingHeader />
                </div>
                <PricingGrid plans={plans} />
                <div className="flex items-center justify-center text-center">
                    <PricingCTA />
                </div>
            </div>
        </section>
    );
};

export default Pricing;
