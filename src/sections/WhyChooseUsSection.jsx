import { CheckCircle2 } from "lucide-react";

import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../config/clinic";

const WhyChooseUsSection = () => {
  return (
    <section
      className="py-20"
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Why Choose Us"
          title="Trusted Healthcare for Your Family"
          description="Dedicated to providing exceptional medical care."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {clinicInfo.whyChooseUs.map(
            (item) => (
              <div
                key={item}
                className="
                  flex
                  items-center
                  gap-4
                  p-6
                  rounded-2xl
                  border
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-lg
                "
                style={{
                  backgroundColor:
                    "var(--color-background)",

                  borderColor:
                    "var(--color-secondary)",
                }}
              >
                <CheckCircle2
                  size={24}
                  style={{
                    color:
                      "var(--color-accent)",
                  }}
                />

                <span
                  className="
                    font-medium
                  "
                  style={{
                    color:
                      "var(--color-text)",
                  }}
                >
                  {item}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;