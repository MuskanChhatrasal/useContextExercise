import { useLanguage } from "./language-context";

export const Language = () => {
  const { language, setLanguage } = useLanguage();

  const languageConverter = () =>
    language === "English" ? setLanguage("Hindi") : setLanguage("English");
  return (
    <>
      {language === "English" ? (
        <button onClick={languageConverter}>Hindi</button>
      ) : (
        <button onClick={languageConverter}>English</button>
      )}
    </>
  );
};
