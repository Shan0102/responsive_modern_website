interface TestimonialItemProps {
    testimonial: {
        name: string;
        role: string;
        image: string;
        content: string;
    };
}

const TestimonialItem = ({ testimonial }: TestimonialItemProps) => {
    return (
        <div
            key={testimonial.name}
            className="bg-slate-900/50 p-4 sm:p-6 backdrop-blur-sm border border-slate-800 rounded-xl"
        >
            <div className="flex gap-4">
                <div className="font-bold text-3xl md:text-4xl bg-linear-to-tl from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                    "
                </div>
                <div className="flex flex-col gap-4 text-sm md:text-base">
                    <p>{testimonial.content}</p>
                    <div className="flex gap-5 items-center">
                        <img
                            className="h-10 w-10 md:h-12 md:w-12 rounded-full object-cover"
                            src={testimonial.image}
                            alt={`${testimonial.name} photo`}
                        />
                        <div className="flex flex-col">
                            <span className="font-semibold">{testimonial.name}</span>
                            <span className="text-white/60">{testimonial.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
