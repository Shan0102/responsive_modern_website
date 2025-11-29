import testimonials from "../../data/testimonials";
import TestimonialItem from "./TestimonialItem";
import TestimonialsHeader from "./TestimonialsHeader";

const Testimonials = () => {
    return (
        <section id="testimonials" className="px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 md:gap-14 lg:gap-16">
                    <div className="text-center lg:text-left lg:flex-1">
                        <TestimonialsHeader />
                    </div>
                    <div className="lg:flex-1">
                        <div className="flex flex-col gap-6 sm:gap-8 md:gap-10">
                            {testimonials.map((testimonial) => (
                                <TestimonialItem key={testimonial.name} testimonial={testimonial} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
