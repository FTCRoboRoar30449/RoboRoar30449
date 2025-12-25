interface PageHeroProps {
  title: string;
  subtitle?: string;
  accentWord?: string;
}

const PageHero = ({ title, subtitle, accentWord }: PageHeroProps) => {
  const renderTitle = () => {
    if (!accentWord) return title;
    
    const parts = title.split(accentWord);
    return (
      <>
        {parts[0]}
        <span className="text-gold">{accentWord}</span>
        {parts[1]}
      </>
    );
  };

  return (
    <section className="bg-navy py-24 md:py-32">
      <div className="container mx-auto text-center">
        <h1 className="font-display text-5xl md:text-7xl text-white mb-6 animate-fade-up">
          {renderTitle()}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto animate-fade-up animation-delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
};

export default PageHero;
