const MenuCatecory = () => {
  const breakfastItems = [
    "鬆餅",
    "蛋餅",
    "吐司",
    "三文魚",
    "優格",
    "捲",
    "麵包",
    "飲品",
    "穀物",
    "小食",
    "沙拉",
    "果碗",
    "早餐",
    "餡餅",
    "餅",
    "甜點",
    "三明治",
    "瑪芬",
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
