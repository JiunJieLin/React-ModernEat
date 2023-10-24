import MenuCatecory from "../MenuCategory";
import CategoryItems from "../CategoryItems";
const ShopMenu = () => {
  <div className="flex items-start relative min-h-screen px-14 pt-8">
    <div className="w=[320px] pr-5 sticky top-0 left-0">
      <MenuCatecory />
    </div>
    <div className="flex-1">
      <CategoryItems />
    </div>
  </div>;
};
export default ShopMenu;
