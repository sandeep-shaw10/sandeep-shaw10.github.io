import React from "react";
import { Link } from "react-router-dom";
import useThemes from "../hooks/contextTheme";
import Footer from "./Footer";

const Layout: React.FC<any> = ({ children }: any) => {
  const { theme, setTheme } = useThemes();

  const links = [
    { name: "About", href: "/about" },
    { name: "Project", href: "/project" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <div className="bg-shaw-0 text-shaw-900 dark:bg-shaw-900 dark:text-shaw-0 flex flex-col min-h-screen">
      <div className="glassmorphism1"></div>
      <div className="glassmorphism2"></div>
      <div className="glassmorphism3"></div>
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          <div className="w-full navbar">
            <div className="flex-none md:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block w-6 h-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="flex-1 px-2 mx-2">
              <div style={{ width: '8rem' }}>
                <Link to="/">
                  <img loading="lazy" src="/logo.svg" alt="SHAW LOGO" />
                </Link>
              </div>
            </div>
            <div className="flex-none hidden md:block">
              <ul className="menu menu-horizontal">
                {links &&
                  links.map(({ name, href }, index) => (
                    <li key={index}>
                      <Link className="no-hover-effect" to={href}>
                        {name}
                      </Link>
                    </li>
                  ))}
                <li>
                  <div className="form-control no-hover-effect">
                    <label className="label cursor-pointer">
                      <input
                        type="checkbox"
                        className="toggle toggle-accent dark:toggle-success"
                        checked={theme}
                        onChange={setTheme}
                      />
                    </label>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div className="py-4 px-4 lg:px-8 pb-16 py-8 flex-grow">
            {children}
          </div>

          <Footer />
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          
          <ul className="menu p-4 w-80 bg-shaw-100 dark:bg-shaw-700">
            <li>
            <div className="flex-1 px-2 mx-2">
              <div style={{ width: '8rem' }}>
                <Link to="/">
                  <img loading="lazy" src="/logo.svg" alt="SHAW LOGO" />
                </Link>
              </div>
            </div>
            </li>
            {links &&
              links.map(({ name, href }, index) => (
                <li key={index}>
                  <Link className="no-hover-effect" to={href}>
                    {name}
                  </Link>
                </li>
              ))}

            <div className="form-control px-3">
              <label className="label cursor-pointer">
                <span>{theme ? "Dark" : "Light"}</span>
                <input
                  type="checkbox"
                  className="toggle toggle-accent"
                  checked={theme}
                  onChange={setTheme}
                />
              </label>
            </div>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Layout;
