import Summary from "./Summary";
import Footer from "../Footer";
import Navigation from "@/components/Navigation/Navigation";
import { ProductProvider } from "@/data/context";
const ShoppingList = () => {
  const items = [
    { id: 1, label: "經典鬆餅", price: 8.99, image: "items/1.webp" },
    {
      id: 2,
      label: "班尼迪克蛋",
      price: 10.49,
      image: "items/2.webp",
    },
  ];
  return (
    <ProductProvider>
      <div>
        <main className="min-h-screen mx-auto max-w-[1920px]">
          <Navigation />
          <Summary items={items} />
          <Footer />
        </main>
      </div>
    </ProductProvider>
  );
};

export default ShoppingList;
