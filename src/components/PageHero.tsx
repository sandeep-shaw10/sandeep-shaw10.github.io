import { Link } from "react-router-dom";
import useThemes from "../hooks/contextTheme";
import React, { lazy, Suspense } from 'react';
import Loader, { Loader2 } from "./Loader";


const Earth = lazy(() => import('./Canvas/Earth'));
const Laptop = lazy(() => import('./Canvas/Laptop'));
const Blob = lazy(() => import('./Canvas/Blob'));

const PageIntro = ({ title, desc, next, ThreeModel }: any) => {

  const { theme, setTheme } = useThemes();

  return (
    <div className="flex flex-col-reverse lg:flex-row justify-around items-center ">
      <div className="lg:w-1/2 p-4 lg:py-12 lg:pr-16">
        <div className="flex flex-col px-6 sm:pr-12 pt-4 lg:pt-0">
          <span className="w-20 h-2 mb-6 sm:mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            <span className="text-5xl sm:text-7xl">{title}</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base dark:text-white pt-6 text-justify md:text-left">{desc}</p>
          <div className="flex mt-8">
            <Link
              to={next.link}
              className="px-4 py-2 mr-4 text-white uppercase rounded-lg text-sm lg:text-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-center"
            >
              {next.title}
            </Link>
            <button
              onClick={setTheme}
              className="w-24 px-4 py-2 uppercase rounded-lg text-sm text-center lg:text-md text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
            >
              {theme ? "NIGHT" : "DAY"}
            </button>
          </div>
        </div>
      </div>
      <div className="w-72 h-72 lg:w-96 lg:h-96">
      <Suspense fallback={<Loader2/>}>
        { ThreeModel === 'Earth' && <Earth/> }
        { ThreeModel === 'Blob' && <Blob/> }
        { ThreeModel === 'Laptop' && <Laptop/> }
      </Suspense>
      </div>
    </div>
  );
};

export default PageIntro;
