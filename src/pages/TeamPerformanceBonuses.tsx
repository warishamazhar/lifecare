const TeamPerformanceBonuses = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      {/* Heading */}
      <h1 className="text-4xl font-bold mb-6 text-black">
        Team <span className="text-primary">Performance Bonuses</span>
      </h1>

      {/* Intro */}
      <p className="text-muted-foreground leading-relaxed mb-8">
        Team Performance Bonuses are designed to reward consistent effort,
        teamwork, and overall network productivity. These bonuses are linked
        to collective performance parameters as defined in the company’s
        compensation structure.
      </p>

      {/* Card */}
      <div className="bg-gradient-to-br from-green-700 via-green-600 to-yellow-500 rounded-2xl shadow-xl p-8 text-white">
        <ul className="space-y-3 list-disc list-inside text-white/95">
          <li>Bonuses based on overall team performance and activity</li>
          <li>Eligibility linked to active participation and business volume generation</li>
          <li>Rewards aligned with balanced team growth and sustainability</li>
          <li>Performance evaluated as per predefined company criteria</li>
          <li>Encourages leadership, mentoring, and long-term team development</li>
          <li>Bonus structure subject to company policies and periodic updates</li>
        </ul>

        {/* Disclaimer */}
        <p className="text-xs text-white/80 mt-6 leading-relaxed border-t border-white/30 pt-4">
          All bonuses are performance-based and depend on individual effort,
          team activity, and compliance with company guidelines.
          No fixed or guaranteed income is assured.
        </p>
      </div>
    </div>
  );
};

export default TeamPerformanceBonuses;
