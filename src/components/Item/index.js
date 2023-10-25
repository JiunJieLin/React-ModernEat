import AddButton from "../AddButton/AddButton";
const Item = ({ data }) => {
  return (
    <div className="mb-1 p-4 hover:shadow-xl">
      <div className="aspect-video overflow-hidden flex items-center relative">
        <img src={data.image} alt="" />
        <AddButton />
      </div>
      <div className="py-2 text-stone-950">
        <div>{data.title}</div>
        <div className="text-sm opacity-70">${data.price}</div>
      </div>
    </div>
  );
};
export default Item;
