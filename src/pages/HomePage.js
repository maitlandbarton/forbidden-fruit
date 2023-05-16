import HomePageBio from "../components/HomePageBio";
import InstaSlide from "../components/InstaSlide";
import { InstaSlideProvider } from "../context/InstaSlideContext";
import SpinningText from "../components/SpinningText";
import CustomOrder from "../components/reusables/CustomOrder";

function HomePage() {
  return (
    <div>
      <SpinningText className="h-screen" />
      <HomePageBio />
      <InstaSlideProvider>
        <div className="container mx-auto">
          <InstaSlide />
        </div>
      </InstaSlideProvider>
      <CustomOrder />
    </div>
  );
}

export default HomePage;
