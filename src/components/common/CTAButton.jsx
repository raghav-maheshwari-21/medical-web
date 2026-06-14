const CTAButton = ({
  children,
  variant = "primary",
  className = "",
  ...props
}) => {
  const styles = {
    primary: {
      backgroundColor: "var(--color-primary)",
      color: "#ffffff",
    },

    secondary: {
      backgroundColor: "transparent",
      color: "var(--color-primary)",
      border: "1px solid var(--color-primary)",
    },

    whatsapp: {
      backgroundColor: "var(--color-accent)",
      color: "#ffffff",
    },
  };

  return (
    <button
      {...props}
      style={styles[variant]}
      className={`
        px-6
        py-3
        rounded-xl
        font-semibold
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-lg
        ${className}
      `}
    >
      {children}
    </button>
  );
};

export default CTAButton;