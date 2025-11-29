interface PricingCardInfoProps {
    name: string;
    price: string;
    description: string;
}

const PricingCardInfo = ({ name, price, description }: PricingCardInfoProps) => {
    return (
        <div className="flex flex-col items-center gap-2 sm:gap-3 text-center">
            <h3 className="font-semibold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl bg-linear-to-r from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                {name}
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-white/60">{description}</p>
            <p>
                <span className="font-bold text-3xl sm:text-4xl lg:text-5xl bg-linear-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    ${price}
                </span>
                <span className="text-sm sm:text-base md:text-lg text-white/60">/month</span>
            </p>
        </div>
    );
};

export default PricingCardInfo;
