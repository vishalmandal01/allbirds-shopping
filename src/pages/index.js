import HomeBgImage from "../../components/HomeBgImage";
import Link from "next/link";
import { TabsCard } from "../../components/card/TabsCard";
import {
  bannerThardList,
  bannerSecond,
  bannerEvent,
} from "../../components/all_list/BannerList";
import {
  collectionList,
  storieList,
} from "../../components/all_list/CollectionsList";
import NewArrivalsCard from "../../components/card/NewArrivalsCard";
import Image from "next/image";
import NewBannerImageCard from "../../components/card/image_card/NewBannerImageCard";
import CollectionScrollCard from "../../components/card/CollectionScrollCard";
import BottomJoingCard from "../../components/card/BottomJoingCard";

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

          <NewBannerImageCard list={bannerSecond} />
          {/* -_-_-_-_-_-_-_-_-_-_-_-_-_TAB IMAGE (NEW ARRIVAL CARD) -_-_-_-_-_-_-_-_-_-_-_-_-_ */}
          <NewArrivalsCard />

          {/* -_-_-_-_-_-_-_-_-_-_-_-_-_BANNER IMAGE (Collections) -_-_-_-_-_-_-_-_-_-_-_-_-_ */}
          <NewBannerImageCard list={bannerThardList} />
          <CollectionScrollCard
            title="Shop The Collections"
            list={collectionList}
          />
          <div className="mt-28">
            <NewBannerImageCard list={bannerEvent} />
          </div>
          <CollectionScrollCard title="Stories" list={storieList} />
        </div>

        <BottomJoingCard />
      </div>
    </main>
  );
}
