import { FiCheck } from "react-icons/fi";

interface PricingFeatureProps {
    feature: string;
}

const PricingFeature = ({ feature }: PricingFeatureProps) => {
    return (
        <li className="flex items-center gap-2" key={feature}>
            <span className="bg-blue-950/70 rounded-full p-0.5">
                <FiCheck className="text-blue-400/70" />
            </span>
            <span className="text-sm md:text-base text-white/80">{feature}</span>
        </li>
    );
};

export default PricingFeature;
