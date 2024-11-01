import React from "react";
import PricingCard from "./PricingCard";

const priceData = [
  {
    id: 1,
    price: 8,
    pricePlane: "One Day Training",
  },
  {
    id: 2,
    price: 49,
    pricePlane: "One Month Training",
  },
  {
    id: 3,
    price: 65,
    pricePlane: "One Year Training",
  },
];

export default function Pricing() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-slate-950 text-white py-8">
      <h3
        data-aos="fade-up"
        className="text-center text-lg font-bold text-orange-500 uppercase tracking-[4px]"
      >
        Pricing Tables
      </h3>
      <h1 data-aos="fade-up" className="text-center text-4xl font-bold pt-3">
        Membership Plans
      </h1>
      <div
        data-aos="fade-up"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8"
      >
        {priceData.map((e) => (
          <PricingCard key={e.id} price={e.price} pricePlane={e.pricePlane} />
        ))}
      </div>
    </div>
  );
}
