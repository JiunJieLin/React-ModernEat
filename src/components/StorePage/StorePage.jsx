import Navigation from "../Navigation/Navigation";
import Stores from "../HomePage/stores";

const StorePage = () => {
  return (
    <>
      <Navigation />
      <div
        className="grid grid-cols-1 gap-2 sm:grid-cols-2 sm:gap-4
lg:grid-cols-3 lg:gap-6"
      >
        {Stores.map((store) => (
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
    </>
  );
};

export default StorePage;
