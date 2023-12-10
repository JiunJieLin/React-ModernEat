import { useEffect, useState } from "react";
import Link from "next/link";
const Cart = ({ totalCartCount }) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null;
  } // 在伺服器端不顯示內容
  return (
    <Link href="/shoppinglist">
      <div className="bg-white dark:bg-primary-dark text-gray-400 hover:text-black  focus:text-black text-sm py-3 rounded-3xl cursor-pointer hover:opacity-80 dark:hover:text-white transition-opacity flex items-center gap-3 sm:flex sm:px-4 sm:border-gray-200 sm:dark:border-gray-700 sm:border-2 hover:border-slate-700 dark:hover:border-white">
        <div className="hidden sm:block ">{totalCartCount} items |</div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6 "
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
    </Link>
  );
};

export default Cart;
