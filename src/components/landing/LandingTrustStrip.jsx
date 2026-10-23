import { Gem, Zap, ShieldCheck, Cog, MessagesSquare, Users } from "lucide-react";

const ICONS = {
  diamond: Gem,
  zap: Zap,
  shield: ShieldCheck,
  cog: Cog,
  message: MessagesSquare,
  users: Users
};

/**
 * Compact trust strip shown directly below a page hero.
 * data: { items: [{ iconType, title, subtitle }] }
 */
export default function LandingTrustStrip({ data }) {
  if (!data?.items?.length) return null;

  return (
    <section className="bg-brand-mist">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {data.items.map((item, index) => {
            const Icon = ICONS[item.iconType] || Gem;
            return (
              <div
                key={item.title}
                className="relative flex items-center gap-4 py-4 sm:px-4 lg:px-6 lg:py-6 lg:first:pl-0 lg:last:pr-0"
              >
                {index > 0 && (
                  <span
                    aria-hidden="true"
                    className="hidden lg:block absolute left-0 top-1/2 h-14 w-px -translate-y-1/2 bg-brand-hairline"
                  />
                )}
                <div className="w-[60px] h-[60px] rounded-full bg-white shadow-[0_4px_14px_rgba(0,30,54,0.08)] flex items-center justify-center text-brand-accent flex-shrink-0">
                  <Icon className="size-8" strokeWidth={2} />
                </div>
                <div className="min-w-0 max-w-[190px]">
                  <h3 className="text-base font-bold text-brand-navy leading-tight">{item.title}</h3>
                  <p className="text-sm text-gray-500 mt-1 leading-snug">{item.subtitle}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
