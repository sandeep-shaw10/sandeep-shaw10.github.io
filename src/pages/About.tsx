import PageIntro from "../components/PageHero";
import Timeline from "../components/Timeline";
import withLayout from "../hooks/withLayout";

export const LogoSection = ({ title, logoArray }: any) => {
  return (
    <div className="pt-16 lg:pt-32 px-4 lg:px-12">
      <div className="text-center">
        <h1 className="flex flex-col font-black leading-none text-shaw-700 uppercase font-bebas-neue sm:text-8xl dark:text-shaw-200">
          <span className="text-3xl sm:text-5xl">{title}</span>
        </h1>
      </div>
      <div className="flex flex-row flex-wrap justify-center">
        {logoArray.length > 0 &&
          logoArray.map((icon: string, index: number) => (
            <div key={index} className="p-4 w-24 h-24">
              <img
                width={100}
                src={`/logo/${icon}.svg`}
                alt={icon}
                title={icon}
                height={100}
              />
            </div>
          ))}
      </div>
    </div>
  );
};

const About = () => {
  const LOGO: string[] = [
    "py",
    "js",
    "ts",
    "node",
    "java",
    "c",
    "php",
    "cpp",
    "bash",
  ];
  const DB: string[] = [
    "mysql",
    "psql",
    "sqlite",
    "mongodb",
    "firebase",
    "supabase",
    "graphql",
  ];
  const FRONT: string[] = [
    "html",
    "css",
    "tailwind",
    "sass",
    "canva",
    "figma",
    "ai",
    "daisyUI"
  ];
  const LIB: string[] = [
    "react",
    "next",
    "django",
    "tensorflow",
    "fastapi",
    "laravel",
  ];
  const TOOL: string[] = ["excel", "powerbi", "git"];
  const desc = `Hello and welcome to my portfolio! My journey into web development
    started with a curiosity to understand how websites work and grew
    into a passion for creating web applications that are both
    functional and visually appealing.`;
  const next = {
    title: "Project",
    link: "/project",
  };

  return (
    <>
      <PageIntro
        title="About"
        desc={desc}
        next={next}
        ThreeModel="Earth"
      />
      <Timeline />
      <LogoSection title={"LANGUAGES"} logoArray={LOGO} />
      <LogoSection title={"DATABASE & QUERY"} logoArray={DB} />
      <LogoSection title={"FRONTEND & TOOLS"} logoArray={FRONT} />
      <LogoSection title={"FRAMEWORK & LIBRARY"} logoArray={LIB} />
      <LogoSection title={"SOFTWARE"} logoArray={TOOL} />


      <div className="py-16 my-16 ">
        <div className="text-center w-3/4 m-auto">
          <div className="px-4 py-8 lg:py-16 bg-shaw-200 dark:bg-shaw-700 rounded-lg shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80">
            <p>
              This Website is made by  <a href="https://github.com/sandeep-shaw10" target="_blank" rel="noopener noreferrer" className="font-semibold text-gray-900 underline dark:text-white decoration-blue-500">Sandeep Shaw</a> using</p>
            <div className="flex flex-col sm:flex-row flex-no-wrap items-center justify-evenly py-4">
              <div className="w-32 p-4">
                <img width='100%' src="/logo/vite.svg" alt="Vite" title="Vite" />
              </div>
              <div className="w-32 p-4"> 
                <img width='100%' src="/logo/daisyUI.svg" alt="daisyUI" title="daisyUI" />
              </div>              
              <div className="w-32 p-4">
                <img width='100%' src="/logo/supabase.svg" alt="Supabase" title="Supabase" />
              </div>
            </div>
            <a href="https://github.com/sandeep-shaw10" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
              Source Code
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default withLayout(About);
