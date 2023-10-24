const MenuCatecory = () => {
  const breakfastItems = [
    "經典鬆餅",
    "班尼迪克蛋",
    "酪梨吐司",
    "法式吐司",
    "芝士煎蛋餅",
    "培根煎蛋",
    "煙燻三文魚貝果",
    "希臘優格芭菲",
    "純素早餐捲",
    "肉桂捲",
    "水果沙拉",
    "早餐墨西哥煎餅",
    "藍莓鬆餅",
    "早餐牛角包",
    "草莓鬆餅",
    "花生醬冰沙碗",
    "香腸早餐捲",
    "燕麥片和牛奶",
    "早餐捲",
    "炸薯餅",
    "蛋白炒蛋",
    "蔬菜煎蛋餅",
    "比利時鬆餅",
    "辣味肉煎餅捲",
    "榛果巧克力薄餅",
    "巴西莓碗",
    "英式早餐",
    "菠菜芝士餡餅",
    "香蕉鬆餅",
    "早餐玉米餅",
  ];
  return (
    <div className="max-h-screen overflow-auto no-scrollbar">
      <div className="pb-20 pt-">
        <div className="mb-1 underline font-bold text-stone-950">最熱門</div>
        {breakfastItems.map((item, index) => {
          return (
            <div
              key={index}
              className="text-gray-850 py-2 cursor-pointer text-slate-500 hover:text-slate-900 transition-opacity"
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default MenuCatecory;
