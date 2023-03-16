import { useEffect, useState } from "react";
import ProjectData from "../assets/ProjectData";

const topicAll = ["*", "Python", "Web", "Django", "React"];

const ProjectView = () => {
  const [topic, setTopic] = useState(topicAll[0]);
  const [Card, setCard] = useState(ProjectData);

  useEffect(() => {
    if (topic === topicAll[0]) {
      setCard(ProjectData);
    } else {
      setCard(() => {
        return ProjectData.filter(({ category }) => category.includes(topic));
      });
    }
  }, [topic]);

  return (
    <div className="pt-16 lg:pt-32 px-4 lg:px-12">
      <div className="hidden sm:block  text-center">
        <div className="btn-group">
          {topicAll.map((data, index) => {
            return (
              <input
                key={index}
                type="radio"
                name="options"
                data-title={data}
                className="btn text-shaw-800 dark:text-shaw-100 bg-shaw-100 dark:bg-shaw-800 border-none dark:hover:bg-shaw-600 hover:bg-shaw-300"
                defaultChecked={data === topic}
                onClick={() => setTopic(data)}
              />
            );
          })}
        </div>
      </div>

      <div className="block sm:hidden">
        <div className="dropdown ml-2 mb-2">
          <label
            tabIndex={0}
            className="uppercase text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          >
            Filter
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-shaw-100 dark:bg-shaw-800 rounded-box w-52"
          >
            {topicAll.map((data, index) => (
              <li key={index} onClick={() => setTopic(data)}>
                {
                  <button className={data === topic ? "bg-shaw-500" : ""}>
                    {data}
                  </button>
                }
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="pt-4 lg:pt-16 flex flex-row flex-wrap justify-around">
        {Card.length > 0 ? (
          Card.map(({ title, desc, img, link, featured, tags }, index) => (
            <div
              key={index}
              className="card w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 mx-2 mb-4 glass"
            >
              <a href={link} target="_blank" rel="noopener noreferrer">
                <figure className="relative overflow-hidden rounded-lg">
                  <img
                    className="w-full h-auto"
                    src={img}
                    alt={title}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/default.jpg";
                    }}
                  />
                </figure>
                <div className="card-body p-4">
                  <h2 className="card-title font-semibold text-lg mb-2">
                    {title}
                    {featured && (
                      <div className="inline-block ml-2 px-2 py-1 rounded-full bg-green-500 text-white text-xs font-semibold">
                        {featured}
                      </div>
                    )}
                  </h2>
                  <p className="text-left text-shaw-600 dark:text-shaw-200 mb-4 md:text-sm">
                    {desc}
                  </p>
                  <div className="card-actions flex flex-wrap justify-start">
                    {tags.length > 0 &&
                      tags.map((tag, index) => (
                        <div
                          key={index}
                          className="badge bg-white badge-outline mr-2 mb-2 px-2 py-1 rounded-full border border-shaw-400 text-shaw-600 text-xs font-semibold"
                        >
                          {tag}
                        </div>
                      ))}
                  </div>
                </div>
              </a>
            </div>
          ))
        ) : (
          <div className="text-center py-32">
            <h1>No Project Added... </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectView;
