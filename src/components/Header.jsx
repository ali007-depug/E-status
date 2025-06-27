import { useState } from "react";
import { BsArrowDown } from "react-icons/bs";
export default function Header({ logoSrc, title, secTitle, navLinks = [] }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);

  const links = navLinks.map((link) => {
    return (
      <li
        key={link.id}
        className="flex items-center justify-evenly cursor-pointer relative" 
        onClick={()=>setActiveIndex(link.id)}
      >
        {/* arrow menu */}
        <BsArrowDown size={10} />
        <a>{link.link}</a>
        <ul
          className={` absolute top-10 bg-sky-200 rounded p-2 min-w-[150px] ${
            activeIndex === link.id ? "block" : "hidden"
          }`}
        >
          <h1>{link?.content}</h1>
          <p>{link.href}</p>
        </ul>
      </li>
    );
  });

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <>
      {/* overlay */}
      <div
        className={`fixed inset-0 bg-black/60 z-20 transition-opacity duration-300 ${
          isMenuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      ></div>

      {/* header  */}
      <header className="flex items-center justify-between py-4 px-dyp z-30 ">
        {/* avatar + name  */}

        <div className="header__avatarWithInfo  ">
          <img className="size-12 rounded-full" src={logoSrc} alt="" />
          <div className="header__info mt-2 text-p">
            <h2 className={`text-lg font-bold sm:text-xl`}>{title}</h2>
            <p className="text-xs font-semiboldbold empty:hidden">{secTitle}</p>
          </div>
        </div>

        {/* nav */}
        <nav aria-label="mainNav" className="z-30">
          {/* show hamburger menu on the mobile screen */}
          <button
            onClick={toggleMenu}
            className="sm:hidden p-2 rounded-md focus:outline-none focus:ring-2 focus:ring- cursor-pointer"
            aria-expanded={isMenuOpen}
            aria-controls="mobileMenu"
            aria-label={isMenuOpen ? "close menu" : "open menu"}
          >
            <img
              src={isMenuOpen ? "./icon-close.svg" : "./icon-hamburger.svg"}
              alt=""
              aria-hidden="true"
            />
          </button>

          {/* mobile nav */}
          <ul
            id="mobileMenu"
            className={
              isMenuOpen
                ? "bg-bg flex flex-col justify-center items-center absolute right-0 mt-4 w-full text-center min-h-90 [&_li]:w-fit [&_a]:px-4 [&_a]:py-2 [&_a]:min-w-[90px] [&_a]:inline-block [&_a]:text-p [&_a]: [&_a]:my-4 [&_a]:rounded-[5px] [&_a]:capitalize [&_a]:font-semibold "
                : "hidden"
            }
          >
            {links}
          </ul>

          {/* desktop nav */}
          <ul className="hidden sm:flex space-x-8  items-center min-h-[90px] [&_li]:w-fit  [&_a]:px-4 [&_a]:py-2  [&_a]:inline-block  [&_a]:capitalize [&_a]:font-semibold [&_a]:text-p [&_a]:h [&_a] ">
            {links}
          </ul>
        </nav>
      </header>
    </>
  );
}
