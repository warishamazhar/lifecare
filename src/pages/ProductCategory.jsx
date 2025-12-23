import { Card, CardContent } from "@/components/ui/card";

// 🔁 USE YOUR SAME PRODUCTS ARRAY
import cardiodelight from "../assets/cardiodelight.png";
import greengold from "../assets/greengold.png";
import GreenVitality from "../assets/GreenVitality.png";
import painfree from "../assets/painfree.png";
import sugarshield from "../assets/sugarshield.png";

const products = [
  {
    name: "Cardio Delight",
    image: cardiodelight,
    description: "Supports heart health",
    category: "wellness",
  },
  {
    name: "Green Gold",
    image: greengold,
    description: "Daily nutrition & vitality",
    category: "wellness",
  },
  {
    name: "Green Vitality",
    image: GreenVitality,
    description: "Boosts immunity",
    category: "wellness",
  },
  {
    name: "Pain Free",
    image: painfree,
    description: "Joint & pain relief",
    category: "biomagnetics",
  },
  {
    name: "Sugar Shield",
    image: sugarshield,
    description: "Sugar balance support",
    category: "biomagnetics",
  },
];

const ProductCategory = ({ category }) => {
  const filtered = products.filter(p => p.category === category);

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4">

        <h2 className="text-4xl font-bold text-center mb-12 capitalize">
          {category} Products
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filtered.map((product, index) => (
            <Card key={index} className="rounded-2xl shadow-lg">
              <CardContent className="p-4 text-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-40 mx-auto mb-4 object-contain"
                />
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-sm text-gray-600">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

      </div>
    </div>
  );
};

export default ProductCategory;
