import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

import cardiodelight from "../assets/cardiodelight.png";
import greengold from "../assets/greengold.png";
import GreenVitality from "../assets/GreenVitality.png";
import painfree from "../assets/painfree.png";
import sugarshield from "../assets/sugarshield.png";
import BioActivator from "../assets/BioActivator.png";
import FruitingFormulation from "../assets/FruitingFormulation.png";
import GreenBioShield from "../assets/GreenBioShield.png";
import SoilSolution from "../assets/SoilSolution.png";
import Staminex from "../assets/Staminex.png";

const products = [
  {
    id: 1,
    name: "Cardio Delight",
    price: 1299,
    image: cardiodelight,
    description: "Supports heart health and overall cardiovascular wellness.",
    category: "wellness",
  },
  {
    id: 2,
    name: "Green Gold",
    price: 999,
    image: greengold,
    description: "A powerful blend for daily nutrition and vitality.",
    category: "wellness",
  },
  {
    id: 3,
    name: "Green Vitality",
    price: 1199,
    image: GreenVitality,
    description: "Boosts immunity and promotes natural energy.",
    category: "wellness",
  },
  {
    id: 4,
    name: "Pain Free",
    price: 899,
    image: painfree,
    description: "Helps relieve discomfort and supports joint health.",
    category: "wellness",
  },
  {
    id: 5,
    name: "Sugar Shield",
    price: 1099,
    image: sugarshield,
    description: "Supports healthy sugar metabolism and balance.",
    category: "wellness",
  },
  {
    id: 6,
    name: "Bio Activator",
    price: 1499,
    image: BioActivator,
    description: "Enhances soil fertility and plant growth naturally.",
    category: "biomagnetics",
  },
  {
    id: 7,
    name: "Fruiting Formulation",
    price: 1399,
    image: FruitingFormulation,
    description: "Improves flowering and fruit development.",
    category: "agriculture",
  },
  {
    id: 8,
    name: "Green Bio Shield",
    price: 1299,
    image: GreenBioShield,
    description: "Protects crops against environmental stress.",
    category: "agriculture",
  },
  {
    id: 9,
    name: "Soil Solution",
    price: 1199,
    image: SoilSolution,
    description: "Restores soil health and microbial balance.",
    category: "agriculture",
  },
  {
    id: 10,
    name: "Staminex",
    price: 1599,
    image: Staminex,
    description: "Supports stamina, strength, and endurance.",
    category: "biomagnetics",
  },
];

const productTabs = [
  { key: "wellness", label: "Wellness Products" },
  { key: "agriculture", label: "Organic Agriculture Products" },
  { key: "biomagnetics", label: "Biomagnetics" },
  { key: "cosmetics", label: "Herbal Cosmetics", comingSoon: true },
  { key: "electronics", label: "Electronics", comingSoon: true },
  { key: "upcoming", label: "Upcoming Products", comingSoon: true },
];

const OurProducts = () => {
  const [activeTab, setActiveTab] = useState("wellness");

  const activeTabMeta = productTabs.find((t) => t.key === activeTab);
  const isComingSoon = activeTabMeta?.comingSoon;

  const filteredProducts = products.filter(
    (p) => p.category === activeTab
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">

      {/* HEADER */}
      <section className="py-16 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl opacity-90">
            Innovation-driven solutions across wellness and agriculture
          </p>
        </div>
      </section>

      {/* PRODUCT BUTTONS */}
      <section className="container mx-auto px-4 py-12">
        <div className="flex flex-wrap justify-center gap-4">
          {productTabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-6 py-3 rounded-full font-semibold transition
                ${
                  activeTab === tab.key
                    ? "bg-emerald-700 text-white"
                    : tab.comingSoon
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-white border border-emerald-600 text-emerald-700 hover:bg-emerald-50"
                }`}
            >
              {tab.label}
              {tab.comingSoon && <span className="ml-2 text-xs">(Soon)</span>}
            </button>
          ))}
        </div>
      </section>

      {/* CONTENT */}
      <section className="container mx-auto px-4 py-16">
        {isComingSoon ? (
          <div className="text-center py-20">
            <h2 className="text-4xl font-bold text-emerald-700 mb-4">
              Coming Soon 🚀
            </h2>
            <p className="text-lg text-gray-600 max-w-xl mx-auto">
              We are working on exciting new products in this category.
              Stay tuned for updates!
            </p>
          </div>
        ) : (
          <>
            <h2 className="text-4xl font-bold text-center mb-12">
              Product Range
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {filteredProducts.map((product) => (
                <Card
                  key={product.id}
                  className="hover:shadow-xl transition rounded-2xl"
                >
                  <CardContent className="p-4 flex flex-col h-full">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-48 w-full object-contain mb-4"
                    />

                    <h3 className="text-lg font-semibold mb-1">
                      {product.name}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-3">
                      {product.description}
                    </p>

                    <p className="text-lg font-bold mt-auto text-emerald-700">
                      ₹{product.price}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </section>
    </div>
  );
};

export default OurProducts;
