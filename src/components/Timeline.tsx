export default function Timeline(){

    const DATA = [
        {
            date: 'February 2022',
            work: 'Application UI code in Tailwind CSS',
            desc: 'Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order E-commerce &amp; Marketing pages.',
            info: ['Learn More', '/']
        },
        {
            date: 'March 2022',
            work: 'Marketing UI design in Figma',
            desc: 'All of the pages and components are first designed in Figma and we keep a parity between the two versions even as we update the project.',
            info: []
        },
        {
            date: 'April 2022',
            work: 'E-Commerce UI code in Tailwind CSS',
            desc: 'Get started with dozens of web components and interactive elements built on top of Tailwind CSS.',
            info: []
        },
    ]


    return(
        <div className="pt-16 lg:pt-32 px-4 lg:px-12">
        <div className="text-center">
          <h1 className="flex flex-col font-black leading-none text-shaw-700 uppercase font-bebas-neue sm:text-8xl dark:text-shaw-200">
            <span className="text-3xl sm:text-5xl">TIMELINE</span>
          </h1>
        </div>
        <div className="pt-4 mx-12 lg:mx-60">
        <ol className="relative border-l border-gray-200 dark:border-gray-700"> 
        {
            DATA.map(({date, work, desc, info}, index) => <li className={`${index !== DATA.length-1 ? 'mb-10' : ''} ml-4`} key={index}>
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700" />
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">{date}</time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{work}</h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">{desc}</p>
            { (info.length > 0) && <a href={info[1]} target="_blank" rel="noopener noreferrer" className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700">{info[0]}<svg className="w-3 h-3 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg></a>}
          </li>)
        }                 
      </ol>
      </div>
      </div>
    )
}