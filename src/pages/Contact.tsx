import withLayout from "../hooks/withLayout";
import PageIntro from "../components/PageHero";
import Form from "../components/Form";

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

    <Form/>
    
    </>
  );
};


export default withLayout(Contact);