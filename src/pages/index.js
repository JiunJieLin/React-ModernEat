import { ProductProvider } from "@/data/context";
import Footer from "@/components/Footer";
import HomePage from "@/components/HomePage/HomePage";

const Home = () => {
  return (
    <ProductProvider>
      <main className="min-h-screen mx-auto max-w-[1920px] relative">
        <HomePage />
        <Footer />
      </main>
    </ProductProvider>
  );
};

export default Home;
