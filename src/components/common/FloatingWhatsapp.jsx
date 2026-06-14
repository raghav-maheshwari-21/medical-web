import { FaWhatsapp } from "react-icons/fa";

import { clinicInfo } from "../../config/clinic";

const FloatingWhatsApp = () => {
  const message =
    "Hello Doctor, I would like to book an appointment.";

  return (
    <button
      onClick={() =>
        window.open(
          `https://wa.me/${clinicInfo.contact.whatsapp}?text=${encodeURIComponent(
            message
          )}`,
          "_blank"
        )
      }
      className="
        fixed
        bottom-6
        right-6
        z-50
        p-4
        rounded-full
        shadow-xl
        transition-all
        duration-300
        hover:scale-110
      "
      style={{
        backgroundColor: "var(--color-accent)",
        color: "#ffffff",
      }}
    >
      <FaWhatsapp size={28} />
      {/*  */}
    </button>
  );
};

export default FloatingWhatsApp;