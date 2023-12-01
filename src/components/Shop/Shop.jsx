import Navigation from "@/components/Navigation/Navigation";
import Breadcrumb from "@/components/Shop/Breadcrumb";
import Advertisement from "@/components/Shop/Advertisement";
import ShopInfo from "@/components/Shop/ShopInfo";
import ExtraAction from "@/components/Shop/ExtraAction";
import ShopMenu from "@/components/Shop/ShopMenu";
import ShoppingList from "@/components/ShoppingList/ShoppingList";
import { ProductProvider } from "@/data/context";
const Shop = () => {
  return (
    <ProductProvider>
      <main className="min-h-screen mx-auto max-w-[1920px]">
        <Navigation />
        <Breadcrumb />
        <Advertisement />
        <ShopInfo />
        <ExtraAction />
        <ShopMenu />
      </main>
    </ProductProvider>
  );
};

export default Shop;
