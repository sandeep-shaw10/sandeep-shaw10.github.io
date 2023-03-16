import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex lg:flex-row flex-col-reverse content-center justify-around items-center w-100 lg:h-full">
      <div className="lg:w-1/2 pb-4 lg:pl-16">
        <div className="flex flex-col px-6 sm:px-12 lg:pl-16">
          <span className="w-20 h-2 mb-6 sm:mb-12 bg-gray-800 dark:bg-white"></span>
          <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
            <span className="text-5xl sm:text-7xl">SANDEEP SHAW</span>
          </h1>
          <p className="text-sm text-gray-700 sm:text-base dark:text-white pt-6 text-justify md:text-left">
            Full stack web developer and graphic designer with a passion for
            crafting exceptional digital experiences. Specialization in creating
            custom web solutions that are both beautiful and functional by
            delivering high-quality work that exceeds expectations.
          </p>
          <div className="flex mt-8">
            <Link to="/about" className="px-4 py-2 mr-4 text-white uppercase rounded-lg text-sm lg:text-md text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 text-center"
            >
              ABOUT
            </Link>
            <a
              href="#"
              className="px-4 py-2 uppercase rounded-lg text-sm text-center lg:text-md text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
            >
              RESUME
            </a>
          </div>
        </div>
      </div>
      <div className="p-8 pt-2 lg:py-8 lg:px-16 lg:w-1/2">
        <figure>
          <img
            className="w-fit m-auto md:max-w-sm rounded-lg neon-shadow neon-shadow-1"
            src="/test.jpg"
            alt="Album"
            style={{ minWidth: `200px` }}
            loading="lazy"
          />
        </figure>
      </div>

      
    </div>
  );
}
