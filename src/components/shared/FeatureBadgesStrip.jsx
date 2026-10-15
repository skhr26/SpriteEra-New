import { Box, PenTool, Cog, Truck, Users, ShieldCheck, FileText, Lightbulb, PencilRuler } from "lucide-react";

const ICON_MAP = {
  box: Box,
  pen: PenTool,
  gear: Cog,
  truck: Truck,
  users: Users,
  shield: ShieldCheck,
  file: FileText,
  lightbulb: Lightbulb,
  ruler: PencilRuler,
};

export default function FeatureBadgesStrip({
  items,
  className = ""
}) {
  return (
    <div className={`flex flex-wrap items-center gap-y-4 gap-x-8 text-sm text-gray-100 font-semibold ${className}`}>
      {items.map((feat, idx) => {
        const IconComponent = feat.iconType ? ICON_MAP[feat.iconType] : null;

        return (
          <div key={idx} className="flex items-center gap-x-8">
            <div className="flex items-center gap-2.5 drop-shadow-md">
              <div className="w-6 h-6 flex items-center justify-center flex-shrink-0">
                {IconComponent ? (
                  <IconComponent className="w-5 h-5 text-blue-200" strokeWidth={1.8} />
                ) : feat.icon ? (
                  <img
                    src={feat.icon}
                    alt={feat.label}
                    className="w-full h-full object-contain mix-blend-screen scale-110"
                  />
                ) : null}
              </div>
              <span className="tracking-wide text-xs sm:text-sm">{feat.label}</span>
            </div>
            {idx < items.length - 1 && (
              <span
                className="h-5 w-px bg-white/30 hidden sm:inline-block"
                aria-hidden="true"
              />
            )}
          </div>
        );
      })}
    </div>
  );
}
