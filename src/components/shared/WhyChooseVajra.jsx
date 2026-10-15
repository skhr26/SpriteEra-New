export default function WhyChooseVajra({
  tag,
  title = "Why Choose",
  titleHighlight = "Vajra LED",
  description = "Reliable products, application support and a customer-first approach for your lighting projects.",
  bgImage = "/images/why-vajra-bg.jpg",
  features = [],
  columnsClass = "grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 lg:gap-12",
  className = ""
}) {
  return (
    <section className={`relative bg-brand-night text-white py-20 md:py-24 overflow-hidden ${className}`}>
      {/* Background with illuminated right side */}
      <img
        src={bgImage}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover object-right pointer-events-none select-none"
      />
      {/* Deep navy gradient on left fading towards background on right */}
      <div className="absolute inset-0 bg-gradient-to-r from-brand-night via-brand-night/95 md:via-brand-night/85 to-brand-night/30 pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 md:px-12">
        {tag && (
          <p className="text-xs font-semibold tracking-widest text-brand-accent-light uppercase mb-2 flex items-center gap-2">
            <span className="w-6 h-0.5 bg-brand-accent-light"></span>
            {tag}
          </p>
        )}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
          {title} <span className="text-brand-accent-glow">{titleHighlight}</span>
        </h2>
        <p className="text-gray-200 max-w-2xl mb-14 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
          {description}
        </p>

        <div className={`grid ${columnsClass}`}>
          {features.map((feature, idx) => (
            <div key={feature.id || feature.title || idx} className="group flex flex-col items-start">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border border-white/25 bg-white/10 backdrop-blur-md flex items-center justify-center mb-5 transition-all group-hover:scale-110 shadow-[0_6px_24px_rgba(0,0,0,0.3)] group-hover:border-blue-400">
                <img
                  src={feature.iconUrl || feature.icon}
                  alt={feature.title}
                  className="w-9 h-9 sm:w-11 sm:h-11 object-contain mix-blend-screen"
                />
              </div>
              <h3 className="font-bold text-base sm:text-lg text-white mb-2 leading-snug">
                {feature.title}
              </h3>
              <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
