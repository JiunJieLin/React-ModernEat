import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchBar from "@/components/SearchBar";
import Cart from "@/components/Cart";
import { useContext } from "react";
import { ProductContext } from "@/data/context";

const Navigation = () => {
  const { cart } = useContext(ProductContext);
  const totalCartCount = cart.reduce((acc, item) => acc + item.count, 0);

  return (
    <div className="flex items-center min-h-[96px] px-10">
      <div className="flex items-center ">
        <HamburgerMenuIcon className="w-5 h-5 mr-8" />
        <div className="text-[28px]">
          Modern<b className="ml-2">Eat</b>
        </div>
      </div>

      <div className="flex justify-between flex-1 items-center pl-20 pr-2">
        <SearchBar />
        <Cart totalCartCount={totalCartCount} />
      </div>
    </div>
  );
};

export default Navigation;
