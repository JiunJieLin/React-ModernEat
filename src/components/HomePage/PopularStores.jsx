import Stores from "../../data/stores";
import Link from "next/link";
const PopularStores = () => {
  const selectedStores = Stores.slice(0, 4);
  return (
    <div className="flex flex-col items-center gap-8 mt-8">
      <div className="flex items-center  justify-between w-full sm:w-[90vw]">
        <h2 className="text-[40px] sm:text-[40px]">Popular Stores</h2>
        <Link href="/stores" className="btn btn-primary">
          View All
        </Link>
      </div>
      <div
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4
      lg:grid-cols-3 lg:gap-10"
      >
        {selectedStores.map((store) => (
          <div
            key={store.id}
            className="card w-96 shadow-xl bg-slate-100 dark:bg-slate-700 dark:text-white"
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
                <div className="badge badge-secondary">Sale</div>
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
  );
};

export default PopularStores;
