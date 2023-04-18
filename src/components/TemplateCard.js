import React from "react";

const TemplateCard = ({ imgUrl, name, description, url }) => {
  return (
    <div className="lg:flex shadow-md rounded-md">
      <a href={url} target="_blank" rel="noreferrer">
        <img
          className="object-cover w-full h-56 rounded-lg lg:w-80 transition-all duration-500 ease-in-out transform hover:scale-90"
          src={imgUrl}
          alt=""
        />
      </a>
      <div className="flex flex-col justify-between py-6 lg:mx-6">
        <a
          href={url} target="_blank" rel="noreferrer"
          className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "
        >
          {description}
        </a>

        <span className="text-sm text-gray-500 dark:text-gray-300">{name}</span>
      </div>
    </div>
  );
};

export default TemplateCard;
