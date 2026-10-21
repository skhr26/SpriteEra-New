export default function SectionHeading({
    label = "OUR SOLUTIONS",
    title = "Find the Right",
    highlight = "",
    titleSuffix = "",
    description,
    className = "",
    titleSize = "text-2xl sm:text-3xl md:text-[40px]",
    dark = false,
}) {
    return (
        <div className={className}>
            {label && (
                <p className={`text-xs lg:text-sm font-semibold tracking-widest uppercase mb-2 flex items-center gap-2 ${dark ? "text-brand-accent-light" : "text-brand-accent"
                    }`}>
                    <span
                        className={`w-5 h-[1.5px] ${dark ? "bg-brand-accent-light" : "bg-brand-accent"
                            }`}
                    />
                    {label}
                </p>
            )}

            <h2 className={`${titleSize} font-bold tracking-tight ${dark ? "text-white" : "text-brand-navy"
                }`}>
                {title}{" "}
                <span className={dark ? "text-brand-accent-light" : "text-brand-accent"}>
                    {highlight}
                </span>
                {titleSuffix && <span>{` ${titleSuffix}`}</span>}
            </h2>

            {description && (
                <p className={`mt-3 max-w-2xl text-sm md:text-base lg:text-lg leading-snug ${dark ? "text-gray-300" : "text-gray-500"
                    }`}>
                    {description}
                </p>
            )}
        </div>
    );
}
