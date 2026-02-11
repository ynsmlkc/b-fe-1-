import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu } from "react-icons/gi";
import { GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

const Header = () => {
  const [isSearchModal, setIsSearchModal] = useState(false);
  const [isMenuModal, setIsMenuModal] = useState(false);
  const cart = useSelector((state) => state.cart);
  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"
        }`}
    >
      <div className="container mx-auto text-white flex justify-between items-center h-full ">
        <Link href="/">
          <Logo />
        </Link>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenuModal === true && "!grid place-content-center"
            }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center ">
            <li className="px-[5px] py-[10px] font-sans uppercase hover:text-primary cursor-pointer ">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[5px] py-[10px] font-sans uppercase hover:text-primary cursor-pointer ">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[5px] py-[10px] font-sans uppercase hover:text-primary cursor-pointer ">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[5px] py-[10px] font-sans uppercase hover:text-primary cursor-pointer ">
              <Link href="/reservat">Book Table</Link>
            </li>
          </ul>
          {isMenuModal && (
            <button>
              <GiCancel
                className="sm:hidden absolute top-7 right-6 text-2xl hover:text-primary cursor-pointer"
                onClick={() => setIsMenuModal(false)}
              />
            </button>
          )}
        </nav>
        <div className="flex items-center cursor-pointer gap-x-4">
          <a href="/auth/login">
            <FaUser className="hover:text-primary " />
          </a>
          <Link href="/cart">
            <span className="relative">
              <FaShoppingCart className="hover:text-primary" />
              <span className="w-4 h-4 text-sm text-black grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 ">
                {cart.quantity}
              </span>
            </span>
          </Link>
          <button onClick={() => setIsSearchModal(true)}>
            <FaSearch className="hover:text-primary transition-all " />
          </button>
          <a href="#" className="md:inline-block hidden ">
            <button className="btn-primary">Order Online</button>
          </a>
          <button onClick={() => setIsMenuModal(true)}>
            <GiHamburgerMenu className="sm:hidden inline-block text-xl hover:text-primary transition-all " />
          </button>
        </div>
      </div>
      {isSearchModal && <Search setIsSearchModal={setIsSearchModal} />}
    </div>
  );
};

export default Header;
