import React from "react";

const RefundPolicy = () => {
  return (
    <section className="bg-gradient-to-br from-green-50 via-white to-lime-50 py-20">
      <div className="container mx-auto px-4 max-w-5xl">

        {/* HEADER */}
        <div className="text-center mb-14">
          <h1 className="text-5xl font-extrabold text-green-800 mb-4">
            Refund & Cancellation Policy
          </h1>
          <p className="text-lg text-gray-700">
            <strong>Future Life Care & Biotech Pvt. Ltd.</strong> – Returns, Refunds & Order Cancellation Guidelines
          </p>
        </div>

        {/* META INFO */}
        <div className="bg-gradient-to-r from-green-700 to-lime-600 text-white rounded-2xl p-8 shadow-xl mb-12 grid grid-cols-1 md:grid-cols-2 gap-4">
          <p><strong>Effective Date:</strong> 1st December 2025</p>
          <p><strong>Company:</strong> Future Life Care & Biotech Pvt. Ltd.</p>
          <p><strong>Brand:</strong> Snaffel</p>
          <p><strong>Website:</strong> www.flcbiotech.com</p>
        </div>

        <div className="space-y-10">

          <Card title="1. Introduction">
            Customer satisfaction is our priority. This policy explains the conditions
            under which cancellations, returns, replacements, and refunds are processed.
          </Card>

          <Card title="2. Product Return & Replacement Policy">
            <ul className="list-disc ml-6 space-y-1">
              <li>Damaged, defective, or incomplete products (within 7 days)</li>
              <li>Wrong product delivered</li>
              <li>Expired or quality-related issues</li>
            </ul>
            <p className="mt-3 text-lime-100">
              Products must be unused, unopened, and in original packaging.
            </p>
          </Card>

          <Card title="3. Cancellation Policy">
            <ul className="list-disc ml-6 space-y-1">
              <li>Orders can be cancelled only before dispatch</li>
              <li>No cancellation after shipment</li>
              <li>Company may cancel orders due to unavailability or fraud</li>
            </ul>
          </Card>

          <Card title="4. Refund Policy">
            <ul className="list-disc ml-6 space-y-1">
              <li>Refunds processed within 7–10 business days</li>
              <li>Refunds to original payment method</li>
              <li>E-pins & digital wallets are non-refundable</li>
            </ul>
          </Card>

          <Card title="5. Direct Seller / Distributor Transactions">
            No refunds once ID, package, or E-pin is activated.
          </Card>

          <Card title="6. How to Raise a Request">
            📩 info@flcbiotech.com <br />
            📞 9112168221 <br />
            🌐 www.flcbiotech.com
          </Card>

          <Card title="7. Company’s Right to Verify">
            All returned products may be inspected. Fraudulent or incomplete claims
            may be rejected.
          </Card>

          <Card title="8. Policy Updates">
            The Company reserves the right to modify this policy at any time.
          </Card>

          <Card title="9. Contact Us" strong>
            <strong>Future Life Care & Biotech Pvt. Ltd.</strong><br />
            F02/203, Rajgriha, Empire Homes, Ambernath (West) – 421505<br />
            📧 info@flcbiotech.com | 📞 9112168221
          </Card>

        </div>
      </div>
    </section>
  );
};

/* REUSABLE CARD */
const Card = ({ title, children, strong }) => (
  <div className="bg-gradient-to-r from-green-700 to-lime-600 text-white rounded-2xl p-8 shadow-xl">
    <h2 className={`text-2xl font-bold mb-4 ${strong ? "text-3xl" : ""}`}>
      {title}
    </h2>
    <div className="leading-relaxed opacity-95">{children}</div>
  </div>
);

export default RefundPolicy;
