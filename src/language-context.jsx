import { createContext, useContext, useState } from "react";

const LanguageContext = createContext({ language: "English" });

const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState("English");
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

const useLanguage = () => useContext(LanguageContext);

export { LanguageProvider, useLanguage };
