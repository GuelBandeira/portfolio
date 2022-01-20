import React from "react";

const ContainerCard = ({ children }) => {
  return (
    <>
      <div className="w-full bg-indigo-600 -mt-10">
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-6">
            {children}
          </div>
        </section>
      </div>
    </>
  );
};

export default ContainerCard;
