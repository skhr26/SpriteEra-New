"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useMotionValue } from "framer-motion";
import { productsData } from "../../data/homeData";
import SectionHeader from "../shared/SectionHeader";
import ProductCard from "../shared/ProductCard";
import CarouselNavButtons from "../shared/CarouselNavButtons";

export default function FeaturedProducts() {
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const [maxScroll, setMaxScroll] = useState(0);
  const [positionX, setPositionX] = useState(0);
  const x = useMotionValue(0);

  // Measure carousel track bounds dynamically on resize and mount
  useEffect(() => {
    const updateBounds = () => {
      if (containerRef.current && trackRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;
        const excess = Math.max(0, trackWidth - containerWidth);
        setMaxScroll(excess);
      }
    };

    updateBounds();
    window.addEventListener("resize", updateBounds);
    return () => window.removeEventListener("resize", updateBounds);
  }, []);

  // Smooth slide step triggered by left/right arrow buttons
  const handleSlide = (direction) => {
    if (!containerRef.current || !trackRef.current) return;
    const step = containerRef.current.offsetWidth * 0.65;

    setPositionX((prev) => {
      let target = direction === "right" ? prev - step : prev + step;
      // Clamp within scroll bounds [ -maxScroll, 0 ]
      if (target > 0) target = 0;
      if (target < -maxScroll) target = -maxScroll;
      return target;
    });
  };

  return (
    <section className="py-16 md:py-20 px-4 md:px-12 max-w-7xl mx-auto border-t border-gray-100">
      <SectionHeader
        label="FEATURED PRODUCTS"
        title="Popular"
        highlight="Products Across Applications"
        actionText="View All Products"
        actionHref="/products"
      >
        <CarouselNavButtons
          onPrev={() => handleSlide("left")}
          onNext={() => handleSlide("right")}
          prevLabel="Previous Products"
          nextLabel="Next Products"
        />
      </SectionHeader>

      {/* Overflow boundary wrapper */}
      <div ref={containerRef} className="overflow-hidden pt-2 pb-6 -mx-2 px-2">
        {/* Framer Motion physics-enabled drag & slide track */}
        <motion.div
          ref={trackRef}
          className="flex gap-5 cursor-grab active:cursor-grabbing"
          drag="x"
          dragConstraints={{ left: -maxScroll, right: 0 }}
          dragElastic={0.08}
          animate={{ x: positionX }}
          transition={{ type: "spring", stiffness: 260, damping: 28, mass: 0.8 }}
          onDragEnd={(_, info) => {
            setPositionX(Math.max(-maxScroll, Math.min(0, x.get() + info.velocity.x * 0.15)));
          }}
          style={{ x }}
        >
          {productsData.map((prod) => (
            <motion.div
              key={prod.id || prod.title}
              className="w-[calc(50%-10px)] sm:w-[calc(33.333%-14px)] md:w-[calc(25%-15px)] lg:w-[calc(16.666%-17px)] flex-shrink-0 select-none"
              whileHover={{ y: -4 }}
              transition={{ duration: 0.2 }}
            >
              <ProductCard
                title={prod.title}
                desc={prod.desc}
                imageUrl={prod.imageUrl}
                link={prod.link}
                buttonText="View Product"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
