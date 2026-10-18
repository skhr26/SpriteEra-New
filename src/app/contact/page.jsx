import Navbar from "../../components/Navbar";
import PageHero from "../../components/PageHero";
import Footer from "../../components/Footer";
import EnquiryForm from "../../components/EnquiryForm";
import { WhatsAppIcon } from "../../components/Buttons";
import SectionHeading from "../../components/SectionHeading";
import { Phone, Download, ArrowRight } from "lucide-react";
import { contactData } from "../../data/contactData";

export const metadata = {
  title: "Contact Us | Vajra LED",
  description: "Talk to the Vajra LED team for product information, application support and project guidance. Call, WhatsApp or send us an enquiry."
};

const METHOD_ICONS = {
  phone: Phone,
  whatsapp: null,
  download: Download
};

export default function ContactPage() {
  const { hero, contactMethods, formPanel, steps } = contactData;

  return (
    <div className="min-h-screen font-sans bg-white text-gray-900">
      {/* 1. Global Navbar */}
      <Navbar />

      {/* 2. Hero Section (home-page visual language) */}
      <PageHero
        breadcrumbs={[
          { name: "Home", href: "/" },
          { name: "Contact" }
        ]}
        tag={hero.tag}
        title={hero.title}
        titleHighlight={hero.titleHighlight}
        description={hero.description}
        primaryCta={hero.primaryCta}
        secondaryCta={hero.secondaryCta}
        bgImage="/images/hero-bg.png"
        badges={hero.badges}
        minHeight="min-h-[380px] lg:min-h-0 lg:pb-16"
      />

      {/* 3. Contact Methods */}
      <section className="w-full bg-white py-16 md:py-20 px-4 md:px-12">
        <SectionHeading
          label="QUICK CONNECT"
          title="Choose How You'd Like to "
          highlight="Reach Us"
          description="Pick the channel that suits you — every query reaches a real member of our team."
          className="max-w-3xl mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {contactMethods.map((method) => {
            const Icon = METHOD_ICONS[method.icon];
            return (
              <div
                key={method.id}
                className="border border-gray-200/90 rounded-xl p-6 flex flex-col items-start shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300 bg-white"
              >
                {/* Icon bubble */}
                <div className="w-11 h-11 rounded-full bg-brand-light-bubble border border-blue-200/60 text-brand-accent flex items-center justify-center shadow-[0_0px_8px_rgba(0,102,204,0.12)] mb-4">
                  {method.icon === "whatsapp" ? (
                    <WhatsAppIcon className="w-5 h-5 text-brand-accent fill-current" />
                  ) : (
                    Icon && <Icon className="size-5" strokeWidth={1.8} />
                  )}
                </div>

                <h3 className="text-base lg:text-lg font-bold text-brand-navy mb-1.5">
                  {method.title}
                </h3>
                <p className="text-gray-500 text-xs sm:text-[13px] leading-snug mb-5 flex-grow">
                  {method.desc}
                </p>

                <a
                  href={method.cta.href}
                  {...(method.cta.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  {...(method.cta.download ? { download: true } : {})}
                  className="text-brand-blue font-semibold text-sm inline-flex items-center gap-1.5 hover:gap-2.5 transition-all hover:text-brand-blue-hover mt-auto"
                >
                  <span>{method.cta.label}</span>
                  <ArrowRight className="size-5.5" strokeWidth={1.5} />
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* 4. Enquiry Form + What Happens Next */}
      <section className="w-full bg-gray-50 py-16 md:py-20 px-4 md:px-12 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Heading + 3 Steps */}
          <div className="lg:col-span-7 flex flex-col">
            <SectionHeading
              label={formPanel.tag}
              title={formPanel.title}
              highlight={formPanel.titleHighlight}
              description={formPanel.description}
              className="mb-10 max-w-2xl"
            />

            <div className="space-y-4">
              {steps.map((step, idx) => (
                <div
                  key={step.title}
                  className="relative flex items-start gap-4 bg-white border border-gray-200/90 rounded-xl p-5 shadow-[0_0px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_5px_15px_rgb(0,0,0,0.12)] hover:-translate-y-1 transition-all duration-300"
                >
                  {/* Numbered bubble */}
                  <div className="w-9 h-9 rounded-full bg-brand-light-bubble border border-blue-200/60 text-brand-accent flex items-center justify-center flex-shrink-0 font-bold text-sm shadow-[0_0px_8px_rgba(0,102,204,0.12)]">
                    {idx + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-base text-brand-navy mb-1 leading-snug">
                      {step.title}
                    </h3>
                    <p className="text-gray-500 text-xs sm:text-[13px] leading-snug">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Shared Enquiry Form (sticky, same as architect page) */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <EnquiryForm
              title={formPanel.formTitle}
              description={formPanel.formDescription}
              successMessage={formPanel.formSuccessMessage}
            />
          </div>
        </div>
      </section>

      {/* 5. Footer */}
      <Footer />
    </div>
  );
}
