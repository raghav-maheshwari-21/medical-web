import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../config/clinic";

const FAQSection = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex((prev) =>
      prev === index ? null : index
    );
  };

  return (
    <section
      id="faq"
      className="py-20"
      style={{
        backgroundColor: "var(--color-background)",
      }}
    >
      <div className="max-w-4xl mx-auto px-6">
        <SectionTitle
          badge="Frequently Asked Questions"
          title="Have Questions? We've Got Answers"
          description="Everything you need to know before visiting the clinic."
        />

        <div className="mt-14 space-y-5">
          {clinicInfo.faq.map((item, index) => {
            const isOpen =
              activeIndex === index;

            return (
              <div
                key={item.question}
                className="
                  rounded-3xl
                  border
                  overflow-hidden
                  shadow-sm
                  transition-all
                  duration-300
                "
                style={{
                  backgroundColor:
                    "var(--color-background)",
                  borderColor:
                    "var(--color-secondary)",
                }}
              >
                <button
                  onClick={() =>
                    toggleFAQ(index)
                  }
                  className="
                    w-full
                    flex
                    justify-between
                    items-center
                    text-left
                    px-6
                    py-5
                  "
                >
                  <span
                    className="
                      font-semibold
                      pr-4
                    "
                    style={{
                      color:
                        "var(--color-text)",
                    }}
                  >
                    {item.question}
                  </span>

                  {isOpen ? (
                    <ChevronUp
                      size={22}
                      style={{
                        color:
                          "var(--color-primary)",
                      }}
                    />
                  ) : (
                    <ChevronDown
                      size={22}
                      style={{
                        color:
                          "var(--color-primary)",
                      }}
                    />
                  )}
                </button>

                <div
                  className={`
                    transition-all
                    duration-300
                    overflow-hidden
                    ${
                      isOpen
                        ? "max-h-96"
                        : "max-h-0"
                    }
                  `}
                >
                  <div
                    className="
                      px-6
                      pb-6
                      leading-8
                    "
                    style={{
                      color:
                        "var(--color-muted)",
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Note */}
        <div
          className="
            mt-12
            text-center
            p-6
            rounded-3xl
          "
          style={{
            backgroundColor:
              "var(--color-secondary)",
          }}
        >
          <p
            style={{
              color:
                "var(--color-muted)",
            }}
          >
            Still have questions?
          </p>

          <p
            className="
              mt-2
              font-semibold
            "
            style={{
              color:
                "var(--color-text)",
            }}
          >
            Contact us and we'll be happy to assist you.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;