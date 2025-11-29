interface TestimonialsHeaderProps {}

const TestimonialsHeader = ({}: TestimonialsHeaderProps) => {
    return (
        <div className="space-y-3 sm:space-y-4 md:space-y-5">
            <h2 className="font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl">
                <span className="bg-linear-to-b from-amber-50 to-indigo-200 bg-clip-text text-transparent">
                    What developers are saying about us
                </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl max-w-2xl text-white/60 mx-auto">
                Everything you need to build, test and deploy applications with AI-powered
                development tools.
            </p>
        </div>
    );
};

export default TestimonialsHeader;
