
import GallaryGridHome from "@/Components/HomePage/GallaryGridHome/GallaryGridHome";
import MainSlider from "@/Components/HomePage/MainSlider/MainSlider";
import MakeYourOwnCarousal from "@/Components/HomePage/MakeYourOwnCarousal/MakeYourOwnCarousal";
import ReadyToShopCarousal from "@/Components/HomePage/ReadyToShopCarousal/ReadyToShopCarousal";
import ShopByCategoryHomePage from "@/Components/HomePage/ShopByCategoryHomePage/ShopByCategoryHomePage";

export default function Home() {
  return (
    <div>
      <MainSlider/>
      <GallaryGridHome/>
      <ShopByCategoryHomePage/>
      <MakeYourOwnCarousal/>
      <ReadyToShopCarousal/>
    </div>
  );
}