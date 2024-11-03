import FilterSection from "@/components/FliterSection";


const Sidebar = () => {
  return (
    <div className="w-1/4 p-6 border-r">
      <FilterSection title="All Categories">
        {/* Render categories as checkboxes */}
        {["Skin Care", "Body Care", "Hair Care", "Accessories"].map((category, idx) => (
          <div key={idx} className="flex items-center space-x-2 mb-2">
            <input type="checkbox" id={category} />
            <label htmlFor={category}>{category}</label>
            <span className="text-gray-500">({Math.floor(Math.random() * 100)})</span>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Filter by Price">
      
        <input type="range" min="0" max="2000" className="w-full" />
        <div className="mt-2 text-sm">Price: $0 - $2000</div>
      </FilterSection>

      <FilterSection title="Color">
        {/* Color Options */}
        {["Blue", "Green", "Gray", "Red", "Yellow"].map((color, idx) => (
          <div key={idx} className="flex items-center space-x-2 mb-2">
            <input type="checkbox" id={color} />
            <label htmlFor={color}>{color}</label>
            <span className="text-gray-500">({Math.floor(Math.random() * 100)})</span>
          </div>
        ))}
      </FilterSection>

      <FilterSection title="Availability">
        <div className="flex items-center space-x-2 mb-2">
          <input type="checkbox" id="in-stock" />
          <label htmlFor="in-stock">In Stock</label>
        </div>
        <div className="flex items-center space-x-2">
          <input type="checkbox" id="out-of-stock" />
          <label htmlFor="out-of-stock">Out of Stock</label>
        </div>
      </FilterSection>
    </div>
  );
};

export default Sidebar;
