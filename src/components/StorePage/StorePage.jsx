import Navigation from "../Navigation/Navigation";
import Footer from "../Footer";
import AllStores from "./AllStores";
import { ProductProvider } from "@/data/context";

const StorePage = () => {
  return (
    <ProductProvider>
      <main className="min-h-screen mx-auto max-w-[1920px] bg-white dark:bg-primary-dark">
        <Navigation />
        <AllStores />
        <Footer />
      </main>
    </ProductProvider>
  );
};
export default StorePage;
