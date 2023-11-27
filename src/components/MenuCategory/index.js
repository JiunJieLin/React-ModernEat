import MenuItem from "@/components/MenuItem/MenuItem";

const MenuCategory = ({ data, active, onClick }) => {
  return (
    <div className="max-h-screen overflow-auto no-scrollbar">
      <div className="pb-20 ">
        <div className="mb-1 underline font-bold text-stone-950">最熱門</div>
        {data?.map((item, index) => {
          return (
            <MenuItem
              key={item}
              label={item}
              active={active === index}
              onClick={() => onClick(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default MenuCategory;
