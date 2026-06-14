import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";

import Logo from "../common/Logo";
import CTAButton from "../common/CTAButton";

import { clinicInfo } from "../../config/clinic";

const navItems = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Services",
    href: "#services",
  },
  {
    label: "Doctor",
    href: "#doctor",
  },
  {
    label: "Testimonials",
    href: "#testimonials",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleCall = () => {
    window.location.href = `tel:${clinicInfo.contact.phone}`;
  };

  return (
    <header
      className="
        sticky
        top-0
        z-50
        backdrop-blur-sm
        border-b
      "
      style={{
        backgroundColor: "rgba(255,255,255,0.95)",
        borderColor: "var(--color-secondary)",
      }}
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          py-4
        "
      >
        <div
          className="
            flex
            items-center
            justify-between
          "
        >
          <Logo />

          {/* Desktop Menu */}
          <nav
            className="
              hidden
              lg:flex
              items-center
              gap-8
            "
          >
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  font-medium
                  transition-colors
                "
                style={{
                  color: "var(--color-muted)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div
            className="
              hidden
              lg:flex
              items-center
              gap-4
            "
          >
            <div
              className="
                flex
                items-center
                gap-2
                font-semibold
              "
              style={{
                color: "var(--color-primary)",
              }}
            >
              <Phone size={18} />

              <span>
                {clinicInfo.contact.phone}
              </span>
            </div>

            <CTAButton onClick={handleCall}>
              Book Appointment
            </CTAButton>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden"
            onClick={() =>
              setIsOpen(!isOpen)
            }
            style={{
              color: "var(--color-primary)",
            }}
          >
            {isOpen ? (
              <X size={28} />
            ) : (
              <Menu size={28} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div
            className="
              lg:hidden
              mt-6
              pb-4
            "
          >
            <div
              className="
                flex
                flex-col
                gap-5
              "
            >
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() =>
                    setIsOpen(false)
                  }
                  style={{
                    color: "var(--color-muted)",
                  }}
                >
                  {item.label}
                </a>
              ))}

              <div
                className="
                  flex
                  items-center
                  gap-2
                  font-semibold
                  pt-2
                "
                style={{
                  color: "var(--color-primary)",
                }}
              >
                <Phone size={18} />

                <span>
                  {clinicInfo.contact.phone}
                </span>
              </div>

              <CTAButton onClick={handleCall}>
                Book Appointment
              </CTAButton>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;