import { Phone, Calendar } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";

import { clinicInfo } from "../../config/clinic";

const StickyMobileBar = () => {
  const { contact } = clinicInfo;

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

  const handleAppointment = () => {
    // For now, same as call.
    // Later we can connect this
    // to an appointment form/modal.
    handleCall();
  };

  return (
    <div
      className="
        fixed
        bottom-0
        left-0
        right-0
        z-50
        lg:hidden
        border-t
        shadow-2xl
      "
      style={{
        backgroundColor: "var(--color-background)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <div className="grid grid-cols-3">
        {/* Call */}
        <button
          onClick={handleCall}
          className="
            flex
            flex-col
            items-center
            justify-center
            py-3
            gap-1
          "
          style={{
            color: "var(--color-primary)",
          }}
        >
          <Phone size={20} />

          <span
            className="
              text-xs
              font-semibold
            "
          >
            Call Now
          </span>
        </button>

        {/* WhatsApp */}
        <button
          onClick={handleWhatsApp}
          className="
            flex
            flex-col
            items-center
            justify-center
            py-3
            gap-1
          "
          style={{
            color: "#25D366",
          }}
        >
          <FaWhatsapp size={22} />

          <span
            className="
              text-xs
              font-semibold
            "
          >
            WhatsApp
          </span>
        </button>

        {/* Book */}
        <button
          onClick={handleAppointment}
          className="
            flex
            flex-col
            items-center
            justify-center
            py-3
            gap-1
          "
          style={{
            color: "var(--color-primary)",
          }}
        >
          <Calendar size={20} />

          <span
            className="
              text-xs
              font-semibold
            "
          >
            Book Now
          </span>
        </button>
      </div>
    </div>
  );
};

export default StickyMobileBar;