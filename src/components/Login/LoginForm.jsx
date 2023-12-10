import { useForm, Controller } from "react-hook-form";
import cx from "classnames";
import { ThemeContext, AuthContext, UserProfileContext } from "@/data/context";
import { useContext } from "react";
import { useRouter } from "next/router";
const LoginForm = () => {
  const { darkMode } = useContext(ThemeContext);
  const { setLoggedIn } = useContext(AuthContext);
  const { setUserProfile } = useContext(UserProfileContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const router = useRouter();
  const onSubmit = (data) => {
    console.log("Logging in...", data);
    setLoggedIn(true);
    setUserProfile(data);
    localStorage.setItem("userProfile", JSON.stringify(data));
    localStorage.setItem("loggedIn", "true");
    router.push("/");
  };

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex bg-white dark:bg-primary-dark items-center justify-center py-20">
        <form
          className=" p-10  rounded-md bg-white dark:bg-slate-100 shadow-2xl sm:w-[500px] md:w-[800px]"
          onSubmit={handleSubmit(onSubmit)}
        >
          <p className="text-center text-black text-2xl pb-10">會員登入</p>
          <div className=" flex flex-col gap-8">
            <div className="flex flex-col gap-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-slate-500"
              >
                姓名
              </label>
              <Controller
                name="name"
                control={control}
                rules={{
                  required: "姓名是必填欄位",
                  pattern: {
                    value: /^[A-Z][a-z]*\s[A-Z][a-z]*$/,
                    message:
                      "名稱格式不正確（需要兩個文字，每個文字第一個字大寫並用空格隔開",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="John Carter"
                      className={cx(
                        "text-sm font-medium text-slate-500 rounded-lg bg-white border-2 py-2 px-2 focus:outline-none ",
                        {
                          "border-red-400": errors.name,
                        }
                      )}
                    />

                    {errors.name && (
                      <p className="text-red-500">{errors.name.message}</p>
                    )}
                  </>
                )}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor="mail"
                className="text-sm font-medium text-slate-500"
              >
                Email
              </label>
              <Controller
                name="email"
                control={control}
                rules={{
                  required: "Email是必填項目",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                    message: "請輸入有效Email",
                  },
                }}
                render={({ field }) => (
                  <>
                    <input
                      {...field}
                      type="text"
                      placeholder="email@example.com"
                      className={cx(
                        "text-sm font-medium text-slate-500 rounded-lg bg-white border-2 py-2 px-2 focus:outline-none",
                        {
                          "border-red-400": errors.email,
                        }
                      )}
                    />
                    {errors.email && (
                      <p className="text-red-500">{errors.email.message}</p>
                    )}
                  </>
                )}
              />
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
