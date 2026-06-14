import {
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Syringe,
  Microscope,
  ClipboardCheck,
} from "lucide-react";

import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../config/clinic";

const icons = [
  Stethoscope,
  ShieldCheck,
  HeartPulse,
  Syringe,
  Microscope,
  ClipboardCheck,
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="py-20"
      style={{
        backgroundColor: "var(--color-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Services"
          title="Healthcare Services We Provide"
          description="Comprehensive healthcare solutions tailored to your needs."
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {clinicInfo.services.map(
            (service, index) => {
              const Icon =
                icons[index % icons.length];

              return (
                <div
                  key={service.title}
                  className="
                    rounded-3xl
                    p-8
                    shadow-sm
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    hover:shadow-xl
                  "
                  style={{
                    backgroundColor:
                      "var(--color-background)",
                  }}
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      flex
                      items-center
                      justify-center
                    "
                    style={{
                      backgroundColor:
                        "var(--color-secondary)",
                    }}
                  >
                    <Icon
                      size={30}
                      style={{
                        color:
                          "var(--color-primary)",
                      }}
                    />
                  </div>

                  <h3
                    className="
                      mt-6
                      text-xl
                      font-semibold
                    "
                    style={{
                      color:
                        "var(--color-text)",
                    }}
                  >
                    {service.title}
                  </h3>

                  <p
                    className="
                      mt-4
                      leading-7
                    "
                    style={{
                      color:
                        "var(--color-muted)",
                    }}
                  >
                    {service.description}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;