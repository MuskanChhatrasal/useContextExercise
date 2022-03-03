import "./styles.css";
import { ProductListing } from "./ProductListing";
import { Cart } from "./Cart";
import { useTheme } from "./theme-context";
import { Nav } from "./Nav";
import { Language } from "./Language";

export default function App() {
  const { theme } = useTheme();
  return (
    <div
      className="App"
      style={{ backgroundColor: theme === "dark" ? "black" : "white" }}
    >
      <h1
        className="app-header"
        style={{ color: theme === "dark" ? "white" : "black" }}
      >
        eCommerce
      </h1>
      <div className="app-body">
        <Language />
        <Nav />
        <Cart />
        <ProductListing />
      </div>
    </div>
  );
}
