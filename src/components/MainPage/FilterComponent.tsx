import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { useOptionContext } from "../../contexts/OptionContext";
import { fetchBreeds } from "../../api/breeds";

interface breedOptions {
  id: string;
  name: string;
}

const FilterComponent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { selectedOptions, toggleOptions, clearOptions } = useOptionContext();
  const { data } = useQuery({
    queryKey: ["breeds"],
    queryFn: fetchBreeds,
  });

  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <div className="relative w-full sm:w-64 z-10">
        <div
          className="border rounded-md px-4 py-2 cursor-pointer bg-white text-center sm:text-left"
          onClick={() => setIsOpen(!isOpen)}
        >
          {selectedOptions.length > 0
            ? selectedOptions.join(", ")
            : "Select options"}
        </div>
        {isOpen && (
          <div className="absolute left-0 right-0 mt-2 border bg-white rounded-md shadow-lg">
            <div className="p-2 max-h-60 overflow-y-auto">
              {data.map((option: breedOptions) => (
                <label
                  key={option.id}
                  className="flex items-center space-x-2 py-1"
                >
                  <input
                    type="checkbox"
                    checked={selectedOptions.includes(option.id)}
                    onChange={() => toggleOptions(option.id)}
                    className="form-checkbox h-4 w-4 text-indigo-600 border-gray-300 rounded focus:ring-indigo-500"
                  />
                  <span>{option.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      <button
        onClick={clearOptions}
        className="text-color-blue hover:underline self-center sm:self-auto"
      >
        Clear filter options
      </button>
    </div>
  );
};

export default FilterComponent;
