import React from "react";
import NavbarData from "../../models/Navbar";

const Navbar = () => {
  const { logo, links, action } = NavbarData;

  return (
    <nav>
      <div className="hidden lg:block">
        <div className="w-screen justify-around items-center flex p-5">
          <div>
            <a href={logo.link}>
              <h1 className="font-head font-bold text-2xl">{logo.name}</h1>
            </a>
          </div>
          <div>
            <ul className="flex items-center justify-center gap-10">
              {links.map((link) => (
                <li className="relative group" key={link.parent}>
                  {link.link ? (
                    <a
                      href={link.link}
                      className="font-semibold cursor-pointer hover:opacity-50"
                    >
                      {link.parent}
                    </a>
                  ) : (
                    <button className="font-semibold cursor-default hover:opacity-50">
                      {link.parent}
                    </button>
                  )}
                  {link.children && (
                    <div className="absolute top-0 left-0 transition translate-y-5 invisible opacity-0 group-hover:opacity-100 group-hover:visible animate-short group-hover:transform z-50 min-w-[250px] transform">
                      <div className="relative top-6 p-2 bg-white rounded-xl shadow-xl w-full flex flex-col z-50">
                        <div className="w-10 h-10 bg-white transform rotate-45 absolute top-0 z-0 translate-x-0 rounded-sm"></div>
                        {link.children && (
                          <div
                            className={`grid ${
                              link.children.length > 4
                                ? "grid-cols-2 min-w-[500px]"
                                : "grid-cols-1"
                            }`}
                          >
                            {link.children.map((child) => (
                              <a href={child.link} className="z-50">
                                <div className="py-2 px-4 hover:bg-slate-100 rounded-lg w-full">
                                  <p className="font-semibold text-slate-800">
                                    {child.name}
                                  </p>
                                  <p className="text-sm text-slate-500">
                                    {child.desc}
                                  </p>
                                </div>
                              </a>
                            ))}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <a
              href={action.link}
              className="rounded-full px-4 py-2 font-semibold bg-white bg-opacity-10 hover:bg-opacity-20 animtate-smooth flex items-center group"
            >
              <span className="mr-2">{action.name}</span>
              <svg
                className="stroke-current"
                width="10"
                height="10"
                stroke-width="2"
                viewBox="0 0 10 10"
                aria-hidden="true"
              >
                <g>
                  <path
                    className="opacity-0 group-hover:opacity-100 animate-short"
                    d="M0 5.5h7"
                  ></path>
                  <path
                    className="opacity-100 fill-transparent group-hover:transform group-hover:translate-x-1 animate-short"
                    d="M1 1l3 5-5 5"
                  ></path>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>

      <div className="block lg:hidden">
        <div className="p-7">
          <div className="flex justify-between items-center">
            <a href={logo.link}>
              <h1 className="font-head font-bold text-2xl">{logo.name}</h1>
            </a>
            <a className="bg-white bg-opacity-5 py-3 px-4 rounded-full">
              <svg width="16" height="10" viewBox="0 0 16 10">
                <title>Open mobile navigation</title>
                <g fill="white">
                  <rect y="8" width="16" height="2" rx="1"></rect>
                  <rect y="4" width="16" height="2" rx="1"></rect>
                  <rect width="16" height="2" rx="1"></rect>
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
