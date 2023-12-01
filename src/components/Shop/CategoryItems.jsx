import { forwardRef, useEffect } from "react";
import map from "lodash/map";
import Item from "@/components/Shop/Item";

const CategoryItems = forwardRef(function CategoryItems(
  { data, active, onClick },
  ref
) {
  useEffect(() => {
    const activeElement = document.querySelector(`[data-name="${active}"]`);
    activeElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [active]);

  return (
    <div className="pb-[100px] " ref={ref}>
      {map(data, (items, title) => {
        return (
          <div key={title} data-cat={title}>
            <div
              data-name={title}
              className="px-4 text-xl font-bold text-slate-900 mt-4"
            >
              {title}
            </div>
            <div className="sm:grid-cols-4 grid grid-cols-1">
              {items?.map((item) => {
                return <Item key={item.id} data={item} onClick={onClick} />;
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
});

export default CategoryItems;
