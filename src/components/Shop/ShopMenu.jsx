import { useEffect, useState } from "react";
import MenuCategory from "@/components/Shop/MenuCategory";
import CategoryItems from "@/components/Shop/CategoryItems";
import mockData from "@/data/mockData";
import { ThemeContext } from "@/data/context";
import { useContext } from "react";
const ShopMenu = () => {
  const [activeCategory, setActiveCategory] = useState("");
  const [category, setCategory] = useState([]);
  const [items, setItems] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  /**
   * 透過 useEffect 來取得資料
   * 處理資料，切記不要直接使用資料，要先處理過後再使用
   * 我們這邊是要取得分類資料，所以我們要先取得所有的分類，然後再取得分類下的商品資料
   *
   * 我們設計兩個 function
   * 1. 取得分類資料 refinedData
   * 2. 取得分類下的商品資料 refinedItems
   */
  useEffect(() => {
    // fetch data form api
    const refinedData = mockData
      .map((item) => item.category)
      ?.filter((item, index, array) => array.indexOf(item) === index);

    setCategory(refinedData);

    // order by category
    const refinedItems = mockData.reduce((acc, cur) => {
      const category = cur.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(cur);
      return acc;
    }, {});

    setItems(refinedItems);
  }, []);

  const handleOnMenuCategoryClick = (index) => {
    setActiveCategory(index);
  };

  const activeCategoryLabel = category?.[activeCategory];

  /**
   * 將處理好的資料傳遞給子元件
   */
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col px-12 sm:flex-row items-start relative min-h-screen sm:px-14 pt-8 bg-white dark:bg-primary-dark">
        <div className=" sm:w-[320px] sm:pr-5 sm:sticky top-0 left-0 overflow-x-auto">
          <MenuCategory
            data={category}
            active={activeCategory}
            onClick={handleOnMenuCategoryClick}
          />
        </div>
        <div className="flex-1">
          <CategoryItems data={items} active={activeCategoryLabel} />
        </div>
      </div>
    </div>
  );
};

export default ShopMenu;
