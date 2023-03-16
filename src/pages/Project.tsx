import PageIntro from "../components/PageHero";
import ProjectView from "../components/ProjectView";
import withLayout from "../hooks/withLayout";

const Project = () => {
  const desc = `In this section of my portfolio, I showcase my expertise in Full Stack Web Development, 
  Graphic Design, Data Analysis and Data Visualization. 
  I highlight projects where I have utilized these skills to deliver high-quality solutions.`;
  const next = {
    title: "Contact",
    link: "/contact",
  };

  return (
    <>
      <PageIntro
        title="Project"
        desc={desc}
        next={next}
        ThreeModel="Laptop"
      />
      <ProjectView />
    </>
  );
};

export default withLayout(Project);
