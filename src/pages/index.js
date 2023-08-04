import HomeBgImage from "../../components/HomeBgImage";
import Link from "next/link";
import { TabsCard } from "../../components/card/TabsCard";
import BannerImageCard from "../../components/card/image_card/BannerImageCard";
import NewArrivalsCard from "../../components/card/NewArrivalsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="pt-10 sm:pt-0 ">
      <div>
        <HomeBgImage></HomeBgImage>
        <div className="bg-white">
          <div className="bg-deepBlue h-11 text-center flex justify-center items-center py-6 text-[12px] ">
            <p className="text-white font-[700] lg:text-base text-xs mx-1">
              <b>Discover Your Perfect Pair </b> Try our Style Quiz to find the
              best pair for you.{" "}
              <Link href="/">
                <u>Take the Style Quiz</u>
              </Link>
            </p>
          </div>
          {/* ------------------FAVOURITES CARD------------------ */}
          <TabsCard />

          {/* -_-_-_-_-_-_-_-_-_-_-_-_-_BANNER IMAGE-_-_-_-_-_-_-_-_-_-_-_-_-_ */}

          <BannerImageCard />
          {/* -_-_-_-_-_-_-_-_-_-_-_-_-_TAB IMAGE (NEW ARRIVAL CARD) -_-_-_-_-_-_-_-_-_-_-_-_-_ */}
          <NewArrivalsCard />

          {/* <div className="absolute flex items-center">
            
            {imgList.map((data) => {
              return (
                <Image src={data.img} alt={data.img} height={200} width={200} className='w-[400px] p-3 ' />
              );
            })}
          </div> */}


        </div>

        <div>Vishal</div>
      </div>
    </main>
  );
}

const imgList = [
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
  { img: "/category/fav1.jpg" },
];
