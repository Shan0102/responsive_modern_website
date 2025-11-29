import { FaRegStar } from "react-icons/fa";

interface PricingBadgeProps {
    isActive: boolean;
}

const PricingBadge = ({ isActive }: PricingBadgeProps) => {
    return (
        <>
            {isActive ? (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10 bg-blue-600 bg-linear-to-br from-blue-400 to-cyan-500 py-1 px-2 rounded-full">
                    <div className="flex items-center gap-2">
                        <FaRegStar />
                        Most Popular
                    </div>
                </div>
            ) : null}
        </>
    );
};

export default PricingBadge;
