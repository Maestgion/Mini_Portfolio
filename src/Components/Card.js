import React from "react";

export const Card = ({ title, imageUrl, btnTitle, btnLink, content }) => {
  return (
    <>
      <div className="flex flex-col gap-4 w-72 h-96  bg-gray-100 rounded-md transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">
        <img
          className="h-40 object-cover rounded-t-md"
          src={imageUrl}
          alt="hri"
        />
        <div className="p-2">
          <h2 className="font-Roboto font-bold text-lg  text-center ">
            {title}
          </h2>

          <p className="text-sm text-gray-600 text-center">{content}</p>
        </div>

        <div className="px-4 pt-2">
          <a
            role="button"
            href={btnLink}
            className="text-white font-semibold bg-amber-600 px-3 py-2 rounded-md hover:bg-amber-700 fixed top-80"
            target="_blank"
          >
            {btnTitle}
          </a>
        </div>
      </div>
    </>
  );
};
