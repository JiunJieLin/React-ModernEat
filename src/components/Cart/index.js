import { BackpackIcon } from "@radix-ui/react-icons";

const Cart = ({ count }) => {
  return (
    <div>
      <div className="bg-slate-700 text-slate-50 px-4 text-sm py-2 rounded-3xl cursor-pointer hover:opacity-80 transition-opacity flex items-center gap-3">
        <BackpackIcon className="w-4 h-4" />
        購物車 •<div>{count}</div>
      </div>
    </div>
  );
};

export default Cart;
