import {
  Phone,
  GraduationCap,
  Languages,
  Award,
  BadgeCheck,
  BriefcaseMedical,
} from "lucide-react";

import CTAButton from "../components/common/CTAButton";
import SectionTitle from "../components/common/SectionTitle";

import { clinicInfo } from "../config/clinic";
import { FaWhatsapp } from "react-icons/fa";

const DoctorSection = () => {
  const { doctor, contact } = clinicInfo;

  const handleCall = () => {
    window.location.href = `tel:${contact.phone}`;
  };

  const handleWhatsApp = () => {
    const message = `Hello ${doctor.name}, I would like to book an appointment.`;

    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      id="doctor"
      className="py-20"
      style={{
        backgroundColor: "var(--color-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Meet Your Doctor"
          title="Experienced Medical Professional"
          description="Dedicated to delivering compassionate healthcare with expertise and personalized attention."
        />

        <div
          className="
            mt-16
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* Doctor Image */}
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="
                w-full
                rounded-[2rem]
                object-cover
                shadow-2xl
              "
            />

            {/* Experience Badge */}
            <div
              className="
                absolute
                bottom-6
                left-6
                px-6
                py-4
                rounded-2xl
                shadow-lg
              "
              style={{
                backgroundColor: "var(--color-background)",
              }}
            >
              <div
                className="
                  flex
                  items-center
                  gap-3
                "
              >
                <BriefcaseMedical
                  size={24}
                  style={{
                    color: "var(--color-primary)",
                  }}
                />

                <div>
                  <p
                    className="
                      text-2xl
                      font-bold
                    "
                    style={{
                      color: "var(--color-primary)",
                    }}
                  >
                    {doctor.experience}
                  </p>

                  <p
                    className="text-sm"
                    style={{
                      color: "var(--color-muted)",
                    }}
                  >
                    Experience
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Doctor Details */}
          <div>
            <span
              className="
                inline-block
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
              "
              style={{
                backgroundColor: "var(--color-background)",
                color: "var(--color-primary)",
              }}
            >
              {doctor.specialization}
            </span>

            <h2
              className="
                mt-5
                text-4xl
                font-bold
              "
              style={{
                color: "var(--color-text)",
              }}
            >
              {doctor.name}
            </h2>

            <div
              className="
                mt-8
                space-y-5
              "
            >
              {/* Qualification */}
              <div className="flex gap-4">
                <GraduationCap
                  size={24}
                  style={{
                    color: "var(--color-primary)",
                    flexShrink: 0,
                  }}
                />

                <div>
                  <h4 className="font-semibold">
                    Qualifications
                  </h4>

                  <p
                    style={{
                      color: "var(--color-muted)",
                    }}
                  >
                    {doctor.qualifications}
                  </p>
                </div>
              </div>

              {/* Registration */}
              {doctor.registrationNumber && (
                <div className="flex gap-4">
                  <BadgeCheck
                    size={24}
                    style={{
                      color: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  />

                  <div>
                    <h4 className="font-semibold">
                      Registration Number
                    </h4>

                    <p
                      style={{
                        color: "var(--color-muted)",
                      }}
                    >
                      {doctor.registrationNumber}
                    </p>
                  </div>
                </div>
              )}

              {/* Languages */}
              {doctor.languages?.length > 0 && (
                <div className="flex gap-4">
                  <Languages
                    size={24}
                    style={{
                      color: "var(--color-primary)",
                      flexShrink: 0,
                    }}
                  />

                  <div>
                    <h4 className="font-semibold">
                      Languages
                    </h4>

                    <p
                      style={{
                        color: "var(--color-muted)",
                      }}
                    >
                      {doctor.languages.join(", ")}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Awards */}
            {doctor.awards?.length > 0 && (
              <div className="mt-10">
                <h3
                  className="
                    text-xl
                    font-semibold
                    mb-5
                  "
                >
                  Achievements & Recognition
                </h3>

                <div className="space-y-4">
                  {doctor.awards.map((award) => (
                    <div
                      key={award}
                      className="
                        flex
                        items-center
                        gap-3
                        p-4
                        rounded-2xl
                      "
                      style={{
                        backgroundColor:
                          "var(--color-background)",
                      }}
                    >
                      <Award
                        size={20}
                        style={{
                          color: "var(--color-gold)",
                          flexShrink: 0,
                        }}
                      />

                      <span>{award}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}
            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-4
              "
            >
              <CTAButton onClick={handleCall}>
                <Phone
                  size={18}
                  className="inline mr-2"
                />

                Call Now
              </CTAButton>

              <CTAButton
                variant="whatsapp"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp
                  size={22}
                  className="inline mr-2"
                />
                Chat Now
              </CTAButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorSection;