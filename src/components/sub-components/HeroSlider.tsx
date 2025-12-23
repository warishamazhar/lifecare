import { useState, useEffect, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
  Leaf,
  Heart,
  Zap,
  ShieldCheck,
  Activity,
  Sprout,
  Apple,
  Sparkles,
  ArrowRight,
} from "lucide-react";

// ✅ Product Images
import cardiodelight from "../../assets/cardiodelight.png";
import greengold from "../../assets/greengold.png";
import GreenVitality from "../../assets/GreenVitality.png";
import painfree from "../../assets/painfree.png";
import sugarshield from "../../assets/sugarshield.png";
import BioActivator from "../../assets/BioActivator.png";
import FruitingFormulation from "../../assets/FruitingFormulation.png";
import GreenBioShield from "../../assets/GreenBioShield.png";
import SoilSolution from "../../assets/SoilSolution.png";
import Staminex from "../../assets/Staminex.png";

interface Slide {
  id: number;
  title: string;
  subtitle: string;
  content: string;
  description: string;
  bgColor: string;
  accentColor: string;
  icon: ReactNode;
  features: string[];
  image: string;
}

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const slides: Slide[] = [
    {
      id: 1,
      title: "Cardio Delight",
      subtitle: "Heart Health Formula",
      content: "Strong Heart, Healthy Life",
      description:
        "Supports healthy blood circulation and strengthens your heart naturally with Ayurvedic ingredients.",
      bgColor: "from-red-900 via-rose-800 to-red-700",
      accentColor: "text-red-300",
      icon: <Heart className="w-16 h-16" />,
      features: ["Heart Support", "Blood Circulation", "Ayurvedic Care"],
      image: cardiodelight,
    },
    {
      id: 2,
      title: "Green Gold",
      subtitle: "Daily Wellness Supplement",
      content: "Nature’s Power Boost",
      description:
        "Enhance immunity and daily energy with a rich blend of green nutrients.",
      bgColor: "from-green-900 via-emerald-800 to-green-700",
      accentColor: "text-emerald-300",
      icon: <Leaf className="w-16 h-16" />,
      features: ["Immunity Boost", "Daily Nutrition", "Herbal Blend"],
      image: greengold,
    },
    {
      id: 3,
      title: "Green Vitality",
      subtitle: "Complete Body Nutrition",
      content: "Fuel Your Vitality",
      description:
        "Improves stamina, metabolism, and overall wellness for an active lifestyle.",
      bgColor: "from-emerald-900 via-green-800 to-emerald-700",
      accentColor: "text-lime-300",
      icon: <Zap className="w-16 h-16" />,
      features: ["Energy Boost", "Metabolism", "Full Body Support"],
      image: GreenVitality,
    },
    {
      id: 4,
      title: "Pain Free",
      subtitle: "Joint & Muscle Care",
      content: "Move Without Pain",
      description:
        "Relieves joint and muscle discomfort naturally and improves mobility.",
      bgColor: "from-slate-900 via-gray-800 to-slate-700",
      accentColor: "text-gray-300",
      icon: <Activity className="w-16 h-16" />,
      features: ["Joint Relief", "Muscle Support", "Natural Formula"],
      image: painfree,
    },
    {
      id: 5,
      title: "Sugar Shield",
      subtitle: "Blood Sugar Support",
      content: "Balance Your Sugar",
      description:
        "Helps maintain healthy blood sugar levels with trusted Ayurvedic herbs.",
      bgColor: "from-indigo-900 via-blue-800 to-indigo-700",
      accentColor: "text-indigo-300",
      icon: <ShieldCheck className="w-16 h-16" />,
      features: ["Sugar Control", "Metabolic Health", "Herbal Support"],
      image: sugarshield,
    },
    {
      id: 6,
      title: "Bio Activator",
      subtitle: "Cellular Health Booster",
      content: "Activate Inner Strength",
      description:
        "Improves nutrient absorption and boosts cellular activity naturally.",
      bgColor: "from-cyan-900 via-teal-800 to-cyan-700",
      accentColor: "text-cyan-300",
      icon: <Sparkles className="w-16 h-16" />,
      features: ["Cell Activation", "Better Absorption", "Vital Energy"],
      image: BioActivator,
    },
    {
      id: 7,
      title: "Fruiting Formulation",
      subtitle: "Plant Growth Enhancer",
      content: "Boost Natural Yield",
      description:
        "Enhances flowering and fruiting for healthier plant growth.",
      bgColor: "from-lime-900 via-green-800 to-lime-700",
      accentColor: "text-lime-300",
      icon: <Apple className="w-16 h-16" />,
      features: ["Higher Yield", "Plant Nutrition", "Eco Friendly"],
      image: FruitingFormulation,
    },
    {
      id: 8,
      title: "Green Bio Shield",
      subtitle: "Natural Protection Formula",
      content: "Protect Naturally",
      description:
        "Provides natural defense and protection for plants and soil health.",
      bgColor: "from-green-900 via-emerald-800 to-green-700",
      accentColor: "text-green-300",
      icon: <ShieldCheck className="w-16 h-16" />,
      features: ["Plant Protection", "Bio Formula", "Safe & Natural"],
      image: GreenBioShield,
    },
    {
      id: 9,
      title: "Soil Solution",
      subtitle: "Soil Health Booster",
      content: "Revive Your Soil",
      description:
        "Improves soil fertility and enhances crop productivity naturally.",
      bgColor: "from-amber-900 via-yellow-800 to-amber-700",
      accentColor: "text-yellow-300",
      icon: <Sprout className="w-16 h-16" />,
      features: ["Soil Nutrition", "Better Roots", "Organic Growth"],
      image: SoilSolution,
    },
    {
      id: 10,
      title: "Staminex",
      subtitle: "Energy & Strength Formula",
      content: "Power Your Performance",
      description:
        "Boosts stamina, strength, and endurance for daily performance.",
      bgColor: "from-orange-900 via-amber-800 to-orange-700",
      accentColor: "text-orange-300",
      icon: <Zap className="w-16 h-16" />,
      features: ["High Stamina", "Strength Boost", "Natural Energy"],
      image: Staminex,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, slides.length]);

  return (
    <div className="relative w-full h-[48vh] min-h-[320px] overflow-hidden shadow-2xl max-sm:h-[70vh]">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -200 }}
          transition={{ duration: 0.6 }}
          className={`absolute inset-0 bg-gradient-to-br ${slides[currentSlide].bgColor}`}
        >
          <div
  className="absolute inset-0 bg-contain bg-right bg-no-repeat opacity-80"
  style={{ backgroundImage: `url(${slides[currentSlide].image})` }}
/>

          <div className="absolute inset-0 bg-black/60" />

          <div className="relative h-full flex items-center">
            <div className="container mx-auto px-6 text-white space-y-5">
              <h1 className="text-4xl md:text-6xl font-bold">
                {slides[currentSlide].title}
              </h1>
              <h2 className="text-2xl font-semibold text-emerald-300">
                {slides[currentSlide].content}
              </h2>
              <p className="max-w-2xl text-white/90">
                {slides[currentSlide].description}
              </p>

              <div className="flex gap-3 flex-wrap">
                {slides[currentSlide].features.map((f, i) => (
                  <span
                    key={i}
                    className="bg-white/20 px-4 py-2 rounded-full text-sm"
                  >
                    {f}
                  </span>
                ))}
              </div>

              <button className="mt-4 bg-emerald-500 hover:bg-emerald-600 px-6 py-3 rounded-full font-semibold flex items-center gap-2">
                Buy Now <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full"
      >
        <ChevronLeft />
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 p-3 rounded-full"
      >
        <ChevronRight />
      </button>
    </div>
  );
};

export default HeroSlider;
