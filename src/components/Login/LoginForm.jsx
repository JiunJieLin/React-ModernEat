import { useForm } from "react-hook-form";
import cx from "classnames";
import { ThemeContext } from "@/data/context";
import { useContext } from "react";
const LoginForm = () => {
  const { darkMode } = useContext(ThemeContext);
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

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex gap-6 max-w-[900px] mx-auto my-10">
        <div className="bg-gray-50 p-10  w-full rounded-md">
          <div className="space-y-1 flex flex-col">
            <label
              htmlFor="name"
              className="text-sm font-medium text-slate-500"
            >
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

            <button
              className="bg-green-600 text-white text-center rounded-md py-3 cursor-pointer hover:bg-green-700"
              onClick={handleSubmit(handleOnSubmit)}
            >
              登入
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
