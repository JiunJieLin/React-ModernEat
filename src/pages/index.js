import Navigation from "@/components/Navigation";
import Breadcrumb from "@/components/Breadcrumb";
import Advertisement from "@/components/Advertisement";
import ShopInfo from "@/components/ShopInfo";
import ExtraAction from "@/components/ExtraAction";
import ShopMenu from "@/components/ShopMenu";
import { ProductProvider } from "@/data/context";
const Home = () => {
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

export default Home;
