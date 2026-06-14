import { Phone } from "lucide-react";

import { clinicInfo } from "../../config/clinic";

const FloatingCall = () => {
  return (
    <button
      onClick={() =>
        (window.location.href = `tel:${clinicInfo.contact.phone}`)
      }
      className="
        fixed
        bottom-24
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
        backgroundColor: "var(--color-primary)",
        color: "#ffffff",
      }}
    >
      <Phone size={24} />
    </button>
  );
};

export default FloatingCall;