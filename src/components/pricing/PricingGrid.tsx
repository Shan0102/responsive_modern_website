import PricingCard from "./PricingCard";

interface PricingGridProps {
    plans: {
        name: string;
        price: string;
        description: string;
        features: string[];
        mostPopular: boolean;
    }[];
}

const PricingGrid = ({ plans }: PricingGridProps) => {
    return (
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
    );
};

export default PricingGrid;
