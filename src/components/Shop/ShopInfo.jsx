import { ThemeContext } from "@/data/context";
import { useContext } from "react";
const ShopInfo = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="px-12 sm:pt-7 pb-4 space-y-1 pt-4 bg-white dark:bg-primary-dark ">
        <h4 className=" gap-2 text-[19px] sm:text-[36px] font-bold text-black dark:text-slate-200">
          非常厲害美食館 信義活力吳興店
        </h4>

        <div className="text-gray-900/60 text-sm dark:text-slate-200">
          4.9 (42 評分) • 早餐和早午餐 • $ 詳細資訊
        </div>
        <div className="text-gray-900/60 text-sm  dark:text-slate-200">
          30–45 分鐘 • 57TWD 費用
        </div>
        <div className="text-gray-900/60 text-sm dark:text-slate-200">
          查看外送及自取預估時間。
        </div>
        <div className="text-gray-900/60 text-sm mt-4 dark:text-slate-200">
          $ • 早餐和早午餐
        </div>
      </div>
    </div>
  );
};

export default ShopInfo;
