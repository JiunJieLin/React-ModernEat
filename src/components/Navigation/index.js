import { HamburgerMenuIcon } from "@radix-ui/react-icons";
import SearchBar from "@/components/SearchBar";
import Cart from "@/components/Cart";

const Navigation = () => {
	return (
		<div className="flex items-center min-h-[96px] px-10">
			<div className="flex items-center">
				<HamburgerMenuIcon className="w-5 h-5 mr-8" />
				<div className="text-[28px]">
					Modern<b className="ml-2">Eats</b>
				</div>
			</div>

			<div className="flex justify-between flex-1 items-center pl-20 pr-2">
				<SearchBar />
				<Cart />
			</div>
		</div>
	);
};

export default Navigation;
