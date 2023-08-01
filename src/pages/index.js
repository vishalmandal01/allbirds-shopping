import HomeBgImage from "../../components/HomeBgImage";
import Link from "next/link";
import FavouritesCard from "../../components/card/FavouritesCard";

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
          <FavouritesCard />
        </div>

        <div>Vishal</div>
      </div>
    </main>
  );
}
