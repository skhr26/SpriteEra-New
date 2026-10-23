"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import {
  MapPin, Phone, ExternalLink, ChevronDown, ChevronRight
} from "lucide-react";
import SectionHeading from "../SectionHeading";
import { PrimaryButton } from "../Buttons";

const ALL_STATES = "All States";
const ALL_CITIES = "All Cities";

export default function DealerDirectory({ data }) {
  const { tag, title, titleHighlight, titleSuffix, description, sideCard, dealers = [] } = data || {};

  const [state, setState] = useState(ALL_STATES);
  const [city, setCity] = useState(ALL_CITIES);
  const [applied, setApplied] = useState({ state: ALL_STATES, city: ALL_CITIES });

  const states = useMemo(
    () => [...new Set(dealers.map((dealer) => dealer.state))].sort(),
    [dealers]
  );

  const cities = useMemo(() => {
    const pool = state === ALL_STATES
      ? dealers
      : dealers.filter((dealer) => dealer.state === state);
    return [...new Set(pool.map((dealer) => dealer.city))].sort();
  }, [dealers, state]);

  const visible = useMemo(
    () =>
      dealers.filter((dealer) => {
        const stateMatch = applied.state === ALL_STATES || dealer.state === applied.state;
        const cityMatch = applied.city === ALL_CITIES || dealer.city === applied.city;
        return stateMatch && cityMatch;
      }),
    [dealers, applied]
  );

  const handleSubmit = (event) => {
    event.preventDefault();
    setApplied({ state, city });
  };

  if (!data) return null;

  return (
    <section className="bg-white py-16 md:py-20">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:items-start">
          <div className="lg:col-span-8">
            <SectionHeading
              label={tag}
              title={title}
              highlight={titleHighlight}
              titleSuffix={titleSuffix}
              description={description}
              className="max-w-none"
            />

            <form
              onSubmit={handleSubmit}
              className="mt-6 bg-brand-surface-soft border border-blue-100 rounded-xl p-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-[1fr_1fr_auto] lg:items-end"
            >
              <div>
                <label
                  htmlFor="dealer-state"
                  className="block text-xs font-semibold text-brand-navy mb-1.5"
                >
                  Select State
                </label>
                <div className="relative">
                  <select
                    id="dealer-state"
                    value={state}
                    onChange={(event) => {
                      setState(event.target.value);
                      setCity(ALL_CITIES);
                    }}
                    className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2.5 pl-3 pr-9 text-sm text-gray-700 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30"
                  >
                    <option value={ALL_STATES}>{ALL_STATES}</option>
                    {states.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="dealer-city"
                  className="block text-xs font-semibold text-brand-navy mb-1.5"
                >
                  Select City
                </label>
                <div className="relative">
                  <select
                    id="dealer-city"
                    value={city}
                    onChange={(event) => setCity(event.target.value)}
                    className="w-full appearance-none rounded-md border border-gray-300 bg-white py-2.5 pl-3 pr-9 text-sm text-gray-700 focus:border-brand-accent focus:outline-none focus:ring-1 focus:ring-brand-accent/30"
                  >
                    <option value={ALL_CITIES}>{ALL_CITIES}</option>
                    {cities.map((item) => (
                      <option key={item} value={item}>{item}</option>
                    ))}
                  </select>
                  <ChevronDown
                    className="pointer-events-none absolute right-3 top-1/2 size-4 -translate-y-1/2 text-gray-400"
                    strokeWidth={2}
                  />
                </div>
              </div>

              <PrimaryButton
                type="submit"
                label="Search"
                arrow={false}
                className="w-full justify-center lg:w-auto"
              />
            </form>
          </div>

          {sideCard && (
            <aside className="lg:col-span-4 rounded-xl overflow-hidden border border-blue-100 bg-brand-surface-soft flex shadow-[0_0px_8px_rgba(0,0,0,0.06)]">
              <div className="p-5 flex-1 flex flex-col justify-center">
                <h3 className="text-lg font-bold text-brand-navy leading-tight">
                  {sideCard.title}
                </h3>
                <p className="text-xs lg:text-sm text-gray-500 mt-2 leading-snug">
                  {sideCard.description}
                </p>
                <span className="block w-8 h-[2px] bg-brand-accent mt-3" aria-hidden="true" />
              </div>
              <div className="relative w-2/5 min-h-[11rem] flex-shrink-0">
                <Image
                  src={sideCard.image}
                  alt={sideCard.title}
                  fill
                  sizes="(max-width: 1024px) 40vw, 15vw"
                  className="object-cover"
                />
              </div>
            </aside>
          )}
        </div>

        <p className="mt-8 mb-4 text-xs md:text-sm text-gray-500">
          Showing {visible.length} authorized dealer{visible.length === 1 ? "" : "s"}
        </p>

        {visible.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 items-stretch">
            {visible.map((dealer) => {
              const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                `${dealer.name}, ${dealer.city}, ${dealer.state}`
              )}`;
              return (
                <article
                  key={dealer.id}
                  className="h-full border border-gray-200/90 rounded-xl bg-white p-5 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] transition-shadow duration-300 flex flex-col justify-between"
                >
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <h3 className="text-base font-bold text-brand-navy leading-snug">
                      {dealer.name}
                    </h3>
                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`View ${dealer.name} on map`}
                      className="text-brand-accent hover:text-brand-accent-glow transition-colors flex-shrink-0"
                    >
                      <ChevronRight className="size-5" strokeWidth={2} />
                    </a>
                  </div>

                  <div className="space-y-2.5">
                    <div className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                      <MapPin className="size-4 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                      <span>{dealer.city}, {dealer.state}</span>
                    </div>

                    <div className="flex items-start gap-2 text-sm text-gray-600 leading-snug">
                      <Phone className="size-4 text-brand-accent flex-shrink-0 mt-0.5" strokeWidth={1.8} />
                      <a
                        href={`tel:${dealer.phone.replace(/\s/g, "")}`}
                        className="hover:text-brand-accent transition-colors"
                      >
                        {dealer.phone}
                      </a>
                    </div>

                    <a
                      href={mapUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm font-semibold text-brand-accent hover:underline"
                    >
                      <ExternalLink className="size-4 flex-shrink-0" strokeWidth={1.8} />
                      View on Map
                    </a>
                  </div>
                </article>
              );
            })}
          </div>
        ) : (
          <div className="border border-gray-200/90 rounded-xl bg-brand-surface-soft p-8 text-center">
            <p className="text-sm font-semibold text-brand-navy">
              No authorized dealers found for this location.
            </p>
            <p className="text-xs text-gray-500 mt-1">
              Try another state or city, or contact our team for assistance.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
