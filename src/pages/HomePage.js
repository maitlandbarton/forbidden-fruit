import HomePageBio from "../components/HomePageBio";
import InstaSlide from "../components/InstaSlide";
import { InstaSlideProvider } from "../context/InstaSlideContext";
import SpinningText from "../components/SpinningText";
import CustomOrder from "../components/reusables/CustomOrder";
import gridBg from "../images/grid.png";

function HomePage() {
  return (
    <div style={{ backgroundImage: `url(${gridBg})` }}>
      <div className="w-screen">
        <SpinningText/>
      </div>
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
