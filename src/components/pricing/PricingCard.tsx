import WatchButton from "../ui/WatchButton";
import StartButton from "../ui/StartButton";
import PricingFeature from "./PricingFeature";
import PricingCardInfo from "./PricingCardInfo";
import PricingBadge from "./PricingBadge";

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
            className={`relative bg-slate-900/50 rounded-xl h-full ${
                plan.mostPopular
                    ? "border-2 border-blue-400/70 shadow-2xl shadow-blue-500/35 scale-105"
                    : "border border-slate-800/60 hover:border-slate-700/60"
            }`}
        >
            <div className="bg-linear-to-br from-white/5 rounded-xl hover:from-white/10 transition ease-in-out duration-200 p-3 sm:p-4 md:p-5">
                <div className="flex flex-col justify-between h-full gap-6 sm:gap-7 md:gap-8">
                    <PricingBadge isActive={plan.mostPopular} />
                    <div className="space-y-4 sm:space-y-5 md:space-y-6">
                        <PricingCardInfo
                            name={plan.name}
                            price={plan.price}
                            description={plan.description}
                        />
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
        </div>
    );
};

export default PricingCard;
