import HomePageBio from "../components/HomePageBio";
import InstaSlide from "../components/InstaSlide";
import { InstaSlideProvider } from "../context/InstaSlideContext";
import SpinningText from "../components/SpinningText";

function HomePage() {

  return (
    <div className="h-screen">
      <SpinningText/>
      <h1 className="text-slate-700 text-6xl">THIS IS THE HOME PAGE</h1>
      <HomePageBio/>
      <InstaSlideProvider>
        <InstaSlide/>
      </InstaSlideProvider>
      <p>Have an idea for a custom order? Please reach out!</p>
      <a href="mailto:forbiddenfruitberlin@gmail.com">forbiddenfruitberlin@gmail.com</a>
    </div>
  );
}

export default HomePage;
