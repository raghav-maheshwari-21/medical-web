import {
  Phone,
  Mail,
  MapPin,
  Clock,
} from "lucide-react";

import CTAButton from "../components/common/CTAButton";
import SectionTitle from "../components/common/SectionTitle";

import { clinicInfo } from "../config/clinic";
import { FaWhatsapp } from "react-icons/fa";

const ContactSection = () => {
  const { contact } = clinicInfo;

  const handleCall = () => {
    window.location.href = `tel:${contact.phone}`;
  };

  const handleWhatsApp = () => {
    window.open(
      `https://wa.me/${contact.whatsapp}`,
      "_blank"
    );
  };

  return (
    <section
      id="contact"
      className="py-20"
      style={{
        backgroundColor: "var(--color-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Contact Us"
          title="Book Your Appointment Today"
          description="We're here to help you with your healthcare needs."
        />

        <div
          className="
            mt-14
            grid
            lg:grid-cols-2
            gap-10
          "
        >
          {/* Contact Info */}
          <div
            className="
              p-8
              rounded-3xl
            "
            style={{
              backgroundColor: "var(--color-background)",
            }}
          >
            <div className="space-y-8">
              <div className="flex gap-4">
                <Phone
                  style={{
                    color: "var(--color-primary)",
                  }}
                />

                <div>
                  <h4 className="font-semibold">
                    Phone
                  </h4>

                  <p
                    style={{
                      color: "var(--color-muted)",
                    }}
                  >
                    {contact.phone}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Mail
                  style={{
                    color: "var(--color-primary)",
                  }}
                />

                <div>
                  <h4 className="font-semibold">
                    Email
                  </h4>

                  <p
                    style={{
                      color: "var(--color-muted)",
                    }}
                  >
                    {contact.email}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin
                  style={{
                    color: "var(--color-primary)",
                  }}
                />

                <div>
                  <h4 className="font-semibold">
                    Address
                  </h4>

                  <p
                    style={{
                      color: "var(--color-muted)",
                    }}
                  >
                    {contact.address}
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <Clock
                  style={{
                    color: "var(--color-primary)",
                  }}
                />

                <div>
                  <h4 className="font-semibold">
                    Timings
                  </h4>

                  <p
                    style={{
                      color: "var(--color-muted)",
                    }}
                  >
                    {contact.timings}
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
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
                Call Clinic
              </CTAButton>

              <CTAButton
                variant="whatsapp"
                onClick={handleWhatsApp}
              >
                <FaWhatsapp
                  size={22}
                  className="inline mr-2"
                />
                WhatsApp Us
              </CTAButton>
            </div>
          </div>

          {/* Map */}
          <div
            className="
              rounded-3xl
              overflow-hidden
              shadow-lg
              min-h-[450px]
            "
          >
            {contact.mapEmbed ? (
              <iframe
                title="Clinic Location"
                src={contact.mapEmbed}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              />
            ) : (
              <div
                className="
                  h-full
                  flex
                  flex-col
                  items-center
                  justify-center
                  text-center
                  p-10
                "
                style={{
                  backgroundColor:
                    "var(--color-background)",
                }}
              >
                <MapPin
                  size={48}
                  style={{
                    color:
                      "var(--color-primary)",
                  }}
                />

                <h3
                  className="
                    mt-6
                    text-2xl
                    font-bold
                  "
                >
                  Visit Our Clinic
                </h3>

                <p
                  className="
                    mt-4
                    max-w-md
                  "
                  style={{
                    color:
                      "var(--color-muted)",
                  }}
                >
                  {contact.address}
                </p>

                <a
                  href={contact.mapUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6"
                >
                  <CTAButton>
                    Get Directions
                  </CTAButton>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;