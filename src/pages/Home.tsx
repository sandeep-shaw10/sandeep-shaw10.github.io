import Hero from "../components/Hero";
import withLayout from "../hooks/withLayout";

const Home = () => {
  return <Hero/>;
}

export default withLayout(Home)