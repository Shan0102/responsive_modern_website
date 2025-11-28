import plans from "../../data/plans";
import PricingCard from "./PricingCard";

interface PricingProps {}

const Pricing = ({}: PricingProps) => {
    return (
        <section id="features" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-12 sm:mb-16 md:mb-20 space-y-3 sm:space-y-4 md:space-y-5">
                    <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                        <span className="bg-linear-to-b from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                            Simple, Transparent
                        </span>
                        <br />
                        <span className="bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                            Pricing Plans
                        </span>
                    </h2>
                    <p className="text-base sm:text-lg md:text-xl max-w-2xl text-white/60 mx-auto">
                        Choose the perfect plan for your needs. All plans include a 14-day free
                        trial.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row md:flex-wrap justify-center items-stretch mb-5">
                    {plans.map((plan) => (
                        <div
                            className="md:flex-1 md:basis-1/2 lg:basis-1/3 min-w-0 p-3 sm:p-4 md:p-5"
                            key={plan.name}
                        >
                            <PricingCard plan={plan} />
                        </div>
                    ))}
                </div>
                <div className="flex items-center justify-center text-center">
                    <p className="text-white/50 text-sm md:text-base">
                        Need a custom plan?{" "}
                        <a className="text-blue-400 hover:underline" href="#">
                            Contact our sales team
                        </a>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Pricing;
