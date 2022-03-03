import { useTheme } from "./theme-context";

export const Nav = () => {
  const { setTheme } = useTheme();

  return (
    <div>
      <button
        onClick={() =>
          setTheme((theme) => (theme === "dark" ? "light" : "dark"))
        }
      >
        Toggle Mode
      </button>
    </div>
  );
};
