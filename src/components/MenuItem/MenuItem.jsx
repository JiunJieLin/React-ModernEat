import cx from "classnames";

const MenuItem = ({ label, active, onClick }) => {
  // pass onClick as a prop
  return (
    <div
      onClick={onClick}
      className={cx(
        "text-gray-850 sm:py-2 text-lg sm:w-full w-20 cursor-pointer text-slate-500 hover:text-slate-900  transition-opacity flex  sm:justify-start justify-center items-center ",
        { " text-slate-900 font-bold": active }
      )}
    >
      <p className="flex">{label}</p>
    </div>
  );
};

export default MenuItem;
