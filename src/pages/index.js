import Navigation from "@/components/Navigation";
import { ProductProvider } from "@/data/context";
import Flipcard from "@/components/Flipcard";
import Shop from "@/components/Shop/Shop";
const Home = () => {
  return (
    <ProductProvider>
      <main className="min-h-screen mx-auto max-w-[1920px] relative">
        {/* <Navigation /> */}
        <Shop />
      </main>

      {/* <Flipcard /> */}
    </ProductProvider>
  );
};

export default Home;
{
  /* <div
  className="min-h-screen bg-cover bg-center relative "
  style={{
    backgroundImage: `url("https://www.healingdaily.com.tw/media/article/00/19/1915_4c1f8b8cc2dd.jpeg")`,
  }}
></div>; */
}
