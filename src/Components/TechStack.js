import React from "react";

const TechStack = ({ title, imageUrl }) => {
  return (
    <>
      <div className="flex flex-col gap-4 items-center justify-center">
        <div>
          <img
            src={imageUrl}
            width={150}
            height={150}
            alt="img"
            className="rounded-full border-solid border-4 border-stone-800"
          />
        </div>

        <div className="text-white text-base font-thin">
          <p>{title}</p>
        </div>
      </div>
    </>
  );
};

export default TechStack;
