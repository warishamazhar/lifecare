import React from 'react'
import {
  Shield,
  Award,
  Heart,
} from "lucide-react";


const HighlightsBar = () => {
    const highlights = [
        { icon: Shield, text: "30 Days Money Back Guarantee" },
        { icon: Award, text: "World-Class Wellness Products" },
        { icon: Heart, text: "Health, Wealth & Wellness" },
      ];
  return (
     <section className="bg-primary py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-center gap-3 text-primary-foreground animate-slide-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <item.icon className="h-6 w-6" />
                <span className="font-medium">{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default HighlightsBar