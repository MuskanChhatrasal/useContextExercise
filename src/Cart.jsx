import { useCart } from "./cart-context";
import { useLanguage } from "./language-context";
import { useTheme } from "./theme-context";

export function Cart() {
  const { items } = useCart();
  const { theme } = useTheme();
  const { language } = useLanguage();
  return (
    <div>
      {language === "English" ? (
        <h1 style={{ color: theme === "light" ? "black" : "white" }}>
          Items in cart {items}
        </h1>
      ) : (
        <h1 style={{ color: theme === "light" ? "black" : "white" }}>
          आपके कार्ट मे {items} इतने आईटम्स हैं |
        </h1>
      )}
    </div>
  );
}
