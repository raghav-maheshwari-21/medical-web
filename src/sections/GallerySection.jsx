import { useEffect, useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import SectionTitle from "../components/common/SectionTitle";
import { clinicInfo } from "../config/clinic";

const GallerySection = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);

  const images = clinicInfo.gallery || [];

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const previousImage = () => {
    setSelectedIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setSelectedIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (selectedIndex === null) return;

      if (event.key === "Escape") {
        closeModal();
      }

      if (event.key === "ArrowLeft") {
        previousImage();
      }

      if (event.key === "ArrowRight") {
        nextImage();
      }
    };

    window.addEventListener(
      "keydown",
      handleKeyDown
    );

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, [selectedIndex, images.length]);

  return (
    <section
      id="gallery"
      className="py-20"
      style={{
        backgroundColor:
          "var(--color-secondary)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        <SectionTitle
          badge="Gallery"
          title="Inside Our Clinic"
          description="Take a look at our facilities and healthcare environment."
        />

        {/* Grid */}
        <div
          className="
            mt-14
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-6
          "
        >
          {images.map((item, index) => (
            <button
              key={`${item.title}-${index}`}
              onClick={() =>
                setSelectedIndex(index)
              }
              className="
                group
                overflow-hidden
                rounded-3xl
                shadow-lg
                relative
              "
            >
              <img
                src={item.image}
                alt={item.title}
                className="
                  w-full
                  h-72
                  object-cover
                  transition-transform
                  duration-500
                  group-hover:scale-110
                "
              />

              <div
                className="
                  absolute
                  inset-x-0
                  bottom-0
                  p-5
                  bg-gradient-to-t
                  from-black/70
                  to-transparent
                "
              >
                <h3
                  className="
                    text-white
                    font-semibold
                  "
                >
                  {item.title}
                </h3>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="
            fixed
            inset-0
            z-[999]
            bg-black/90
            flex
            items-center
            justify-center
            px-4
          "
        >
          {/* Close */}
          <button
            onClick={closeModal}
            className="
              absolute
              top-6
              right-6
              text-white
            "
          >
            <X size={32} />
          </button>

          {/* Previous */}
          <button
            onClick={previousImage}
            className="
              absolute
              left-4
              text-white
            "
          >
            <ChevronLeft size={40} />
          </button>

          {/* Image */}
          <div className="max-w-5xl w-full text-center">
            <img
              src={images[selectedIndex].image}
              alt={
                images[selectedIndex].title
              }
              className="
                max-h-[80vh]
                w-full
                object-contain
                rounded-2xl
              "
            />

            <p
              className="
                mt-6
                text-white
                text-lg
                font-medium
              "
            >
              {images[selectedIndex].title}
            </p>
          </div>

          {/* Next */}
          <button
            onClick={nextImage}
            className="
              absolute
              right-4
              text-white
            "
          >
            <ChevronRight size={40} />
          </button>
        </div>
      )}
    </section>
  );
};

export default GallerySection;