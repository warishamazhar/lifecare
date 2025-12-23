import React from "react";

const Disclaimer = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-lime-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            Website Disclaimer
          </h1>
          <p className="text-lg text-gray-700">
            <strong>Future Life Care & Biotech Pvt. Ltd.</strong> – Important Legal Disclaimer
          </p>
        </div>

        <div className="space-y-10">

          <Card title="1. General Information">
            Information on this website is for general purposes only. We do not
            guarantee accuracy, completeness, or reliability.
          </Card>

          <Card title="2. No Medical Advice">
            Products are not intended to diagnose, treat, cure, or prevent disease.
            Always consult a qualified medical professional.
          </Card>

          <Card title="3. Product & Performance Disclaimer">
            Results may vary. No guaranteed outcomes are promised.
          </Card>

          <Card title="4. Business Opportunity & Income Disclaimer">
            No income or success is guaranteed. Earnings depend on individual effort.
          </Card>

          <Card title="5. Third-Party Links">
            We are not responsible for external websites or their content.
          </Card>

          <Card title="6. Limitation of Liability">
            The Company is not liable for losses, interruptions, or misuse.
          </Card>

          <Card title="7. Copyright & Intellectual Property">
            All content belongs to Future Life Care & Biotech Pvt. Ltd.
          </Card>

          <Card title="8. Policy Updates">
            The Company may update this Disclaimer without notice.
          </Card>

          <Card title="9. Contact Us" strong>
            📧 info@flcbiotech.com <br />
            📞 9112168221 <br />
            🌐 www.flcbiotech.com
          </Card>

        </div>
      </div>
    </section>
  );
};

const Card = ({ title, children, strong }) => (
  <div className="bg-gradient-to-r from-green-700 to-lime-600 text-white rounded-2xl p-8 shadow-xl">
    <h2 className={`text-2xl font-bold mb-4 ${strong ? "text-3xl" : ""}`}>
      {title}
    </h2>
    <div className="leading-relaxed opacity-95">{children}</div>
  </div>
);

export default Disclaimer;
