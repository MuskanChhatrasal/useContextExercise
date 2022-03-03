import { useCart } from "./cart-context";
import { useTheme } from "./theme-context";

export function ProductListing() {
  const { addToCart } = useCart();
  const { theme } = useTheme();

  return ["1", "2", "3", "4"].map((item) => (
    <div key={item} style={{ color: theme === "dark" ? "white" : "black" }}>
      <h2>Product {item}</h2>
      <button onClick={addToCart}>Add to Cart</button>
    </div>
  ));
}
