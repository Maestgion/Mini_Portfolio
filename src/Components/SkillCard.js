import React from "react";

const SKillCard = ({ title, imageUrl, Platform, PlatformLink, content }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-80   bg-gray-100 rounded-md transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img
          className="h-40 object-cover rounded-t-md"
          src={imageUrl}
          alt="hri"
        />
        <div className="p-2">
          <h2 className="font-Roboto font-bold text-lg my-2 text-center ">
            {title}
          </h2>

          <p className="text-sm text-gray-600 text-center">{content}</p>

          <a
            href={PlatformLink}
            className="text-sm text-amber-600 underline cursor-pointer mx-4 font-Roboto font-bold"
            target="_blank"
          >
            {Platform}
          </a>
        </div>
      </div>
    </>
  );
};

export default SKillCard;
