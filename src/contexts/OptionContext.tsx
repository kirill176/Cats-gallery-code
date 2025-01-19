import { createContext, ReactNode, useContext, useState } from "react";

interface OptionContextType {
  selectedOptions: string[];
  toggleOptions: (option: string) => void;
  clearOptions: () => void;
}

const OptionContext = createContext<OptionContextType | undefined>(undefined);

export const OptionProvider = ({ children }: { children: ReactNode }) => {
  const [selectedOptions, setSelectedOptions] = useState<string[]>([]);

  const toggleOptions = (option: string) => {
    setSelectedOptions((prev: string[]) =>
      prev.includes(option)
        ? prev.filter((item) => item !== option)
        : [...prev, option]
    );
  };

  const clearOptions = () => {
    setSelectedOptions([]);
  };

  return (
    <OptionContext.Provider
      value={{ selectedOptions, toggleOptions, clearOptions }}
    >
      {children}
    </OptionContext.Provider>
  );
};

export const useOptionContext = (): OptionContextType => {
  const context = useContext(OptionContext);
  if (!context) {
    throw new Error("useOptionContext must be used within an OptionProvider");
  }
  return context;
};
