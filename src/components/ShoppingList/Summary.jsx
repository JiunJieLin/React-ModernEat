import { ThemeContext } from "@/data/context";
import { useContext } from "react";
const Summary = ({ items }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" space-y-6 bg-white dark:bg-primary-dark p-10">
        <div className="text-3xl font-bold text-stone-900 dark:text-slate-200">
          訂單摘要
        </div>
        <div className="text-lg opacity-50">{items.length}項商品</div>
        <div className="space-y-6">
          {items.map((item) => (
            <div className="flex items-center gap-6" key={item.id}>
              <img src={item.image} className="w-20 h-20 rounded-md " />
              <p className="text-lg">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Summary;
