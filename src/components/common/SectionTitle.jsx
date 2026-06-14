const SectionTitle = ({
  badge,
  title,
  description,
  center = true,
}) => {
  return (
    <div className={center ? "text-center" : ""}>
      {badge && (
        <span
          className="
            inline-block
            px-4
            py-2
            rounded-full
            text-sm
            font-medium
          "
          style={{
            backgroundColor: "var(--color-secondary)",
            color: "var(--color-primary)",
          }}
        >
          {badge}
        </span>
      )}

      <h2
        className="
          mt-4
          text-3xl
          lg:text-4xl
          font-bold
        "
        style={{
          color: "var(--color-text)",
        }}
      >
        {title}
      </h2>

      {description && (
        <p
          className="
            mt-4
            max-w-2xl
            mx-auto
            leading-7
          "
          style={{
            color: "var(--color-muted)",
          }}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;