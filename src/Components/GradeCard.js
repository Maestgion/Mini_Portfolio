import React from "react";

const GradeCard = ({ imageUrl, year, cgpa }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-80   bg-gray-300 rounded-md transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl ">
        <img
          className="h-40 object-cover rounded-t-md"
          src={imageUrl}
          alt="hri"
        />
        <div className="p-2">
          <h2 className="font-Roboto font-bold text-lg m-2 text-left ">
            Year/Class: {year}
          </h2>
          <h2 className="font-Roboto font-bold text-lg m-2 text-lext ">
            CGPA/Percentage: {cgpa}
          </h2>
        </div>
      </div>
    </>
  );
};

export default GradeCard;
