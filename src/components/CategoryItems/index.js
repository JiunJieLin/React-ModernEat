import Item from "@/components/Item";
import { breakfastItems } from "@/components/breakfastItems.js";
const CategoryItems = () => {
  return (
    <div className="grid grid-cols-4">
      {breakfastItems.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </div>
  );
};
export default CategoryItems;
