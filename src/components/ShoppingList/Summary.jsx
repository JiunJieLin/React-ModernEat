import { ThemeContext, ProductContext, AuthContext } from "@/data/context";
import { useContext } from "react";
import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import { useCartActions } from "../hooks/useCartActions";
const Summary = () => {
  const { darkMode } = useContext(ThemeContext);
  const { cart, setCart } = useContext(ProductContext);
  const { loggedIn } = useContext(AuthContext);
  const { handleOnAdd, handleOnRemove } = useCartActions(
    cart,
    setCart,
    loggedIn
  );

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className=" space-y-4 bg-white dark:bg-primary-dark p-10">
        <div className="text-3xl font-bold text-stone-900 dark:text-slate-200">
          訂單摘要
        </div>
        <div className="text-lg  text-black dark:text-white">
          {cart.length}項商品
        </div>
        <div className="w-80vw border-[1px]"></div>
        <div className="space-y-4 ">
          {cart.map((item) => (
            <div
              className="flex items-center gap-6 border-b-[1px] pb-4"
              key={item.id}
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-6">
                  <img src={item.image} className="w-20 h-20 rounded-md" />
                  <div>
                    <p className="text-lg">{item.title}</p>
                    <p>{`$${item.price} x ${item.count} = $${(
                      item.price * item.count
                    ).toFixed(2)}`}</p>
                  </div>
                </div>

                <div className="flex border-2 justify-between px-6 py-2 rounded-full items-center dark:border-slate-600 ">
                  <TrashIcon onClick={() => handleOnRemove(item)} />
                  <div className="text-md px-4">{item.count}</div>
                  <PlusIcon onClick={() => handleOnAdd(item)} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex  justify-end ">
          <div className="text-2xl flex gap-4">
            <p>Total:</p>
            <span>
              $
              {cart
                .reduce((total, item) => total + item.price * item.count, 0)
                .toFixed(2)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Summary;
