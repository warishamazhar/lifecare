import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  ChevronDown,
  HelpCircle,
} from "lucide-react";

const faqs = [
  {
    section: "ABOUT THE COMPANY",
    items: [
      {
        q: "What is Future Life Care?",
        a: "Future Life Care & Biotech Pvt. Ltd. is a wellness and agriculture-focused company committed to ethical practices, innovation, and long-term sustainability.",
      },
      {
        q: "When was Future Life Care established?",
        a: "The company was established with the vision of promoting natural wellness, sustainable agriculture, and transparent business opportunities.",
      },
      {
        q: "What is the mission and vision of the company?",
        a: "Our mission is to improve quality of life through nature-inspired products while empowering individuals with ethical growth opportunities.",
      },
    ],
  },
  {
    section: "ABOUT PRODUCTS",
    items: [
      {
        q: "What type of products does Future Life Care offer?",
        a: "We offer wellness, health care, personal care, and agriculture products developed with quality, compliance, and sustainability in mind.",
      },
    ],
  },
  {
    section: "LEGAL & TRANSPARENCY",
    items: [
      {
        q: "Is my investment safe with Future Life Care?",
        a: "We operate transparently under applicable laws. Earnings are effort-based, and no guaranteed income or assured returns are promised.",
      },
    ],
  },
  {
    section: "SUPPORT & GROWTH",
    items: [
      {
        q: "How can I contact support?",
        a: "You can reach us via phone, email, or visit our registered office during support hours.",
      },
      {
        q: "Do you provide training and guidance?",
        a: "Yes, we provide regular training, mentorship, and digital resources to support personal and professional growth.",
      },
    ],
  },
];

const Support = () => {
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const toggle = (key: string) => {
    setOpenIndex(openIndex === key ? null : key);
  };

  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">

      {/* HEADER */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-3">
          <span className="text-green-600">✔</span>{" "}
          Future Life Care – <span className="text-green-700">Frequently Asked Questions</span>
        </h1>
        <p className="text-muted-foreground">
          Find answers to common questions about our company, products, and opportunities.
        </p>
      </div>

      {/* FAQ SECTIONS */}
      <div className="space-y-14">
        {faqs.map((section, sIndex) => (
          <div key={sIndex}>
            <h2 className="text-xl font-bold text-green-800 mb-6 border-b pb-2">
              {sIndex + 1}. {section.section}
            </h2>

            <div className="space-y-4">
              {section.items.map((item, iIndex) => {
                const key = `${sIndex}-${iIndex}`;
                const isOpen = openIndex === key;

                return (
                  <div
                    key={key}
                    className="border rounded-xl bg-white shadow-sm"
                  >
                    <button
                      onClick={() => toggle(key)}
                      className="w-full flex justify-between items-center px-6 py-4 text-left font-medium text-gray-800"
                    >
                      {item.q}
                      <ChevronDown
                        className={`h-5 w-5 transition-transform ${
                          isOpen ? "rotate-180 text-green-600" : ""
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="px-6 pb-5 text-sm text-muted-foreground leading-relaxed">
                        {item.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* CONTACT SUPPORT */}
      <div className="mt-20 bg-gradient-to-br from-green-700 to-green-600 rounded-3xl p-10 text-white shadow-2xl">
        <h2 className="text-2xl font-semibold mb-8 flex items-center gap-2">
          <HelpCircle className="h-6 w-6" />
          Contact Support
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="flex gap-4">
            <MapPin />
            <div>
              <p className="font-semibold">Address</p>
              <p className="text-white/90 text-sm">Maharashtra, India</p>
            </div>
          </div>

          <div className="flex gap-4">
            <Phone />
            <div>
              <p className="font-semibold">Phone</p>
              <a
                href="tel:+919112168221"
                className="text-white/90 text-sm hover:underline"
              >
                +91 91121 68221
              </a>
            </div>
          </div>

          <div className="flex gap-4">
            <Mail />
            <div>
              <p className="font-semibold">Email</p>
              <a
                href="mailto:flcbiotech@gmail.com"
                className="text-white/90 text-sm hover:underline"
              >
                flcbiotech@gmail.com
              </a>
            </div>
          </div>
        </div>

        <p className="text-sm text-white/90">
          Support Hours: Monday – Saturday | 10:00 AM – 6:00 PM (IST)
        </p>

        <p className="text-xs text-white/80 mt-6 border-t border-white/30 pt-4">
          Support assistance is provided for guidance purposes only. Income,
          growth, and success depend on individual effort and compliance with
          company policies. No guarantees are provided.
        </p>
      </div>
    </div>
  );
};

export default Support;
