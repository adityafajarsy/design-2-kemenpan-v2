import React from "react";

const Button = ({ title, id, rightIcon, LeftIcon, containerClass }) => {
  return (
    <button
      id={id}
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden
        rounded-full bg-violet-50 px-7 py-3 text-black transition-all
        ease-linear ${containerClass}`}
    >
      {LeftIcon && <span className="mr-2">{LeftIcon}</span>}

      <span
        className="relative inline-flex overflow-hidden font-general text-xs uppercase"
      >
        <span
          className="block translate-y-0 opacity-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:opacity-0"
        >
          {title}
        </span>
        <span
          className="absolute left-0 top-full block opacity-0 transition-all duration-500 group-hover:top-0 group-hover:opacity-100"
        >
          {title}
        </span>
      </span>

      {rightIcon && <span className="ml-2">{rightIcon}</span>}
    </button>
  );
};

export default Button;
