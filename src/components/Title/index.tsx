import React from 'react';

type TitleProps = {
    title: string;
  subtitle?: string; 
};

const Title: React.FC<TitleProps> = ({ title, subtitle }) => {
  return (
    <div>
      <h1 className="text-secondary_clr text-5xl font-medium">{title}</h1>
      {subtitle && (
        <p className="text-lg text-third_clr mt-2 mb-14">{subtitle}</p> // Conditionally render subtitle
      )}
    </div>
  );
};

export default Title;
