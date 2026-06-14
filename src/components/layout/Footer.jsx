import Logo from "../common/Logo";

import { clinicInfo } from "../../config/clinic";

const Footer = () => {
  const { branding, contact } = clinicInfo;

  return (
    <footer
      className="
        py-14
      "
      style={{
        backgroundColor:
          "var(--color-footer)",
        color: "#ffffff",
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
            md:grid-cols-3
            gap-10
          "
        >
          {/* Brand */}
          <div>
            <Logo />

            <p
              className="
                mt-4
                text-sm
                leading-7
              "
              style={{
                color:
                  "rgba(255,255,255,0.75)",
              }}
            >
              {branding.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3
              className="
                text-lg
                font-semibold
                mb-4
              "
            >
              Quick Links
            </h3>

            <div
              className="
                flex
                flex-col
                gap-3
              "
            >
              <a href="#about">
                About
              </a>

              <a href="#services">
                Services
              </a>

              <a href="#doctor">
                Doctor
              </a>

              <a href="#contact">
                Contact
              </a>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="
                text-lg
                font-semibold
                mb-4
              "
            >
              Contact
            </h3>

            <div
              className="
                space-y-3
                text-sm
              "
            >
              <p>
                {contact.phone}
              </p>

              <p>
                {contact.email}
              </p>

              <p>
                {contact.address}
              </p>

              <p>
                {contact.timings}
              </p>
            </div>
          </div>
        </div>

        <div
          className="
            mt-10
            pt-6
            border-t
            text-center
            text-sm
          "
          style={{
            borderColor:
              "rgba(255,255,255,0.2)",
            color:
              "rgba(255,255,255,0.7)",
          }}
        >
          © {new Date().getFullYear()}{" "}
          {branding.clinicName}.

          {" "}All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;