import HomePageBio from "../components/HomePageBio";
import InstaSlide from "../components/InstaSlide";
import { InstaSlideProvider } from "../context/InstaSlideContext";
import SpinningText from "../components/SpinningText";

function HomePage() {

  return (
    <div>
      <SpinningText className="h-screen"/>
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
