import Item from "@/components/Item";
import mockData from "@/data/mockData.json";

const CategoryItems = () => {
  return (
    <div className="grid grid-cols-4">
      {mockData.map((item) => (
        <Item data={item} key={item.id} />
      ))}
    </div>
  );
};
export default CategoryItems;
