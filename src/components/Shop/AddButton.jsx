import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import cx from "classnames";
// import Modal from "./Modal";
// import { useContext } from "react";
// import { AuthContext } from "@/data/context";
const AddButton = ({ onAdd, onRemove, itemCount }) => {
  const isAdded = itemCount > 0;
  return (
    <div
      className={cx(
        "absolute top-2 right-2 w-8 h-8 bg-black hover:opacity-75 text-white flex items-center justify-center rounded-full transition-all",
        { "w-auto  justify-between px-2": isAdded }
      )}
    >
      {isAdded && (
        <>
          <TrashIcon onClick={onRemove} />
          <div className="text-sm px-2">{itemCount}</div>
        </>
      )}
      <PlusIcon onClick={onAdd} />
    </div>
  );
};
export default AddButton;
