import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../config/clinic";

const AboutSection = () => {
  const { about, doctor } = clinicInfo;

  return (
    <section
      id="about"
      className="py-20"
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Doctor Image */}
          <div>
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
          </div>

          {/* Content */}
          <div>
            <SectionTitle
              badge="About Us"
              title={about.title}
              center={false}
            />

            <p
              className="mt-6 leading-8"
              style={{
                color: "var(--color-muted)",
              }}
            >
              {about.description}
            </p>

            <div className="mt-8 space-y-4">
              <div>
                <span className="font-semibold">
                  Doctor:
                </span>{" "}
                {doctor.name}
              </div>

              <div>
                <span className="font-semibold">
                  Qualification:
                </span>{" "}
                {doctor.qualifications}
              </div>

              <div>
                <span className="font-semibold">
                  Specialization:
                </span>{" "}
                {doctor.specialization}
              </div>

              <div>
                <span className="font-semibold">
                  Experience:
                </span>{" "}
                {doctor.experience}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;