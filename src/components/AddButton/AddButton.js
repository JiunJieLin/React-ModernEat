import { PlusIcon, TrashIcon } from "@radix-ui/react-icons";
import cx from "classnames";
import { useState } from "react";

const AddButton = () => {
  const [count, setCount] = useState(0);
  const isAdded = count > 0;
  const handleAddOnClick = function (e) {
    e.stopPropagation();
    setCount((prev) => prev + 1);
  };
  const handleRemoveOnClick = function (e) {
    e.stopPropagation();
    setCount((prev) => prev - 1);
  };
  return (
    <div
      className={cx(
        "absolute top-2 right-2 w-8 h-8 bg-black hover:opacity-75 text-white flex items-center justify-center rounded-full transition-all",
        { "w-auto  justify-between px-2": isAdded }
      )}
    >
      {isAdded && (
        <>
          <TrashIcon onClick={handleRemoveOnClick} />
          <div className="text-sm px-2">{count}</div>
        </>
      )}
      <PlusIcon onClick={handleAddOnClick} />
    </div>
  );
};
export default AddButton;
