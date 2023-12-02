import { ProductProvider } from "@/data/context";
import Navigation from "@/components/Navigation/Navigation";
import Breadcrumb from "@/components/Shop/Breadcrumb";
import Advertisement from "@/components/Shop/Advertisement";
import ShopInfo from "@/components/Shop/ShopInfo";
import ExtraAction from "@/components/Shop/ExtraAction";
import ShopMenu from "@/components/Shop/ShopMenu";
import Footer from "../Footer";

const Shop = () => {
  return (
    <ProductProvider>
      <div>
        <main className="min-h-screen mx-auto max-w-[1920px] bg-white dark:bg-primary-dark">
          <Navigation />
          <Breadcrumb />
          <Advertisement />
          <ShopInfo />
          <ExtraAction />
          <ShopMenu />
          <Footer />
        </main>
      </div>
    </ProductProvider>
  );
};

export default Shop;
