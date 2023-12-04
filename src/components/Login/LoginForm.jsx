import { useForm } from "react-hook-form";
import cx from "classnames";
import { useState } from "react";
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

  const onSubmit = () => {
    const data = getValues();
    console.log(data);
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex bg-white dark:bg-primary-dark items-center justify-center py-20">
        <form
          className=" p-10  rounded-md bg-white dark:bg-slate-100 shadow-2xl sm:w-[500px] md:w-[800px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-center text-black text-2xl">會員登入</p>
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
              placeholder="John Carter"
              required
              className={cx(
                "text-sm font-medium text-slate-500 bg-white border-2 py-2 px-2",
                {
                  "border-red-400": errors.name,
                }
              )}
              {...register("name", { required: "Username is required" })}
            />
            {errors.name && <p>{errors.name}</p>}
            <label
              htmlFor="mail"
              className="text-sm font-medium text-slate-500"
            >
              Email
            </label>
            <input
              type="mail"
              name="mail"
              id="mail"
              placeholder="email@example.com"
              required
              className={cx(
                "text-sm font-medium text-slate-500 bg-white border-2 py-2 px-2",
                {
                  "border-red-400": errors.mail,
                }
              )}
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && <p>{errors.email}</p>}
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
              type="submit"
              className="bg-green-600 text-white text-center rounded-md py-3 cursor-pointer hover:bg-green-700"
            >
              登入
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
