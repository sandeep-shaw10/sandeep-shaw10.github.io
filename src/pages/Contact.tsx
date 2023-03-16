import withLayout from "../hooks/withLayout";
import PageIntro from "../components/PageHero";

const Contact = () => {
  const desc = ` Let's connect and explore the possibilities!. 
  As I am currently a full-time student, so my availability to respond may be limited. 
  However, I will do my best to get back to you as soon as possible & would be happy to 
  discuss any opportunities for collaboration, query or inquires.`;
  const next = {
    title: "Profile",
    link: "/",
  };

  return (
    <>
    <PageIntro
      title="Contact"
      desc={desc}
      next={next}
      ThreeModel="Blob"
    />

    <div>
      <section className="pt-8 lg:pt-16">
        <div className="py-8 lg:py-16 px-8 mx-auto max-w-screen-md glass rounded-lg shadow-lg">
          <div className="text-center">
            <h1 className="flex flex-col font-black leading-none text-shaw-700 uppercase font-bebas-neue sm:text-8xl dark:text-shaw-200">
              <span className="text-3xl sm:text-5xl pb-8">GET IN TOUCH</span>
            </h1>
          </div>
          <form action="#" className="space-y-8">
            <div>
              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-shaw-500 focus:border-shaw-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-shaw-500 dark:focus:border-shaw-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required />
            </div>
            <div>
              <label htmlFor="subject" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Subject</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-shaw-500 focus:border-shaw-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-shaw-500 dark:focus:border-shaw-500 dark:shadow-sm-light" placeholder="Let us know how we can help you" required />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
              <textarea id="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-shaw-500 focus:border-shaw-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-shaw-500 dark:focus:border-shaw-500" placeholder="Leave a comment..." defaultValue={""} />
            </div>
            <button type="submit" className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-shaw-700 sm:w-fit hover:bg-shaw-800 focus:ring-4 focus:outline-none focus:ring-shaw-300 dark:bg-shaw-600 dark:hover:bg-shaw-700 dark:focus:ring-shaw-800">Send message</button>
          </form>
        </div>
      </section>
    </div>
    </>
  );
};


export default withLayout(Contact);