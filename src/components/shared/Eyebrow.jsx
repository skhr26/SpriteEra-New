/**
 * Eyebrow — small uppercase section label with a short accent bar.
 * Replaces the ~10 copy-pasted <p class="text-xs font-bold tracking-widest ...">
 * blocks across shared/, home/, industrial/ and architect/ components.
 *
 * Usage:
 *   <Eyebrow label="OUR SOLUTIONS" />
 *   <Eyebrow label="LET'S WORK TOGETHER" dark />
 */
export default function Eyebrow({
  label,
  dark = false,
  centered = false,
  className = "",
  barClassName = "",
}) {
  if (!label) return null;

  return (
    <p
      className={`text-xs font-bold tracking-widest uppercase mb-2 flex items-center gap-2 ${
        dark ? "text-brand-accent-light" : "text-brand-accent"
      } ${centered ? "justify-center" : ""} ${className}`}
    >
      <span
        aria-hidden="true"
        className={`w-5 h-0.5 ${dark ? "bg-brand-accent-light" : "bg-brand-accent"} ${barClassName}`}
      />
      {label}
    </p>
  );
}
