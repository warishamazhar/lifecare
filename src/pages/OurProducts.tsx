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
  },
  {
    id: 2,
    name: "Green Gold",
    price: 999,
    image: greengold,
    description: "A powerful blend for daily nutrition and vitality.",
  },
  {
    id: 3,
    name: "Green Vitality",
    price: 1199,
    image: GreenVitality,
    description: "Boosts immunity and promotes natural energy.",
  },
  {
    id: 4,
    name: "Pain Free",
    price: 899,
    image: painfree,
    description: "Helps relieve discomfort and supports joint health.",
  },
  {
    id: 5,
    name: "Sugar Shield",
    price: 1099,
    image: sugarshield,
    description: "Supports healthy sugar metabolism and balance.",
  },
  {
    id: 6,
    name: "Bio Activator",
    price: 1499,
    image: BioActivator,
    description: "Enhances soil fertility and plant growth naturally.",
  },
  {
    id: 7,
    name: "Fruiting Formulation",
    price: 1399,
    image: FruitingFormulation,
    description: "Improves flowering and fruit development.",
  },
  {
    id: 8,
    name: "Green Bio Shield",
    price: 1299,
    image: GreenBioShield,
    description: "Protects crops against environmental stress.",
  },
  {
    id: 9,
    name: "Soil Solution",
    price: 1199,
    image: SoilSolution,
    description: "Restores soil health and microbial balance.",
  },
  {
    id: 10,
    name: "Staminex",
    price: 1599,
    image: Staminex,
    description: "Supports stamina, strength, and endurance.",
  },
];

const OurProducts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 via-white to-emerald-50">

      {/* 🌿 PREMIUM PRODUCTS SECTION (MOVED HERE) */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-5xl font-bold mb-6">Premium Products</h1>

          <p className="text-xl opacity-90 mb-8">
            Innovation-driven solutions across wellness and agriculture—built
            on quality, compliance, and long-term value.
          </p>

          <ul className="space-y-3 text-left text-emerald-50 max-w-3xl mx-auto">
            <li>• Wellness and agriculture solutions developed with care and responsibility</li>
            <li>• Science-backed formulations with consistent quality standards</li>
            <li>• Products designed for long-term wellbeing and sustainability</li>
            <li>• Continuous innovation aligned with regulatory frameworks</li>
          </ul>

          <p className="text-sm opacity-80 mt-8">
            Product outcomes may vary based on usage and individual conditions.
          </p>
        </div>
      </section>

      {/* 🧴 PRODUCTS GRID */}
      <section className="container mx-auto px-4 py-20">
        <h2 className="text-4xl font-bold text-center mb-12">
          Our Product Range
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
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
      </section>
    </div>
  );
};

export default OurProducts;
