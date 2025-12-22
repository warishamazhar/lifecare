import React from "react";
import { Sparkles, Quote } from "lucide-react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Ramesh Patil",
    role: "Community Member",
    message:
      "Being part of this community has helped me focus on wellness, discipline, and personal growth. The environment is supportive and value-driven.",
  },
  {
    name: "Anita Sharma",
    role: "Wellness Advocate",
    message:
      "I appreciate the emphasis on quality products, ethical practices, and long-term vision. It feels good to be associated with a responsible organization.",
  },
  {
    name: "Suresh Kulkarni",
    role: "Agriculture Partner",
    message:
      "The guidance and knowledge shared within the community has been helpful in adopting better, sustainable farming practices.",
  },
  {
    name: "Priya Deshmukh",
    role: "Independent Member",
    message:
      "What stands out is the focus on learning, consistency, and teamwork rather than shortcuts. It’s a positive and motivating space.",
  },
  {
    name: "Mahesh Jadhav",
    role: "Community Leader",
    message:
      "Leadership here is about responsibility, mentoring, and setting the right example. The culture promotes steady and meaningful progress.",
  },
];

const CTASection = () => {
  return (
    <section className="relative py-24 bg-gradient-to-br from-emerald-900 via-green-800 to-teal-900 text-white overflow-hidden">
      
      {/* Soft Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
      <div className="absolute top-10 left-10 w-32 h-32 bg-emerald-400/20 rounded-full blur-2xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-teal-400/15 rounded-full blur-2xl animate-pulse delay-1000"></div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-100 text-sm font-medium mb-6 backdrop-blur-sm">
            <Sparkles className="h-4 w-4" />
            Community Voices
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            What Our{" "}
            <span className="bg-gradient-to-r from-emerald-300 to-teal-200 bg-clip-text text-transparent">
              Community
            </span>{" "}
            Says
          </h2>

          <p className="text-lg md:text-xl text-emerald-100/90 max-w-3xl mx-auto">
            Experiences shared by members and leaders who value wellness,
            responsibility, learning, and long-term growth.
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="overflow-hidden relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 40,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 shadow-lg"
              >
                <Quote className="h-6 w-6 text-emerald-300 mb-4" />
                <p className="text-sm text-emerald-50/90 mb-4 leading-relaxed">
                  {testimonial.message}
                </p>
                <div className="border-t border-white/20 pt-3">
                  <p className="font-semibold text-white text-sm">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-emerald-200/80">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Compliance Note */}
        <p className="text-center text-xs text-emerald-200/70 max-w-3xl mx-auto mt-12 leading-relaxed">
          Testimonials reflect individual experiences and perspectives. They do
          not represent guaranteed outcomes. Participation and results vary
          based on individual effort, learning, and adherence to company
          policies.
        </p>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-green-900/60 to-transparent"></div>
    </section>
  );
};

export default CTASection;
