import React from "react";

const Preview = ({ file }) => {
  if (!file)
    return (
      <div className="h-full w-full bg-gray-200 flex items-center justify-center">
        <span className="text-gray-500 text-lg">No Image Selected</span>
      </div>
    );
  return (
    <img
      src={URL.createObjectURL(file)}
      alt="preview"
      className="h-full w-full object-contain"
    />
  );
};

export default Preview;
