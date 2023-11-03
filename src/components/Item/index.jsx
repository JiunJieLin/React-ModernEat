import AddButton from "../AddButton/AddButton";
import { useContext } from "react";
import { ProductContext } from "@/data/context";
import { useCartActions } from "../hooks/useCartActions";

const Item = ({ data }) => {
  const { cart, setCart } = useContext(ProductContext);
  const { handleOnAdd, handleOnRemove } = useCartActions(cart, setCart);

  const existingCartItem = cart.find((item) => item.id === data.id);
  const itemCount = existingCartItem ? existingCartItem.count : 0;

  return (
    <div className="mb-1 p-4 hover:shadow-xl">
      <div className="aspect-video overflow-hidden flex items-center relative">
        <img src={data.image} alt="" />
        <AddButton
          onAdd={(e) => handleOnAdd(data, e)}
          onRemove={(e) => handleOnRemove(data, e)}
          itemCount={itemCount}
        />
      </div>
      <div className="py-2 text-stone-950">
        <div>{data.title}</div>
        <div className="text-sm opacity-70">${data.price}</div>
      </div>
    </div>
  );
};
export default Item;
