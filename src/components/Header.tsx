import headerBg from "../assets/header-bg.png";
import { IoIosArrowDown } from "react-icons/io";

const Header = () => {
  const handleClick = () => {};

  return (
    <header className="relative w-full h-screen flex items-center justify-center">
      <div className="bg-black w-full h-full">
        <img
          src={headerBg}
          alt="tło strony głównej"
          className="opacity-60 object-cover w-full h-full"
        />
      </div>
      <div className="absolute w-full p-10 text-6xl uppercase  font-thin font-display">
        <h1>minimalizm</h1>
        <h1 className="text-center ">elegancja</h1>
        <h1 className="text-end">komfort</h1>
      </div>
      <button
        className="absolute bottom-5  cursor-pointer"
        onClick={handleClick}
      >
        <IoIosArrowDown
          size={48}
          className="hover:text-primaryGreen transition animate-bounce "
        />
      </button>
    </header>
  );
};
export { Header };
