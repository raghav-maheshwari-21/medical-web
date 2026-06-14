import { Phone, ShieldCheck } from "lucide-react";

import CTAButton from "../components/common/CTAButton";
import { clinicInfo } from "../config/clinic";
import { FaWhatsapp } from "react-icons/fa";

const HeroSection = () => {
  const { branding, doctor, hero, contact } = clinicInfo;

  const handleCall = () => {
    window.location.href = `tel:${contact.phone}`;
  };

  const handleWhatsApp = () => {
    const message =
      "Hello Doctor, I would like to book an appointment.";

    window.open(
      `https://wa.me/${contact.whatsapp}?text=${encodeURIComponent(
        message
      )}`,
      "_blank"
    );
  };

  return (
    <section
      className="overflow-hidden"
      style={{
        background:
          "linear-gradient(to bottom right, var(--color-secondary), #ffffff, #ffffff)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-16
          lg:py-24
        "
      >
        <div
          className="
            grid
            lg:grid-cols-2
            gap-12
            items-center
          "
        >
          {/* Left Content */}
          <div>
            <span
              className="
                inline-flex
                items-center
                px-4
                py-2
                rounded-full
                text-sm
                font-medium
              "
              style={{
                backgroundColor:
                  "var(--color-background)",
                color:
                  "var(--color-primary)",
              }}
            >
              <ShieldCheck
                size={16}
                className="mr-2"
              />

              Trusted Healthcare Partner
            </span>

            <h1
              className="
                mt-6
                text-4xl
                lg:text-6xl
                font-bold
                leading-tight
              "
              style={{
                color:
                  "var(--color-text)",
              }}
            >
              {branding.tagline}
            </h1>

            <p
              className="
                mt-6
                text-lg
                leading-8
              "
              style={{
                color:
                  "var(--color-muted)",
              }}
            >
              {hero.description}
            </p>

            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-4
              "
            >
              <CTAButton
                onClick={handleCall}
              >
                <Phone
                  size={18}
                  className="inline mr-2"
                />

                Book Appointment
              </CTAButton>

              <CTAButton
                variant="whatsapp"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp
                  size={22}
                  className="inline mr-2"
                />

                Book via WhatsApp
              </CTAButton>
            </div>

            <div
              className="
                mt-10
                flex
                flex-wrap
                gap-6
              "
            >
              <div>
                <p
                  className="
                    text-sm
                    font-medium
                  "
                  style={{
                    color:
                      "var(--color-muted)",
                  }}
                >
                  Doctor
                </p>

                <p
                  className="
                    font-semibold
                    mt-1
                  "
                >
                  {doctor.name}
                </p>
              </div>

              <div>
                <p
                  className="
                    text-sm
                    font-medium
                  "
                  style={{
                    color:
                      "var(--color-muted)",
                  }}
                >
                  Experience
                </p>

                <p
                  className="
                    font-semibold
                    mt-1
                  "
                >
                  {doctor.experience}
                </p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <img
              src={doctor.image}
              alt={doctor.name}
              className="
                w-full
                rounded-[2rem]
                shadow-2xl
                object-cover
              "
            />

            {/* Experience Card */}
            <div
              className="
                absolute
                top-6
                left-6
                px-5
                py-4
                rounded-2xl
                shadow-lg
              "
              style={{
                backgroundColor:
                  "var(--color-background)",
              }}
            >
              <p
                className="
                  text-2xl
                  font-bold
                "
                style={{
                  color:
                    "var(--color-primary)",
                }}
              >
                {doctor.experience}
              </p>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-muted)",
                }}
              >
                Experience
              </p>
            </div>

            {/* Patient Card */}
            <div
              className="
                absolute
                bottom-6
                right-6
                px-5
                py-4
                rounded-2xl
                shadow-lg
              "
              style={{
                backgroundColor:
                  "var(--color-background)",
              }}
            >
              <p
                className="
                  text-2xl
                  font-bold
                "
                style={{
                  color:
                    "var(--color-accent)",
                }}
              >
                {clinicInfo.stats.happyPatients}
              </p>

              <p
                className="text-sm"
                style={{
                  color:
                    "var(--color-muted)",
                }}
              >
                Happy Patients
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;