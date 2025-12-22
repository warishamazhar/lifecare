const BusinessOpportunity = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-black mb-4 relative inline-block">
   Why Join Us?
  <span className="absolute left-0 -bottom-2 w-full h-1 bg-primary rounded-full"></span>
</h1>

      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* Card 1 */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-green-600 text-white p-10 shadow-2xl">
          <div className="mb-6 text-4xl">🤝</div>
          <h3 className="text-2xl font-semibold mb-4">
            A Company You Can Trust
          </h3>
          <p className="leading-relaxed opacity-95">
            Future Life Care is not just a company — it is a foundation built on
            trust, transparency, and integrity. Our mission is to bring health,
            security, and stability into every individual’s life.
          </p>
        </div>

        {/* Card 2 */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-green-600 text-white p-10 shadow-2xl">
          <div className="mb-6 text-4xl">🌿</div>
          <h3 className="text-2xl font-semibold mb-4">
            Natural & Innovative Products
          </h3>
          <p className="leading-relaxed opacity-95">
            Our products in Wellness, Agriculture, and Human Care are
            scientifically developed and nature-inspired, improving the
            quality of life for every consumer.
          </p>
        </div>

        {/* Card 3 */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-green-600 text-white p-10 shadow-2xl">
          <div className="mb-6 text-4xl">💰</div>
          <h3 className="text-2xl font-semibold mb-4">
            Rewarding Business Model
          </h3>
          <ul className="list-disc list-inside space-y-2 opacity-95">
            <li>Fair & transparent income module for everyone.</li>
            <li>Minimum package cost & maximum product value.</li>
            <li>Transparent earning system.</li>
            <li>Attractive commissions & bonuses.</li>
            <li>Lifetime income potential.</li>
          </ul>
        </div>

        {/* Card 4 */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-green-600 text-white p-10 shadow-2xl">
          <div className="mb-6 text-4xl">🎓</div>
          <h3 className="text-2xl font-semibold mb-4">
            Training & Mentorship Support
          </h3>
          <ul className="list-disc list-inside space-y-2 opacity-95">
            <li>Right guidance to succeed.</li>
            <li>Regular training programs.</li>
            <li>Leadership development sessions.</li>
            <li>Digital tools & resource access.</li>
            <li>Expert mentorship & 24×7 support.</li>
          </ul>
        </div>

        {/* Card 5 */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-green-600 text-white p-10 shadow-2xl">
          <div className="mb-6 text-4xl">🚀</div>
          <h3 className="text-2xl font-semibold mb-4">
            Personal Growth & Empowerment
          </h3>
          <p className="leading-relaxed opacity-95">
            Empowering individuals to become financially independent,
            confident, and inspiring leaders. Gain income, personal
            development, and recognition.
          </p>
        </div>

        {/* Card 6 */}
        <div className="rounded-3xl bg-gradient-to-br from-green-700 to-green-600 text-white p-10 shadow-2xl">
          <div className="mb-6 text-4xl">🛡️</div>
          <h3 className="text-2xl font-semibold mb-4">
            Secure & Transparent System
          </h3>
          <ul className="list-disc list-inside space-y-2 opacity-95">
            <li>Completely secure payout system.</li>
            <li>Bank transfer with mandatory KYC.</li>
            <li>Admin-approved payouts for safety.</li>
            <li>Clear deduction policy (5% TDS + 10% Admin).</li>
            <li>On-time, reliable payments.</li>
          </ul>
        </div>
      </div>

      {/* Bottom Highlight */}
      <div className="max-w-5xl mx-auto mt-20">
        <div className="rounded-3xl bg-gradient-to-br from-green-800 to-green-700 text-white p-12 text-center shadow-2xl">
          <div className="text-5xl mb-6">🌍</div>
          <h2 className="text-3xl font-bold mb-4">
            Be a Part of a Bigger Vision
          </h2>
          <p className="text-lg opacity-95 mb-6">
            We are creating a Green Future, Healthy Life, and Strong Economy.
            Joining us shapes your future and contributes to society.
          </p>
          <p className="text-lg font-semibold">
            ✅ With Future Life Care, you achieve Health, Income, and
            Confidence — all in one place.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BusinessOpportunity;
