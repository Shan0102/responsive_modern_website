import CodeContentCustom from "../ui/CodeContentCustom";

interface FeatureItemProps {
    feature: {
        title: string;
        description: string;
        codeSnippet: string;
        imagePosition: string;
    };
}

const FeatureItem = ({ feature }: FeatureItemProps) => {
    return (
        <div className="flex flex-col md:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8">
            <div className={`md:flex-1 ${feature.imagePosition === "right" ? "md:order-1" : ""}`}>
                <div className="bg-linear-to-br from-blue-500/20 to-indigo-400/20 backdrop-blur-xl rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-5 border shadow-2xl border-white/10">
                    <CodeContentCustom title={feature.title} codeSnippet={feature.codeSnippet} />
                </div>
            </div>

            <div className="md:flex-1 text-center">
                <div className="p-3 sm:p-4 md:p-5 space-y-3 sm:space-y-4 md:space-y-5">
                    <div className="font-semibold text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
                        {feature.title}
                    </div>
                    <div className="text-xs sm:text-sm md:text-base text-white/60">
                        {feature.description}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeatureItem;
