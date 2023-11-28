import Navigation from "@/components/Navigation";

import { ProductProvider } from "@/data/context";
const Home = () => {
  return (
    <ProductProvider>
      <main className="min-h-screen mx-auto max-w-[1920px]">
        <Navigation />
      </main>
    </ProductProvider>
  );
};

export default Home;
