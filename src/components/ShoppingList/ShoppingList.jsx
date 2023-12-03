import Summary from "./Summary";
import Footer from "../Footer";
import Advertisement from "../Shop/Advertisement";
import Breadcrumb from "../Shop/Breadcrumb";
import Navigation from "@/components/Navigation/Navigation";
import { ProductProvider } from "@/data/context";
const ShoppingList = () => {
  return (
    <ProductProvider>
      <div>
        <main className="min-h-screen mx-auto max-w-[1920px]">
          <Navigation />
          <Breadcrumb />
          <Advertisement />
          <Summary />
          <Footer />
        </main>
      </div>
    </ProductProvider>
  );
};

export default ShoppingList;
