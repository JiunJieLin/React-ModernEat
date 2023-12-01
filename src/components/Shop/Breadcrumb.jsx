import { ChevronRightIcon } from "@radix-ui/react-icons";
const Breadcrumb = () => {
  return (
    <div className="hidden sm:flex py-4 border-b px-10 text-sm text-slate-400 ">
      <div className="flex items-center mr-2">
        台灣
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        台北市
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        台北
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="flex items-center mr-2">
        文山區
        <ChevronRightIcon className="ml-2" />
      </div>
      <div className="text-slate-800">非常厲害美食館</div>
    </div>
  );
};
export default Breadcrumb;
