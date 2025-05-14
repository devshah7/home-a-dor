import React from "react";

const About = () => {
  return (
    <section className="py-20 bg-gray-50 min-h-screen flex flex-col justify-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-serif font-bold text-gray-900 mb-8">
            Our Story
          </h2>
          <p className="text-gray-600 leading-relaxed mb-6">
            Welcome to Home A D'or, where every piece of décor tells a story and
            every home becomes a canvas for self-expression. At Home A D'or, we
            see decor as more than just design—it's a prescription for
            creativity.
          </p>
          <p className="text-gray-600 leading-relaxed mb-6">
            Founded on the belief that your living space should be as unique as
            you are, we have dedicated ourselves to curating an exceptional
            collection of home décor that balances timeless elegance with modern
            flair.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Sustainability is also a cornerstone of our philosophy. By
            partnering with eco-conscious suppliers and embracing ethical
            production practices, we aim to offer décor that is as responsible
            as it is beautiful.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
