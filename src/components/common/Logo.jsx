import { Stethoscope } from "lucide-react";

import { clinicInfo } from "../../config/clinic";

const Logo = () => {
  return (
    <div className="flex items-center gap-3">
      <div
        className="p-3 rounded-2xl"
        style={{
          backgroundColor: "var(--color-secondary)",
        }}
      >
        <Stethoscope
          size={24}
          style={{
            color: "var(--color-primary)",
          }}
        />
      </div>

      <div>
        <h1
          className="text-lg font-bold"
          style={{
            color: "var(--color-text)",
          }}
        >
          {clinicInfo.branding.clinicName}
        </h1>

        <p
          className="text-xs"
          style={{
            color: "var(--color-muted)",
          }}
        >
          {clinicInfo.branding.tagline}
        </p>
      </div>
    </div>
  );
};

export default Logo;