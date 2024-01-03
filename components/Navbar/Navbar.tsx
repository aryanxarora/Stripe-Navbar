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
            <a className="bg-white bg-opacity-5 py-3 px-4 rounded-full cursor-pointer">
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

      <div className="block lg:hidden p-5">
        <div className="bg-white rounded-lg w-full min-h-[600px] h-auto p-3 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between pb-5">
              <a href={logo.link}>
                <h1 className="font-head font-bold text-2xl text-indigo-500">
                  {logo.name}
                </h1>
              </a>
              <button>
                <svg width="40" height="40" viewBox="0 0 40 40">
                  <title>Close mobile navigation</title>
                  <path
                    d="M25.6 14.3a1 1 0 0 1 0 1.4l-4.24 4.25 4.25 4.24a1 1 0 1 1-1.42 1.42l-4.24-4.25-4.24 4.25a1 1 0 0 1-1.42-1.42l4.25-4.24-4.25-4.24a1 1 0 0 1 1.42-1.42l4.24 4.25 4.24-4.25a1 1 0 0 1 1.42 0z"
                    fill="#4F5B76"
                    fill-rule="evenodd"
                  ></path>
                </svg>
              </button>
            </div>
            <div>
              {links.map((link, index) => (
                <a href={link.link ? link.link : "#"}>
                  <div>
                    <div className="py-3 px-2 flex justify-between items-center my-2">
                      <h1 className="text-slate-600 font-semibold">
                        {link.parent}
                      </h1>
                      {link.link ? null : (
                        <svg
                          fill="none"
                          viewBox="0 0 16 16"
                          width="16"
                          height="16"
                        >
                          <path
                            className="fill-slate-600"
                            d="M5.29316 2.9087c-.39088-.39089-.39088-1.02464 0-1.41552.39089-.39089 1.02464-.39089 1.41553 0l6.29971 6.29973c.3905.39052.3905 1.02368 0 1.41421L6.70869 15.5068c-.39089.3909-1.02464.3909-1.41553 0-.39088-.3908-.39088-1.0246 0-1.4155l5.59134-5.59129L5.29316 2.9087Z"
                          ></path>
                        </svg>
                      )}
                    </div>
                    {index !== links.length - 1 && (
                      <hr className="border-dashed" />
                    )}
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-slate-100 rounded w-full h-16 mt-20 flex items-center justify-center">
            <a
              href={action.link}
              className="rounded-full px-4 py-2 font-semibold bg-indigo-500 text-white text-md animtate-smooth flex items-center group"
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
    </nav>
  );
};

export default Navbar;
