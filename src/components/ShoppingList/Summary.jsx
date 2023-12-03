import { ThemeContext } from "@/data/context";
import { useContext } from "react";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";

const Summary = ({ items }) => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" space-y-4 bg-white dark:bg-primary-dark p-10">
        <div className="text-3xl font-bold text-stone-900 dark:text-slate-200">
          訂單摘要
        </div>
        <div className="text-lg opacity-50">{items.length}項商品</div>
        <div className="w-80vw border-[1px]"></div>
        <div className="space-y-4 ">
          {items.map((item) => (
            <div
              className="flex items-center gap-6 border-b-[1px] pb-4"
              key={item.id}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-6">
                  <img src={item.image} className="w-20 h-20 rounded-md" />
                  <div>
                    <p className="text-lg">{item.label}</p>
                    <p>{`$${item.price}* 3`}</p>
                  </div>
                </div>

                <div className="flex border-2 justify-between px-2 items-center">
                  <TrashIcon />
                  <div className="text-sm px-2">2</div>
                  <PlusIcon />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex  justify-end ">
          <div className="text-2xl flex gap-4">
            <p>Total:</p> <span>$123</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
