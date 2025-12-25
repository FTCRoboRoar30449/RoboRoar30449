interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionTitle = ({ title, subtitle, centered = true, light = false }: SectionTitleProps) => {
  return (
    <div className={`mb-12 ${centered ? "text-center" : ""}`}>
      <h2 className={`font-display text-4xl md:text-5xl mb-4 ${light ? "text-white" : "text-primary"}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-lg max-w-2xl ${centered ? "mx-auto" : ""} ${light ? "text-white/70" : "text-muted-foreground"}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionTitle;
