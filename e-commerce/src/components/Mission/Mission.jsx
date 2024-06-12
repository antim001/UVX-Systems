import React from 'react';

const Mission = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600 text-lg">
            Our mission is to provide high-quality laboratory equipment and educational models that
            enhance the learning and research experience for students and professionals alike.
          </p>
        </div>
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2917/2917991.png"
                  alt="Quality"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Quality</h3>
              <p className="text-gray-600">
              We are committed to providing products of the highest quality to ensure accuracy and reliability in every experiment and demonstration. 
              Our dedication to excellence means that each product undergoes rigorous testing and quality control, ensuring 
               .
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4 mb-8 md:mb-0">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/1040/1040236.png"
                  alt="Innovation"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Innovation</h3>
              <p className="text-gray-600">
              UVX goal is to contribute in improving high quality lab consumables and chemical products (analytical and reagent grade) in the whole world with affordable prices to create 
              ultra-value to pharma industry through innovation & diversification.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/3 px-4">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <div className="flex items-center justify-center mb-4">
                <img
                  src="https://cdn-icons-png.flaticon.com/256/2302/2302838.png"
                  alt="Service"
                  className="w-16 h-16"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Mission and Goal</h3>
              <p className="text-gray-600">
              UVX goal is to contribute in improving high quality lab
               consumables and chemical products (analytical and reagent grade) in the whole world with affordable prices to create ultra-value to pharma industry through innovation & diversification.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;
