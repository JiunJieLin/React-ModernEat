import Navigation from "@/components/Navigation";
import { ProductProvider } from "@/data/context";
const Home = () => {
  return (
    <ProductProvider>
      <div
        className="min-h-screen bg-cover bg-center relative "
        style={{
          backgroundImage: `url("https://www.healingdaily.com.tw/media/article/00/19/1915_4c1f8b8cc2dd.jpeg")`,
        }}
      >
        <main className="min-h-screen mx-auto max-w-[1920px] relative">
          <Navigation />
        </main>
      </div>
    </ProductProvider>
  );
};

export default Home;
