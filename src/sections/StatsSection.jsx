import {
  Users,
  BriefcaseMedical,
  Clock,
  Award,
} from "lucide-react";

import { clinicInfo } from "../config/clinic";

const stats = [
  {
    label: "Happy Patients",
    value: clinicInfo.stats.happyPatients,
    icon: Users,
  },
  {
    label: "Years Experience",
    value: clinicInfo.stats.experience,
    icon: BriefcaseMedical,
  },
  {
    label: "Support",
    value: clinicInfo.stats.support,
    icon: Clock,
  },
  {
    label: "Patient Satisfaction",
    value: clinicInfo.stats.satisfaction,
    icon: Award,
  },
];

const StatsSection = () => {
  return (
    <section
      className="
        py-16
      "
      style={{
        backgroundColor:
          "var(--color-background)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
        "
      >
        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
          "
        >
          {stats.map((stat) => {
            const Icon = stat.icon;

            return (
              <div
                key={stat.label}
                className="
                  rounded-3xl
                  p-8
                  border
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:shadow-xl
                "
                style={{
                  backgroundColor:
                    "var(--color-background)",

                  borderColor:
                    "var(--color-secondary)",
                }}
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                  style={{
                    backgroundColor:
                      "var(--color-secondary)",
                  }}
                >
                  <Icon
                    size={28}
                    style={{
                      color:
                        "var(--color-primary)",
                    }}
                  />
                </div>

                <h3
                  className="
                    text-3xl
                    font-bold
                  "
                  style={{
                    color:
                      "var(--color-primary)",
                  }}
                >
                  {stat.value}
                </h3>

                <p
                  className="
                    mt-2
                  "
                  style={{
                    color:
                      "var(--color-muted)",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;