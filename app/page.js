
import ArtForMoreMeaningfull from "@/Components/HomePage/ArtForMoreMeaningfull/ArtForMoreMeaningfull";
import CustomDesignForYourSpace from "@/Components/HomePage/CustomDesignForYourSpace/CustomDesignForYourSpace";
import GallaryGridHome from "@/Components/HomePage/GallaryGridHome/GallaryGridHome";
import MainSlider from "@/Components/HomePage/MainSlider/MainSlider";
import MakeYourOwnCarousal from "@/Components/HomePage/MakeYourOwnCarousal/MakeYourOwnCarousal";
import ReadyToShopCarousal from "@/Components/HomePage/ReadyToShopCarousal/ReadyToShopCarousal";
import SeeTheDifference from "@/Components/HomePage/SeeTheDifference/SeeTheDifference";
import ShopByCategoryHomePage from "@/Components/HomePage/ShopByCategoryHomePage/ShopByCategoryHomePage";

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <GallaryGridHome/>
      <SeeTheDifference/>
      <ShopByCategoryHomePage/>
      <ArtForMoreMeaningfull/>
      <MakeYourOwnCarousal/>
      <CustomDesignForYourSpace/>
      {/* <ReadyToShopCarousal/> */}
    </div>
  );
}