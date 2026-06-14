import { useEffect, useState } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener(
        "scroll",
        handleScroll
      );
    };
  }, []);

  if (!show) return null;

  return (
    <button
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        })
      }
      className="
        fixed
        right-6
        bottom-[9.5rem]
        z-50
        p-3
        rounded-full
        shadow-lg
        transition-all
        duration-300
        hover:scale-110
      "
      style={{
        backgroundColor: "var(--color-background)",
        color: "var(--color-primary)",
      }}
    >
      <ChevronUp size={22} />
    </button>
  );
};

export default ScrollToTop;