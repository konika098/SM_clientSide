import React from 'react';

type IProps = {
  name?: string;
  className?: string;
  onClick?: () => void;
  icon?: React.ReactNode; // Optional prop for the icon
};

const Button: React.FC<IProps> = ({ name, className, onClick, icon }) => {
  return (
    <button
      className={`flex items-center gap-2 bg-primary_clr px-6 py-4 rounded-full text-white border border-transparent hover:bg-fth_clr ${className}`}
      onClick={onClick}
    >
       {name}
      {/* Render icon if provided */}
      {icon && <span className="mr-2">{icon}</span>}
     
    </button>
  );
};

export default Button;
