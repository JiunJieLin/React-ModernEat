import { ThemeContext } from "@/data/context";
import { useContext } from "react";
const ExtraAction = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="px-12 flex gap-4 bg-white dark:bg-primary-dark">
        <div className="dark:bg-slate-300 dark:text-slate-800 bg-slate-800 text-slate-100 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1 dark:hover:bg-slate-100">
          查看類似商品
        </div>
        <div className="dark:bg-slate-300 dark:text-slate-800 px-4 text-sm py-2 rounded-3xl bg-slate-800 text-slate-100 cursor-pointer hover:bg-slate-200 transition-opacity flex items-center gap-1 dark:hover:bg-slate-100">
          團購訂單
        </div>
      </div>
    </div>
  );
};

export default ExtraAction;
