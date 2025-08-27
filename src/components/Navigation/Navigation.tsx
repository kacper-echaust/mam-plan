import { useEffect, useState } from "react";
import logo from "../../assets/logo.png";
import { MenuItem } from "./MenuItem";
const Navigation = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full h-24 z-10 flex items-center justify-between p-10">
      {" "}
      <div
        className={`h-full left-0 w-full absolute ${
          scrolled && "bg-black opacity-60 transition"
        }`}
      ></div>
      <a href="#" className="cursor-pointer w-24 z-10">
        <img src={logo} alt="Logo Mam Plan" />
      </a>
      <div className="w-3/4 z-10">
        <ul className="uppercase flex justify-around">
          <MenuItem scrollTo="#offer" text="oferta" />
          <MenuItem scrollTo="#realization" text="realizacje/wizualizacje" />
          <MenuItem scrollTo="#aboutUs" text="o nas" />
          <MenuItem scrollTo="#contact" text="kontakt" />
        </ul>
      </div>
    </nav>
  );
};

export { Navigation };
