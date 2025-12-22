const VisionMission = () => {
  return (
    <div className="container mx-auto px-4 py-20 max-w-5xl">
      <h1 className="text-4xl font-bold mb-10 text-center">
        Vision & Mission
      </h1>

      {/* Vision Section */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">🌍 Vision</h2>
        <p className="text-muted-foreground leading-relaxed">
          To become a trusted, purpose-led organization that advances wellbeing,
          sustainable agriculture, and environmental responsibility through
          science-backed innovation, ethical governance, and long-term value
          creation. We envision a future where individuals, communities, and
          ecosystems grow together—supported by transparent systems, responsible
          technologies, and organizations that operate with integrity and
          discipline.
        </p>
      </section>

      {/* Mission Section */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">🎯 Mission</h2>

        <p className="text-muted-foreground leading-relaxed mb-6">
          Our mission is to responsibly develop and deliver high-quality wellness
          and agricultural solutions that support general wellbeing, sustainable
          farming practices, and environmental balance—while strictly adhering
          to legal, regulatory, and ethical standards.
        </p>

        <ul className="list-disc pl-6 space-y-3 text-muted-foreground">
          <li>Conducting responsible research and continuous innovation</li>
          <li>Maintaining transparency, compliance, and accountability across all operations</li>
          <li>
            Building a values-driven growth ecosystem focused on learning,
            leadership, and ethical collaboration
          </li>
          <li>
            Empowering individuals through education and participation, without
            unrealistic claims or guaranteed outcomes
          </li>
          <li>
            Creating sustainable, long-term value for individuals, communities,
            and the environment
          </li>
        </ul>
      </section>
    </div>
  );
};

export default VisionMission;
