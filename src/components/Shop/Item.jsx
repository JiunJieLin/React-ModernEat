import AddButton from "./AddButton";
import { useContext } from "react";
import { ProductContext, AuthContext } from "@/data/context";
import { useCartActions } from "../hooks/useCartActions";
import { HeartIcon, HeartFilledIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import Modal from "./Modal";
const Item = ({ data }) => {
  const { cart, setCart } = useContext(ProductContext);
  const { loggedIn } = useContext(AuthContext);
  const { handleOnAdd, handleOnRemove, showModal, closeModal } = useCartActions(
    cart,
    setCart,
    loggedIn
  );

  const [clicked, setClicked] = useState(false);
  const handleHeartClick = () => {
    setClicked(!clicked);
  };

  const existingCartItem = cart.find((item) => item.id === data.id);
  const itemCount = existingCartItem ? existingCartItem.count : 0;

  return (
    <div className="mb-1 p-4 hover:shadow-xl ">
      <div className="aspect-video overflow-hidden rounded-t-lg flex items-center relative ">
        <img src={data.image} alt="" />
        <AddButton
          onAdd={(e) => handleOnAdd(data, e)}
          onRemove={(e) => handleOnRemove(data, e)}
          itemCount={itemCount}
        />
      </div>
      <div className="py-2 text-stone-950 rounded-b-lg relative bg-white dark:bg-slate-300">
        <div>{data.title}</div>
        <div className="flex relative">
          <div className="text-sm opacity-70">${data.price}</div>
          <button onClick={handleHeartClick} className="absolute top-0 right-3">
            {clicked ? (
              <HeartFilledIcon className="text-red-500" />
            ) : (
              <HeartIcon className="text-red-500" />
            )}
          </button>
        </div>
      </div>
      <Modal showModal={showModal} closeModal={closeModal} />
    </div>
  );
};
export default Item;
