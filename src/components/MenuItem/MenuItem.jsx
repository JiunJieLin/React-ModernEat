import cx from "classnames";

const MenuItem = ({ label, active, onClick }) => {
  // pass onClick as a prop
  return (
    <div
      onClick={onClick}
      className={cx(
        "text-gray-850 py-2 cursor-pointer text-slate-500",
        "hover:text-slate-900 transition-opacity",
        { "underline text-slate-900": active }
      )}
    >
      {label}
    </div>
  );
};

export default MenuItem;
