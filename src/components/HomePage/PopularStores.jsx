import Stores from "./stores";

const PopularStores = () => {
  const selectedStores = Stores.slice(0, 4);
  return (
    <div className="flex flex-col items-center gap-8 mt-8">
      <div className="flex items-center  justify-between w-[80vw] ">
        <h2 className="text-[30px] sm:text-[40px]">Popular Stores</h2>
        <button className="btn btn-primary">View All</button>
      </div>
      <div
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4
      lg:grid-cols-3 lg:gap-6"
      >
        {selectedStores.map((store) => (
          <div key={store.id} className="card w-96 bg-base-100 shadow-xl">
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
                <button className="btn btn-primary">Shop</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularStores;
