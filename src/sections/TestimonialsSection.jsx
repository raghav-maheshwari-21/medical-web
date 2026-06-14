import { Star, Quote } from "lucide-react";

import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../config/clinic";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="py-20"
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Patient Reviews"
          title="What Our Patients Say"
          description="Trusted by families for compassionate and quality healthcare."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {clinicInfo.testimonials.map((testimonial) => (
            <div
              key={`${testimonial.name}-${testimonial.review}`}
              className="
                p-8
                rounded-3xl
                border
                shadow-sm
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-xl
              "
              style={{
                backgroundColor: "var(--color-background)",
                borderColor: "var(--color-secondary)",
              }}
            >
              <Quote
                size={32}
                style={{
                  color: "var(--color-primary)",
                }}
              />

              <p
                className="
                  mt-6
                  leading-8
                "
                style={{
                  color: "var(--color-muted)",
                }}
              >
                "{testimonial.review}"
              </p>

              <div className="flex gap-1 mt-6">
                {Array.from({
                  length: testimonial.rating,
                }).map((_, index) => (
                  <Star
                    key={index}
                    size={18}
                    fill="var(--color-gold)"
                    style={{
                      color: "var(--color-gold)",
                    }}
                  />
                ))}
              </div>

              <div className="mt-6">
                <h4
                  className="font-semibold"
                  style={{
                    color: "var(--color-text)",
                  }}
                >
                  {testimonial.name}
                </h4>

                <p
                  className="text-sm mt-1"
                  style={{
                    color: "var(--color-muted)",
                  }}
                >
                  Verified Patient
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;