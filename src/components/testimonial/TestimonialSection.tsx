import React from "react";

const TestimonialSection = () => {
  return (
    <div className="bg-orange-200 p-10 flex flex-col items-center justify-center gap-10">
        <div className=" ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar justify-center py-10">
          <div className="w-24 rounded-full ring ring-orange-500 ring-offset-2">
            <img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1698814814/samples/man-portrait.jpg" />
          </div>
        </div>
        <div className="card-body items-center justify-center">
          <h2 className="card-title">Simply the best</h2>
          <p className="text-align-center text-base">
            If i were to do it all over again, i would choose the chefs culinary
            academy
          </p>
        </div>
      </div>
    </div>
    <div className=" ">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="avatar justify-center py-10">
          <div className="w-24 rounded-full ring ring-orange-500 ring-offset-2">
            <img src="https://res.cloudinary.com/dt3czltxx/image/upload/v1698814814/samples/man-portrait.jpg" />
          </div>
        </div>
        <div className="card-body items-center justify-center">
          <h2 className="card-title">Simply the best</h2>
          <p className="text-align-center text-base">
            If i were to do it all over again, i would choose the chefs culinary
            academy
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default TestimonialSection;
