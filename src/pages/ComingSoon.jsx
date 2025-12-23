import React from "react";

const ComingSoon = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-600 via-emerald-600 to-lime-500 px-4">
      <div className="bg-white rounded-3xl shadow-2xl max-w-lg w-full p-10 text-center">
        <h1 className="text-4xl font-extrabold text-green-700 mb-4">
          Coming Soon 🌿
        </h1>

        <p className="text-gray-600 text-lg mb-6">
          We are working hard to bring this category to you.
          Stay tuned for something amazing!
        </p>

        <p className="text-sm text-gray-500">
          Herbal Cosmetics & Power Saver products will be launching shortly.
        </p>
      </div>
    </div>
  );
};

export default ComingSoon;
