import Flipcard from "./Flipcard";
import Link from "next/link";
import Navigation from "@/components/Navigation/Navigation.jsx";
import PopularStores from "@/components/HomePage/PopularStores";
import { ThemeContext } from "@/data/context";
import { useContext } from "react";

const HomePage = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-white dark:bg-primary-dark">
        <Navigation />
        <div
          className="min-h-screen bg-cover bg-center relative"
          style={{
            backgroundImage: `url("https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`,
          }}
        >
          <p className=" absolute top-[200px] left-10 text-[30px] sm:text-[40px]">
            肚子餓了嗎？最多種類手刀下單！
          </p>
          <div className=" absolute top-[300px] left-10  text-[20px] flex gap-4  items-end">
            <Link
              href="/shop"
              className="px-2 py-3 text-white bg-slate-700 rounded-md hover:opacity-80"
            >
              尋找食物
            </Link>

            <p className="font-bold ">
              或
              <a href="" className="underline ml-2">
                登入
              </a>
            </p>
          </div>
        </div>
        <PopularStores />
        <Flipcard />
      </div>
    </div>
  );
};

export default HomePage;

// https://www.healingdaily.com.tw/media/article/00/19/1915_4c1f8b8cc2dd.jpeg
