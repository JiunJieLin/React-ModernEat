import { PlusIcon } from "@radix-ui/react-icons";
import cx from "classnames";
const AddButton = () => {
  const isAdded = true;
  return (
    <div
      className={cx(
        "absolute top-2 right-2 w-8 h-8 bg-black hover:opacity-75 text-white flex items-center justify-center rounded-full transition-all",
        { "w-auto  justify-between px-2": isAdded }
      )}
    >
      <PlusIcon />
    </div>
  );
};
export default AddButton;
