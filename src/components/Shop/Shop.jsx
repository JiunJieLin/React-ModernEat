import Navigation from "@/components/Navigation/Navigation";
import Breadcrumb from "@/components/Shop/Breadcrumb";
import Advertisement from "@/components/Shop/Advertisement";
import ShopInfo from "@/components/Shop/ShopInfo";
import ExtraAction from "@/components/Shop/ExtraAction";
import ShopMenu from "@/components/Shop/ShopMenu";
import ShoppingList from "@/components/ShoppingList/ShoppingList";
import { ThemeContext } from "@/data/context";
import { useContext } from "react";
const Shop = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <main className="min-h-screen mx-auto max-w-[1920px] bg-white dark:bg-primary-dark">
        <Navigation />
        <Breadcrumb />
        <Advertisement />
        <ShopInfo />
        <ExtraAction />
        <ShopMenu />
      </main>
    </div>
  );
};

export default Shop;
