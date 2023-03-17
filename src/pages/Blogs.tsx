import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { Loader2 } from "../components/Loader";
import withLayout from "../hooks/withLayout";
import { formatDate, truncateText } from "../utils/utility";
import supabase from "../utils/supabase";

const Blog = () => {
  const [blog, setBlog] = useState<any>([]);
  const [load, setLoad] = useState<boolean>(true);
  const [loadBtn, setLoadBtn] = useState<boolean>(false);
  const [allData, setAllData] = useState<boolean>(false);
  const [offsetVal, setOffsetVal] = useState<number>(0)
  const PAGE_SIZE = 1

  useEffect(() => {
    const fetchBlog = async () => {
      setLoad(true);
      await supabase.from("Blogs").select("*").order("featured").range(offsetVal, offsetVal + PAGE_SIZE - 1).then(({ data, error }) => {
          if (error) {
            toast.error("Failed to Load");
          } else {
            if (data) {
                if(data.length < PAGE_SIZE){ setAllData(true) }
              setBlog(data);
            } else {
              toast.warn("No Blogs Added");
            }
          }
        });
      setLoad(false);
    };
    fetchBlog();
    return () => {};
  }, []);


  useEffect(() => {
    const loading = async() => {
        setLoadBtn(true)
        await supabase.from("Blogs").select("*").order("featured").range(offsetVal, offsetVal + PAGE_SIZE - 1).then(({ data, error }) => {
            if (error) {
              toast.error("Failed to Load");
            } else {
              if (data) {
                if(data.length < PAGE_SIZE){ setAllData(true) }
                setBlog((prevState: any ) => {
                    return [...prevState, ...data]
                } );
              } else {
                toast.warn("No Blogs Found");
              }
            }
          });
          setLoadBtn(false)
    }

    if(offsetVal !== 0){
        loading()
    }
    
  }, [offsetVal])

  return (
    <>
      {load ? (
        <Loader2 />
      ) : (
        <div>
          {blog.length === 0 ? (
            <div className="text-lg text-center pt-32">NO BLOG ADDED</div>
          ) : (
            <div className="mx-0 lg:mx-16">
              <div className="flex flex-col lg:flex-row justify-start items-start lg:items-center">
                <div className="w-full">
                  <img
                    className="rounded-lg shadow-lg w-full"
                    src={blog[0].image}
                    alt={blog[0].image}
                    onError={({ currentTarget }) => {
                      currentTarget.onerror = null; // prevents looping
                      currentTarget.src = "/default.jpg";
                    }}
                  />
                </div>
                <div className="px-4 lg:px-16 py-4 text-left w-full lg:w-2/3 lg:w-3/4">
                  <div className="text-left text-lg text-shaw-700 dark:text-shaw-300 mb-2">
                    {formatDate(blog[0].created_at)}
                  </div>
                  <a
                    href={blog[0].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-shaw-900 underline dark:text-white decoration-shaw-500 "
                  >
                    <div className="text-left text-2xl sm:text-4xl lg:text-6xl mb-2">
                      {blog[0].title}
                    </div>
                  </a>
                  <div>
                    {blog[0].tags &&
                    blog[0].tags !== "" &&
                    blog[0].tags !== undefined
                      ? blog[0].tags
                          .split(",")
                          .map((tag: any, index: number) => (
                            <div
                              key={index}
                              className="badge bg-white badge-outline mr-2 mb-2 px-2 py-1 rounded-full border border-shaw-400 text-shaw-600 text-xs font-semibold"
                            >
                              {tag}
                            </div>
                          ))
                      : null}
                  </div>
                  <div className="pt-2 font-light text-shaw-800 dark:text-shaw-200 text-sm lg:text-base">
                    {blog[0].desc && truncateText(blog[0].desc, 200)}
                  </div>
                  <div className="pt-2 lg:pt-8">
                    <a
                      href={blog[0].link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-24 px-4 py-2 uppercase rounded-lg text-sm text-center lg:text-md text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80"
                    >
                      Visit
                    </a>
                  </div>
                </div>
              </div>

              <div className="lg:w-1/2 p-4 lg:py-12 lg:pr-16">
                <div className="px-6 sm:pr-12 pt-4 lg:pt-0">
                  <span className="w-20 h-2 mb-6 sm:mb-12 bg-gray-800 dark:bg-white"></span>
                  <h1 className="flex flex-col text-6xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-8xl dark:text-white">
                    <span className="text-5xl sm:text-7xl">BLOG</span>
                  </h1>
                </div>
              </div>

              <div className="pt-4 lg:pt-16 flex flex-row flex-wrap justify-center md:justify-start">
                {blog.map((data: any, index: number) => (
                  <div
                    key={index}
                    className="card w-full md:w-1/3 lg:w-1/4 mx-2 mb-4 glass"
                  >
                    <a
                      href={data.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <figure className="relative overflow-hidden rounded-lg">
                        <img
                          className="w-full h-auto"
                          src={data.image}
                          alt={data.title}
                          onError={({ currentTarget }) => {
                            currentTarget.onerror = null; // prevents looping
                            currentTarget.src = "/default.jpg";
                          }}
                          style={{
                            aspectRatio: 16 / 9,
                            flex: 1,
                            flexDirection: "row",
                          }}
                        />
                      </figure>
                      <div className="card-body p-4">
                        <h2 className="card-title font-semibold text-lg mb-2">
                          {data.title}
                        </h2>
                        <p className="text-left text-shaw-600 dark:text-shaw-200 mb-2 md:text-sm">
                          {data.desc && truncateText(data.desc, 60)}
                        </p>
                        <div className="pt-2 font-light text-shaw-800 dark:text-shaw-200 text-sm lg:text-base">
                          {data.tags &&
                          blog[0].tags !== "" &&
                          blog[0].tags !== undefined
                            ? blog[0].tags
                                .split(",")
                                .map((tag: any, index: number) => (
                                  <div
                                    key={index}
                                    className="badge bg-white badge-outline mr-2 mb-2 px-2 py-1 rounded-full border border-shaw-400 text-shaw-600 text-xs font-semibold"
                                  >
                                    {tag}
                                  </div>
                                ))
                            : null}
                        </div>
                      </div>
                    </a>
                  </div>
                ))}
              </div>

              { !allData && <div className="text-center">
                <button className={`btn ${loadBtn ? 'loading' : 'btn-wide' }`} onClick={() => setOffsetVal((x) => x+1)}>Load More</button>
              </div>}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default withLayout(Blog);
