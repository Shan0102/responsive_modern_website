import { FaRegStar } from "react-icons/fa";
import WatchButton from "../ui/WatchButton";
import StartButton from "../ui/StartButton";
import PricingFeature from "./PricingFeature";

interface PricingCardProps {
    plan: {
        name: string;
        price: string;
        description: string;
        features: string[];
        mostPopular: boolean;
    };
}

const PricingCard = ({ plan }: PricingCardProps) => {
    return (
        <div
            className={`relative bg-slate-900/50 rounded-xl p-3 sm:p-4 md:p-5 h-full ${
                plan.mostPopular
                    ? "border-2 border-blue-400/70 shadow-2xl shadow-blue-500/35 scale-105"
                    : "border border-slate-800/60 hover:border-slate-700/60"
            }`}
        >
            {plan.mostPopular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 bg-blue-600 bg-linear-to-br from-blue-400 to-cyan-500 py-1 px-2 rounded-full">
                    <div className="flex items-center gap-2">
                        <FaRegStar />
                        Most Popular
                    </div>
                </div>
            )}

            <div className="flex flex-col justify-between h-full gap-6 sm:gap-7 md:gap-8">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                    <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
                        <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-linear-to-r from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                            {plan.name}
                        </h3>
                        <p className="text-sm sm:text-base md:text-lg text-white/60">
                            {plan.description}
                        </p>
                        <p>
                            <span className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                                ${plan.price}
                            </span>
                            <span className="text-sm sm:text-base md:text-lg text-white/60">
                                /month
                            </span>
                        </p>
                    </div>
                    <ul className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                        {plan.features.map((feature) => (
                            <PricingFeature key={feature} feature={feature} />
                        ))}
                    </ul>
                </div>
                <div className="flex items-end justify-center">
                    {plan.mostPopular ? (
                        <StartButton>Get Started</StartButton>
                    ) : (
                        <WatchButton>Get Started</WatchButton>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PricingCard;
