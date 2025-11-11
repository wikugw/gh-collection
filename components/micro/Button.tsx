import React from "react";

type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string
};

export default function Button({ children, onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`
        bg-[#2f2f2f]
        text-[#f7ead7]
        font-extrabold
        text-xl
        px-8
        py-3
        rounded-none
        cursor-pointer
        transform
        hover:scale-105 transition-transform duration-300
        ${className}
      `}
    >
      {children}
    </button>
  );
}
