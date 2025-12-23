import React from "react";
import { useParams } from "react-router-dom";

const LearnMore = () => {
  const { type } = useParams();

  const content = {
    earning: {
      title: "Multiple Earning Sources",
      body: (
        <>
          <p>
            Our business model offers multiple earning opportunities through
            product-based activities and performance-driven programs.
          </p>
          <ul>
            <li>Direct referral-based incentives</li>
            <li>Team performance–linked benefits</li>
            <li>Matching and productivity-based rewards</li>
            <li>Product repurchase–driven advantages</li>
            <li>Leadership recognition and rank-based rewards</li>
            <li>Promotional and performance-based programs</li>
          </ul>
          <p className="text-sm text-gray-500">
            All earnings are performance-based. No income is guaranteed.
          </p>
        </>
      ),
    },
    team: {
      title: "Team Performance Bonuses",
      body: (
        <>
          <p>
            Designed to reward teamwork, consistency, and network productivity.
          </p>
          <ul>
            <li>Bonuses based on team performance</li>
            <li>Eligibility linked to participation</li>
            <li>Balanced and sustainable growth</li>
            <li>Encourages leadership & mentoring</li>
            <li>Subject to company policies</li>
          </ul>
          <p className="text-sm text-gray-500">
            No fixed or guaranteed bonuses assured.
          </p>
        </>
      ),
    },
    products: {
      title: "Premium Products",
      body: (
        <>
          <p>
            Innovation-driven solutions across wellness and agriculture.
          </p>
          <ul>
            <li>Quality-focused wellness products</li>
            <li>Research-driven formulations</li>
            <li>Sustainable & future-ready solutions</li>
            <li>Compliance-led product development</li>
          </ul>
          <p className="text-sm text-gray-500">
            All offerings follow regulatory and company policies.
          </p>
        </>
      ),
    },
  };

  const section = content[type];

  if (!section) return null;

  return (
    <section className="py-28 bg-slate-50">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-12">
        <h1 className="text-4xl font-extrabold mb-6">{section.title}</h1>
        <div className="text-gray-700 space-y-4 leading-relaxed">
          {section.body}
        </div>
      </div>
    </section>
  );
};

export default LearnMore;
