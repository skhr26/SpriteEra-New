import { Handshake } from "lucide-react";
import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import LandingTrustStrip from "../../components/landing/LandingTrustStrip";
import DealerDirectory from "../../components/dealers/DealerDirectory";
import LandingCtaBanner from "../../components/landing/LandingCtaBanner";
import { PrimaryButton } from "../../components/Buttons";
import { authorizedDealersData } from "../../data/authorizedDealersData";

export const metadata = {
  title: "Authorised Dealer Network | Vajra LED",
  description:
    "Find authorized Vajra LED dealers across India for genuine products, expert product guidance and reliable after-sales support."
};

export default function AuthorizedDealersPage() {
  const { hero, trust, finder, becomeDealer, bottomBanner } = authorizedDealersData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero */}
      <PageHero
        breadcrumbs={hero.breadcrumbs}
        tag={hero.tag}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryCta={hero.primaryCta}
        bgImage={hero.bgImage}
        minHeight="min-h-[420px] lg:min-h-[520px]"
        imageOpacity="opacity-90"
        highlightBlock
      />

      {/* 3. Trust strip */}
      <LandingTrustStrip data={trust} />

      {/* 4. Dealer directory with state/city filters */}
      <DealerDirectory data={finder} />

      {/* 5. Become an authorized dealer */}
      <section className="bg-brand-surface py-10 md:py-12">
        <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-full bg-white border border-blue-100 flex items-center justify-center text-brand-accent flex-shrink-0">
              <Handshake className="size-8" strokeWidth={1.5} />
            </div>
            <div>
              <h2 className="text-xl md:text-2xl font-bold text-brand-navy">
                {becomeDealer.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1 max-w-2xl leading-snug">
                {becomeDealer.description}
              </p>
            </div>
          </div>
          <PrimaryButton href={becomeDealer.cta.href} label={becomeDealer.cta.label} className="flex-shrink-0" />
        </div>
      </section>

      {/* 6. Dark bottom CTA banner (acts as footer) */}
      <LandingCtaBanner data={bottomBanner} />
    </div>
  );
}
