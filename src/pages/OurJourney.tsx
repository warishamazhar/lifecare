const OurJourney = () => {
  return (
    <div className="container mx-auto px-4 py-20">
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-primary mb-3">
          Join Our Journey
        </h1>
        <p className="text-lg text-muted-foreground">
          Be a Part of the Change. Be a Part of Snaffel.
        </p>
      </div>

      {/* Green Card */}
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl bg-gradient-to-br from-green-700 via-green-600 to-green-500 text-white p-10 shadow-2xl">
          <p className="text-lg leading-relaxed mb-6">
            At <strong>Future Life Care & Biotech Pvt. Ltd.</strong>, we believe
            that everyone deserves the opportunity to live a healthier,
            happier, and more meaningful life. Through our brand{" "}
            <strong>Snaffel</strong>, we are building a community inspired by
            nature, driven by innovation, and united by purpose.
          </p>

          <p className="text-lg leading-relaxed mb-6">
            Join us on our mission to create a healthier and more sustainable
            tomorrow — one where wellness becomes a way of life, agriculture
            thrives in harmony with nature, and every individual finds the power
            to grow, lead, and inspire.
          </p>

          <p className="text-lg leading-relaxed">
            Explore our range of <strong>Snaffel products</strong>, embrace the
            promise of natural living, and walk with us on this journey toward a
            better, brighter, and more balanced world.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurJourney;
