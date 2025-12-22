const MultipleEarningSources = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-black">
        Multiple <span className="text-primary">Earning Sources</span>
      </h1>

      {/* Intro */}
      <p className="text-muted-foreground leading-relaxed mb-8">
        Our business model offers multiple earning opportunities through
        product-based activities and performance-driven programs, designed
        for long-term growth and sustainability.
      </p>

      {/* Card */}
      <div className="bg-gradient-to-br from-emerald-700 via-emerald-600 to-lime-500 rounded-2xl shadow-xl p-8 text-white">
        <ul className="space-y-3 list-disc list-inside text-white/95">
          <li>Direct referral-based incentives</li>
          <li>Team performance–linked benefits</li>
          <li>Matching and productivity-based rewards</li>
          <li>Product repurchase–driven advantages</li>
          <li>Leadership recognition and rank-based rewards</li>
          <li>Periodic promotional and performance-based programs</li>
        </ul>

        {/* Disclaimer */}
        <p className="text-xs text-white/80 mt-6 leading-relaxed border-t border-white/30 pt-4">
          All earnings are performance-based and subject to company policies.
          No income or returns are guaranteed.
        </p>
      </div>
    </div>
  );
};

export default MultipleEarningSources;
