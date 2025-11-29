const PricingHeader = () => {
    return (
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
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
                Choose the perfect plan for your needs. All plans include a 14-day free trial.
            </p>
        </div>
    );
};

export default PricingHeader;
