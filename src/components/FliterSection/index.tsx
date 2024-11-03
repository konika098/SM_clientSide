type IFilterSection = {
    title: string;
    children: React.ReactNode; 
  };
  
  const FilterSection: React.FC<IFilterSection> = ({ title, children }) => (
    <div className="mb-6">
      <h2 className="text-lg font-semibold">{title}</h2>
      <div className="mt-4">{children}</div>
    </div>
  );
  
  export default FilterSection;
  