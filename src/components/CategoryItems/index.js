import Item from "@/components/Item";
const CategoryItems = () => {
  const breakfastItems = [
    {
      image: "items/1.webp",
      title: "經典鬆餅",
      price: 8.99,
    },
    {
      image: "items/2.webp",
      title: "班尼迪克蛋",
      price: 10.49,
    },
    {
      image: "items/3.webp",
      title: "酪梨吐司",
      price: 6.75,
    },
    {
      image: "items/4.webp",
      title: "法式吐司",
      price: 9.25,
    },
    {
      image: "items/5.webp",
      title: "芝士煎蛋餅",
      price: 7.99,
    },
    {
      image: "items/6.webp",
      title: "培根煎蛋",
      price: 8.75,
    },
    {
      image: "items/7.webp",
      title: "煙燻三文魚貝果",
      price: 11.5,
    },
    {
      image: "items/8.webp",
      title: "希臘優格芭菲",
      price: 9.99,
    },
    {
      image: "items/9.webp",
      title: "純素早餐捲",
      price: 7.25,
    },
    {
      image: "items/10.webp",
      title: "肉桂捲",
      price: 5.49,
    },
    {
      image: "items/21.webp",
      title: "榛果巧克力薄餅",
      price: 12.99,
    },
    {
      image: "items/22.webp",
      title: "巴西莓碗",
      price: 9.5,
    },
    {
      image: "items/23.webp",
      title: "英式早餐",
      price: 11.99,
    },
    {
      image: "items/24.webp",
      title: "菠菜芝士餡餅",
      price: 7.25,
    },
    {
      image: "items/25.webp",
      title: "香蕉鬆餅",
      price: 5.99,
    },
    {
      image: "items/26.webp",
      title: "早餐玉米餅",
      price: 6.49,
    },
  ];
  return (
    <div className="grid grid-cols-4">
      {breakfastItems.map((item, index) => (
        <Item data={item} key={`item.title-${index}`} />
      ))}
    </div>
  );
};
export default CategoryItems;
