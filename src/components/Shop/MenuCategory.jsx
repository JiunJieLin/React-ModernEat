import React from "react";
import MenuItem from "@/components/Shop/MenuItem";

const MenuCategory = ({ data, active, onClick }) => {
  return (
    <div
      className="max-h-screen overflow-x-auto no-scrollbar flex-col sm:flex w-[80vw]
    sm:w-full sm:overflow-auto"
    >
      <div
        className="sm:pb-20  pb-4 flex   items-center 
      sm:items-start sm:flex-col "
      >
        <div className="sm:flex-col flex sm:gap-0 gap-2  items-center justify-center border-t-2 border-b-2 py-3 sm:py-0 sm:border-0">
          <div className="sm:mb-1  w-20 sm:py-2 text-center sm:text-start ">
            精選商品
          </div>
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
    </div>
  );
};

export default MenuCategory;
