import Stores from "@/data/stores";
import { ThemeContext } from "@/data/context";
import { useContext } from "react";
import Link from "next/link";
const AllStores = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="flex flex-col items-center gap-8 pt-8 bg-white dark:bg-primary-dark">
        <div className="w-full sm:w-[90vw] text-black dark:text-slate-300">
          <h2 className="text-[40px] ">Stores</h2>
          <p>精選商店</p>
        </div>
        <div
          className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4
      lg:grid-cols-3 lg:gap-6"
        >
          {Stores.map((store) => (
            <div
              key={store.id}
              className="card w-96  shadow-xl bg-slate-100 dark:bg-slate-700  text-black dark:text-slate-300"
            >
              <figure>
                <img
                  src={store.src}
                  alt={store.alt}
                  className="w-[400px] h-[250px]"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {store.title}
                  <div className="badge badge-secondary text-slate-200">
                    Sale
                  </div>
                </h2>
                <p>{store.description}</p>
                <div className="card-actions justify-end">
                  <Link
                    href={store.id === 1 ? "/shop" : ""}
                    className="btn btn-primary text-slate-200"
                  >
                    Shop
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllStores;
