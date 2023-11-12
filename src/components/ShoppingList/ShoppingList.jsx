import { useForm } from "react-hook-form";
import cx from "classnames";
import Summary from "../Summary/Summary";
const ShoppingList = () => {
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleOnSubmit = () => {
    const data = getValues();
    console.log(data);
  };
  const items = [
    { id: 1, label: "經典鬆餅", price: 8.99, image: "items/1.webp" },
    {
      id: 2,
      label: "班尼迪克蛋",
      price: 10.49,
      image: "items/2.webp",
    },
  ];
  return (
    <div className="flex gap-6 max-w-[900px] mx-auto my-10">
      <div className="bg-gray-50 p-10  w-full rounded-md">
        <div className="space-y-1 flex flex-col">
          <label htmlFor="name" className="text-sm font-medium text-slate-500">
            姓名
          </label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className={cx("text-sm font-medium text-slate-500", {
              "border-red-400": errors.name,
            })}
            {...register("name", { required: true })}
          />
          <div className="space-y-1 mt-4">
            <label
              htmlFor="address"
              className="text-sm font-medium text-slate-500"
            >
              地址
            </label>
            <textarea
              name="address"
              id="address"
              required
              className={cx("bg-white border px-2 py-3 w-full rounded-sm", {
                "border-red-400": errors.address,
              })}
              {...register("address", { required: true })}
            ></textarea>
          </div>
          <Summary items={items} />
          <button
            className="bg-green-600 text-white text-center rounded-md py-3 cursor-pointer hover:bg-green-700"
            onClick={handleSubmit(handleOnSubmit)}
          >
            一鍵下單
          </button>
        </div>
      </div>
    </div>
  );
};

export default ShoppingList;
console.log(123);
